"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen pt-32 md:pt-40 pb-24 overflow-hidden bg-cream"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-bone hidden md:block" />
        <div
          className="absolute right-10 top-32 w-[44%] aspect-[4/5] bg-cover bg-center opacity-95 hidden md:block"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
      </motion.div>

      {/* Coordinates */}
      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-[1480px] px-5 md:px-10"
      >
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="h-px w-8 bg-charcoal/40" />
          <span className="label">Lisbon · 38.7° N, 9.1° W</span>
        </div>

        <motion.h1
          style={{ y: y2 }}
          className="display-1 text-[19vw] md:text-[14vw] lg:text-[12.5rem] text-charcoal"
        >
          <span className="block">Interior</span>
          <span className="block pl-[8%] md:pl-[12%]">
            Architecture
          </span>
          <span className="block pl-[4%]">
            <span className="italic font-light text-clay/80">&amp;</span> Design,
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-20 grid grid-cols-12 gap-6 items-end"
        >
          <p className="col-span-12 md:col-span-4 md:col-start-2 max-w-sm text-base md:text-lg leading-relaxed text-charcoal/80">
            Calm interiors, on a small number of rooms at a time. Built with the
            same plasterers, masons, and cabinetmakers the studio began with —
            for clients who would prefer to wait.
          </p>
          <div className="col-span-12 md:col-span-3 md:col-start-7 flex md:justify-end items-center gap-6">
            <div className="label">Scroll</div>
            <div className="relative h-10 w-px bg-charcoal/40 overflow-hidden">
              <motion.div
                animate={{ y: [-40, 40] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 h-3 bg-charcoal"
              />
            </div>
          </div>
        </motion.div>

        {/* Side label */}
        <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="vertical-rl label tracking-[0.4em] text-charcoal/60">
            Pietra · Studio of twelve · Lisbon · Milan
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
}
