"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journalArticles } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

const categories = ["All", "Process", "Materials", "Projects", "Craft"];

export default function JournalPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return journalArticles;
    return journalArticles.filter((a) => a.category === filter);
  }, [filter]);

  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-36 md:pt-52 pb-12 md:pb-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 items-end">
              <h1 className="col-span-12 md:col-span-9 serif text-5xl md:text-7xl lg:text-[9rem] leading-[0.95] tracking-tightest">
                Notes on material,
                <br />
                on light, and on the
                <br />
                <span className="italic text-clay/80">things a drawing</span>
                <br />
                <span className="italic text-clay/80">cannot settle.</span>
              </h1>
              <div className="col-span-12 md:col-span-3 md:col-start-10 max-w-sm md:pb-4">
                <div className="label mb-3">Six notes · Lisbon</div>
                <p className="text-base leading-relaxed text-charcoal/75">
                  Six notes from the Pietra studio in Lisbon, on lime plaster,
                  honed stone, linen and brass, and on what a site tells you
                  before anything is drawn.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-24 z-30 bg-cream/85 backdrop-blur-md border-y border-charcoal/10 py-5">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
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
                <span className="text-[10px] opacity-60">
                  ({c === "All"
                    ? journalArticles.length
                    : journalArticles.filter((a) => a.category === c).length})
                </span>
              </button>
            ))}
          </div>
          <div className="label hidden md:block shrink-0">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
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
                    <Link href={`/journal/${a.slug}`} className="group block">
                      <div className="grid grid-cols-12 gap-4 items-baseline py-8 md:py-12 px-2 hover:bg-bone/60 transition-colors">
                        <span className="col-span-6 md:col-span-2 label">
                          {a.date}
                        </span>
                        <span className="col-span-6 md:col-span-2 label text-clay">
                          {a.category}
                        </span>
                        <h3 className="col-span-12 md:col-span-7 serif text-2xl md:text-4xl lg:text-5xl tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                          {a.title}
                        </h3>
                        <span className="hidden md:block md:col-span-1 serif text-2xl md:text-3xl text-charcoal/30 group-hover:text-charcoal transition-colors text-right">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <div className="py-16 text-center label text-charcoal/60">
                No articles in this category yet.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 md:py-24 invert-section">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7">
                <div className="label text-cream/60 mb-4">Stay close</div>
                <h3 className="serif text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl">
                  New notes from the studio, six times a year.
                </h3>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="col-span-12 md:col-span-4 md:col-start-9 flex items-center gap-2 border-b border-cream/30 pb-3"
              >
                <input
                  type="email"
                  required
                  placeholder="email@studio.com"
                  className="flex-1 bg-transparent text-cream placeholder:text-cream/40 outline-none py-2 text-base"
                />
                <button
                  type="submit"
                  className="text-cream hover:text-brass transition-colors serif text-2xl"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
