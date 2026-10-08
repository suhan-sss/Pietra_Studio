"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

const categories = ["All", "Cultural", "Residential", "Hospitality"];

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-36 md:pt-52 pb-16 md:pb-24 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 items-end">
              <h1 className="col-span-12 md:col-span-8 serif text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tightest">
                Built work,
                <br />
                <span className="italic text-clay/80">photographed</span>
                <br />a season after handover.
              </h1>
              <div className="col-span-12 md:col-span-3 md:col-start-10 max-w-sm">
                <div className="label mb-3">Six rooms · four cities</div>
                <p className="text-base leading-relaxed text-charcoal/75">
                  Each project is listed with the year it was completed, the
                  type of room, and the city. Photographs were taken at least
                  one season after handover.
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
                    ? projects.length
                    : projects.filter((p) => p.category === c).length})
                </span>
              </button>
            ))}
          </div>
          <div className="label hidden md:block shrink-0">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </div>
        </div>
      </section>

      {/* Project list */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.ul layout className="border-t border-charcoal/15">
                {filtered.map((p, i) => (
                  <motion.li
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="border-b border-charcoal/15"
                  >
                    <Link href={`/work/${p.slug}`} className="group block">
                      <div className="grid grid-cols-12 gap-4 items-center py-10 md:py-12 px-2 hover:bg-bone/60 transition-colors">
                        <span className="col-span-12 md:col-span-1 label">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="col-span-12 md:col-span-5 serif text-3xl md:text-5xl lg:text-6xl tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                          {p.title}
                        </h3>
                        <span className="col-span-6 md:col-span-2 label">
                          {p.category}
                        </span>
                        <span className="col-span-3 md:col-span-2 label">
                          {p.location}
                        </span>
                        <span className="col-span-3 md:col-span-1 label text-right">
                          {p.year ?? "—"}
                        </span>
                        <span className="hidden md:block md:col-span-1 serif text-3xl text-charcoal/30 group-hover:text-charcoal transition-colors text-right">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <div className="py-16 text-center label text-charcoal/60">
                No projects in this category yet.
              </div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-24 md:mt-36 text-center">
            <div className="label mb-4">About the studio</div>
            <h2 className="serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Pietra is a studio of twelve, with rooms in Lisbon and Milan.
            </h2>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-ink transition-colors"
            >
              Visit the studio
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
