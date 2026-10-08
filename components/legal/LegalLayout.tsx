"use client";

import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

type Section = { n: string; heading: string; body: string[] };

type Props = {
  eyebrow: string;
  title: string;
  meta: { label: string; value: string }[];
  intro: string[];
  sections: Section[];
};

export default function LegalLayout({ eyebrow, title, meta, intro, sections }: Props) {
  return (
    <>
      <ScrollProgress />
      <section className="pt-36 md:pt-52 pb-16 md:pb-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="label mb-4">{eyebrow}</div>
            <h1 className="serif text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.05]">
              {title}
            </h1>
            <ul className="mt-8 flex items-center justify-center gap-4 label text-charcoal/60 flex-wrap">
              {meta.map((m, i) => (
                <li key={m.label} className="flex items-center gap-3">
                  {i !== 0 && <span aria-hidden>·</span>}
                  <span>
                    {m.label}: {m.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2">
              <div className="label sticky top-32">Effective policy</div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-3 max-w-3xl">
              <Reveal>
                <div className="space-y-6 mb-12">
                  {intro.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "serif text-2xl md:text-3xl tracking-tight leading-snug text-charcoal"
                          : "text-base md:text-lg leading-relaxed text-charcoal/85"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              {sections.map((s) => (
                <section key={s.n} className="mt-12">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="serif text-3xl md:text-5xl text-charcoal/30 tracking-tight leading-none">
                      {s.n}
                    </span>
                    <h2 className="serif text-xl md:text-2xl tracking-tight">
                      {s.heading}
                    </h2>
                  </div>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-charcoal/85">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
