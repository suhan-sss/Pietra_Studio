"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";

const categories = ["All", "Cultural", "Residential", "Hospitality"];

export default function SelectedWork() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="relative py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="label mb-4">Selected work</div>
              <h2 className="display-2 text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.95]">
                Eight rooms<br />
                <span className="italic text-clay/80">we can show you.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 self-start md:self-end label border-b border-charcoal pb-1 hover:text-charcoal/70 transition"
            >
              All projects ({projects.length})
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 mb-12 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  filter === c
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-transparent text-charcoal/70 border-charcoal/20 hover:border-charcoal/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-12 gap-x-6 gap-y-16">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group ${
                  i % 5 === 0
                    ? "col-span-12 md:col-span-8"
                    : i % 5 === 1
                    ? "col-span-12 md:col-span-4"
                    : i % 5 === 2
                    ? "col-span-12 md:col-span-7"
                    : i % 5 === 3
                    ? "col-span-12 md:col-span-5"
                    : "col-span-12 md:col-span-6"
                }`}
              >
                <Link href={`/work/${p.slug}`} className="block">
                  <div className="img-zoom aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-bone">
                    <Image
                      src={p.hero}
                      alt={p.title}
                      width={1200}
                      height={1500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="serif text-2xl md:text-3xl tracking-tight">
                        {p.title}
                      </h3>
                      <div className="mt-1 label">
                        {p.category} · {p.location}
                        {p.year && ` · ${p.year}`}
                      </div>
                    </div>
                    <span className="serif text-2xl text-charcoal/30 group-hover:text-charcoal transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
