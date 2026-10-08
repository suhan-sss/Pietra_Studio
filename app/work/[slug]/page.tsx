import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project · Pietra" };
  return {
    title: `${p.title} · Pietra`,
    description: p.description,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const others = projects.filter((p) => p.slug !== project.slug);
  const next = others[idx % others.length];

  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <article className="pt-32 md:pt-44 pb-12 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="text-center mb-10">
              <div className="label mb-4">{project.location} · Pietra</div>
              <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tightest">
                {project.title}
              </h1>
              <p className="serif italic text-xl md:text-2xl text-clay/80 mt-6 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden mt-12">
              <Image
                src={project.hero}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </article>

      {/* Info */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <dl className="grid grid-cols-12 gap-y-6 gap-x-6 border-y border-charcoal/15 py-10">
              {[
                { label: "Type", value: project.type },
                { label: "Location", value: project.location },
                { label: "Year", value: project.year ?? "—" },
                { label: "Scope", value: project.scope },
                ...(project.surface
                  ? [{ label: "Surface", value: project.surface }]
                  : []),
                ...(project.completion
                  ? [{ label: "Completion", value: project.completion }]
                  : []),
                ...(project.photography
                  ? [{ label: "Photography", value: project.photography }]
                  : []),
              ].map((row) => (
                <div
                  key={row.label}
                  className="col-span-6 md:col-span-2 py-1"
                >
                  <dt className="label mb-1">{row.label}</dt>
                  <dd className="text-sm md:text-base">{row.value}</dd>
                </div>
              ))}
              <div className="col-span-12 md:col-span-2 col-start-7 md:col-start-11 py-1">
                <dt className="label mb-1">Team</dt>
                <dd className="text-sm md:text-base">
                  {project.team.join(", ")}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <h2 className="col-span-12 md:col-span-3 label">From brief to handover</h2>
            <div className="col-span-12 md:col-span-7 md:col-start-5 space-y-8 text-lg md:text-xl leading-relaxed text-charcoal/85">
              {project.story.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "serif text-3xl md:text-4xl tracking-tight leading-tight text-charcoal"
                      : ""
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            {project.images.map((img, i) => (
              <figure
                key={i}
                className={`${
                  i % 4 === 0
                    ? "col-span-12"
                    : i % 4 === 1
                    ? "col-span-12 md:col-span-7"
                    : i % 4 === 2
                    ? "col-span-12 md:col-span-5"
                    : "col-span-12"
                } mb-8`}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 label max-w-md">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-24 bg-cream border-t border-charcoal/15">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <h2 className="col-span-12 md:col-span-3 label">Materials</h2>
            <p className="col-span-12 md:col-span-7 md:col-start-5 serif text-3xl md:text-4xl tracking-tight leading-tight">
              Three materials, by name, by quarry, by finish.
            </p>
          </div>
          <ul className="border-t border-charcoal/15">
            {project.materials.map((m, i) => (
              <li
                key={m.name}
                className="border-b border-charcoal/15 grid grid-cols-12 gap-6 py-8"
              >
                <span className="col-span-12 md:col-span-2 label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 md:col-span-3 serif text-2xl md:text-3xl">
                  {m.name}
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-6 text-charcoal/75 text-base md:text-lg max-w-xl">
                  {m.note}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      {project.quote && (
        <section className="py-16 md:py-32 invert-section">
          <div className="mx-auto max-w-[1480px] px-5 md:px-10">
            <blockquote className="serif text-3xl md:text-5xl leading-tight tracking-tight max-w-4xl">
              <span className="text-brass/80">&ldquo;</span>
              {project.quote.text}
              <span className="text-brass/80">&rdquo;</span>
            </blockquote>
            <div className="mt-8 label text-cream/60">— {project.quote.by}</div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="py-16 md:py-24 bg-cream border-t border-charcoal/15">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="label mb-4">Next project</div>
            <h3 className="serif text-5xl md:text-7xl tracking-tightest group-hover:translate-x-2 transition-transform duration-500">
              {next.title} <span className="text-charcoal/30">→</span>
            </h3>
            <div className="mt-3 label text-charcoal/60">
              {next.category} · {next.location}
              {next.year && ` · ${next.year}`}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
