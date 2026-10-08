"use client";

import Reveal from "@/components/effects/Reveal";

export default function Testimonial() {
  return (
    <section className="relative py-24 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <Reveal>
          <div className="label mb-8">A note from a client</div>
          <blockquote className="display-2 max-w-5xl text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            <span className="text-clay/70">&ldquo;</span>
            We hadn't realised the apartment was dark until it wasn't. They took
            the partitions out one weekend, the plasterers came back on the
            Tuesday, and the rest of the work just happened around them.
            <span className="text-clay/70">&rdquo;</span>
          </blockquote>
          <div className="mt-12 flex items-center gap-4 label">
            <span className="h-px w-12 bg-charcoal/30" />
            Private client, Lisbon — Casa Margeride, 2025
          </div>
        </Reveal>
      </div>
    </section>
  );
}
