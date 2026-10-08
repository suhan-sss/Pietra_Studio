import { notFound } from "next/navigation";
import Link from "next/link";
import { journalArticles } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params) {
  const a = journalArticles.find((x) => x.slug === params.slug);
  if (!a) return { title: "Article · Pietra" };
  return { title: `${a.title} · Pietra`, description: a.excerpt };
}

export default function ArticlePage({ params }: Params) {
  const article = journalArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const idx = journalArticles.findIndex((a) => a.slug === article.slug);
  // Exclude the current article from "next"
  const others = journalArticles.filter((a) => a.slug !== article.slug);
  const next = others[idx % others.length];

  return (
    <>
      <ScrollProgress />

      <article className="pt-36 md:pt-52 pb-16 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 label text-charcoal/60 mb-6">
                <span>{article.date}</span>
                <span>·</span>
                <span className="text-clay">{article.category}</span>
              </div>
              <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.95]">
                {article.title}
              </h1>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="py-12 md:py-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-2">
                <div className="label sticky top-32">Essay</div>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-3 max-w-3xl space-y-8 text-lg leading-relaxed text-charcoal/85">
                {article.content.map((p, i) => {
                  const isLast = i === article.content.length - 1;
                  return (
                    <p
                      key={i}
                      className={
                        isLast
                          ? "serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal pt-6 border-t border-charcoal/10"
                          : ""
                      }
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream border-t border-charcoal/15">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Link href={`/journal/${next.slug}`} className="group block">
            <div className="label mb-4">Next note</div>
            <h3 className="serif text-4xl md:text-6xl lg:text-7xl tracking-tightest group-hover:translate-x-2 transition-transform duration-500">
              {next.title} <span className="text-charcoal/30">→</span>
            </h3>
            <div className="mt-3 label text-charcoal/60">
              {next.date} · {next.category}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
