"use client";

import Link from "next/link";
import Reveal from "@/components/effects/Reveal";

export default function ContactCta() {
  return (
    <section className="relative py-24 md:py-36 invert-section">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="label text-cream/60 mb-6">Begin a project</div>
              <h2 className="display-1 text-5xl md:text-7xl lg:text-[9rem] tracking-tightest leading-[0.95]">
                A short email
                <br />
                with one photograph
                <br />
                <span className="italic text-brass/80">is enough.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-cream/75 text-lg leading-relaxed">
                We read everything that arrives at the studio. Replies take a
                few days at most. The earliest projects are scheduled from
                October 2026.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream text-charcoal px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-bone transition-colors"
              >
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
