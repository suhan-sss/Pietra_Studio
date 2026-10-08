"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/effects/Reveal";
import { approach } from "@/lib/data";

export default function Approach() {
  return (
    <section className="relative py-24 md:py-36 invert-section">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="label text-cream/60 mb-4">Approach</div>
              <h2 className="serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Four stages, fixed from the first conversation.
              </h2>
            </div>
            <p className="col-span-12 md:col-span-5 md:col-start-8 text-cream/75 text-lg leading-relaxed">
              The same four stages for every project, large or small. Each one
              has a single invoice and a single point of contact.
            </p>
          </div>
        </Reveal>

        <ul className="border-t border-cream/15">
          {approach.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="group border-b border-cream/15"
            >
              <div className="grid grid-cols-12 gap-6 items-start py-10 md:py-12">
                <div className="col-span-12 md:col-span-2 label text-cream/60">
                  Stage {s.n}
                </div>
                <h3 className="col-span-12 md:col-span-3 serif text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-6 md:col-start-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-xl">
                  {s.body}
                </p>
                <div className="hidden md:block col-span-12 md:col-span-1 md:text-right text-cream/50 serif text-2xl">
                  →
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
