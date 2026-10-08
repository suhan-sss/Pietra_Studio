"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journalArticles } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";

const categories = ["All", "Process", "Materials", "Projects", "Craft"];

export default function Journal() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return journalArticles.slice(0, 6);
    return journalArticles
      .filter((a) => a.category === filter)
      .slice(0, 6);
  }, [filter]);

  return (
    <section className="relative py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="label mb-4">Journal</div>
              <h2 className="display-2 text-5xl md:text-7xl tracking-tightest leading-[0.95]">
                Six notes<br />
                <span className="italic text-clay/80">from the studio.</span>
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 self-start md:self-end label border-b border-charcoal pb-1 hover:text-charcoal/70 transition"
            >
              All articles
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
          <motion.ul layout className="border-t border-charcoal/15">
            {filtered.map((a, i) => (
              <motion.li
                key={a.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-charcoal/15"
              >
                <Link
                  href={`/journal/${a.slug}`}
                  className="group flex items-baseline gap-6 md:gap-12 py-7 md:py-10 hover:bg-bone/60 transition-colors px-2"
                >
                  <span className="label w-24 shrink-0 hidden md:block">
                    {a.date}
                  </span>
                  <span className="label w-20 shrink-0 hidden md:block text-clay">
                    {a.category}
                  </span>
                  <h3 className="serif text-2xl md:text-3xl lg:text-4xl tracking-tight flex-1 group-hover:translate-x-2 transition-transform duration-500">
                    {a.title}
                  </h3>
                  <span className="serif text-xl md:text-2xl text-charcoal/30 group-hover:text-charcoal transition-colors">
                    →
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
