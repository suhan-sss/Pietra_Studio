"use client";

import Reveal from "@/components/effects/Reveal";
import CountUp from "@/components/effects/CountUp";

const stats = [
  { value: 15, suffix: "", label: "Years of practice" },
  { value: 60, suffix: "+", label: "Completed projects" },
  { value: 12, suffix: "", label: "People in the studio" },
  { value: 2, suffix: "", label: "Studios · Lisbon & Milan" },
];

export default function Intro() {
  return (
    <section className="relative py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <div className="label mb-4">From site to delivery</div>
              <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight">
                Pietra is a studio of twelve, founded in 2011 by Marta Ruiz and Tomás Neves.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-5">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-2xl leading-relaxed text-charcoal/85">
                We work on a small number of rooms at a time, with the same
                plasterers, masons, and cabinetmakers we started with. Nothing
                enters a room unless it earns the space it takes, and nothing is
                specified that we cannot repair.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/70">
                The studio's two rooms are in Lisbon and Milan. We are currently
                booking from October 2026. A site visit, fixed fee, is the
                first thing we offer every new project.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 mt-16">
            <Reveal delay={0.3}>
              <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-charcoal/15 pt-10">
                {stats.map((s, i) => (
                  <li
                    key={s.label}
                    className={`flex flex-col gap-2 px-3 py-6 md:px-5 ${
                      i !== 0 ? "md:border-l border-charcoal/15" : ""
                    }`}
                  >
                    <span className="serif text-5xl md:text-7xl tracking-tightest leading-none">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </span>
                    <span className="label">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
