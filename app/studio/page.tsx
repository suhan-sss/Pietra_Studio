"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";
import { team, awards, services, approach } from "@/lib/data";

const galleryCaptions = [
  "Drawings for a walnut sideboard, Rua das Flores",
  "Massing models for Serra Archive, before the second review",
  "Oak boards sorted by grain for Quinta do Vale",
  "Palette review: travertine, oak, lime plaster, one brass sample",
  "The first room we rented, kept as we found it",
  "The joinery bench in Sintra, after a long Tuesday",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
];

const stats = [
  { v: "15", l: "Years of Practice" },
  { v: "60+", l: "Completed Projects" },
  { v: "12", l: "People in the Studio" },
  { v: "2", l: "Studios · Lisbon & Milan" },
];

export default function StudioPage() {
  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-36 md:pt-52 pb-16 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="label mb-6">Studio · Pietra</div>
            <h1 className="serif text-4xl md:text-6xl lg:text-[7rem] leading-[1.05] tracking-tightest max-w-6xl">
              We work on a small number of rooms at a time, with the same
              plasterers, masons, and cabinetmakers we started with.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 border-y border-charcoal/15 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 md:justify-between">
            {stats.map((s, i) => (
              <li key={s.l} className="flex items-center gap-5 md:gap-8">
                <span className="serif text-5xl md:text-7xl tracking-tightest leading-none">
                  {s.v}
                </span>
                <span className="label max-w-[14ch]">{s.l}</span>
                {i < stats.length - 1 && (
                  <span className="hidden md:inline-block label text-clay/50 pl-2">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="label mb-12">From the studio</div>
          <div className="grid grid-cols-12 gap-6">
            {galleryImages.map((src, i) => (
              <figure
                key={i}
                className={`mb-8 ${
                  i % 3 === 0
                    ? "col-span-12 md:col-span-8"
                    : i % 3 === 1
                    ? "col-span-12 md:col-span-4"
                    : "col-span-12 md:col-span-7"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt={galleryCaptions[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 label max-w-md">
                  {galleryCaptions[i]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 invert-section">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
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
          <ul className="border-t border-cream/15">
            {approach.map((s, i) => (
              <li
                key={s.n}
                className="group border-b border-cream/15 py-10 md:py-12"
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-2 label text-cream/60">
                    Stage {s.n}
                  </div>
                  <h3 className="col-span-12 md:col-span-3 serif text-2xl md:text-4xl tracking-tight">
                    {s.title}
                  </h3>
                  <p className="col-span-12 md:col-span-6 md:col-start-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-xl">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="label mb-12">Team</div>
          <ul className="border-t border-charcoal/15">
            {team.map((m, i) => (
              <li
                key={m.name}
                className="border-b border-charcoal/15 hover:bg-bone/60 transition-colors"
              >
                <div className="grid grid-cols-12 gap-6 py-6 md:py-8 items-baseline px-2">
                  <span className="col-span-12 md:col-span-2 label">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-12 md:col-span-5 serif text-2xl md:text-3xl lg:text-4xl tracking-tight">
                    {m.name}
                  </span>
                  <span className="col-span-12 md:col-span-5 text-charcoal/75 text-base md:text-lg">
                    {m.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24 bg-cream border-t border-charcoal/15">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-3">
              <div className="label mb-4">Recognition</div>
              <h2 className="serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Awards & features
              </h2>
            </div>
            <p className="col-span-12 md:col-span-7 md:col-start-5 text-charcoal/75 text-lg leading-relaxed max-w-2xl">
              Recent awards, publications, and shortlistings we are happy to
              have been part of.
            </p>
          </div>
          <ul className="border-t border-charcoal/15">
            {awards.map((a, i) => (
              <li key={a.title + a.year} className="border-b border-charcoal/15">
                <div className="grid grid-cols-12 gap-6 py-6 md:py-7 items-baseline">
                  <span className="col-span-12 md:col-span-2 label">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-12 md:col-span-5 serif text-2xl md:text-3xl tracking-tight">
                    {a.title}
                  </span>
                  <span className="col-span-6 md:col-span-4 text-charcoal/75">
                    {a.detail}
                  </span>
                  <span className="col-span-6 md:col-span-1 label md:text-right">
                    {a.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 invert-section">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-3">
              <div className="label text-cream/60 mb-4">Capabilities</div>
              <h2 className="serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Sixteen things we do in a room.
              </h2>
            </div>
            <p className="col-span-12 md:col-span-5 md:col-start-8 text-cream/75 text-lg leading-relaxed">
              Each line below is something we can deliver with our own people,
              or with a single named partner.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 border-t border-cream/15">
            {services.map((s, i) => (
              <li
                key={s.name}
                className={`border-b border-cream/15 px-4 py-7 md:py-8 ${
                  i % 2 === 1 ? "md:border-l border-cream/15" : ""
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 label text-cream/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="serif text-xl md:text-2xl tracking-tight">
                      {s.name}
                    </h3>
                    <p className="text-cream/65 text-sm mt-1.5">{s.note}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="label mb-4">Begin a project</div>
              <h2 className="serif text-5xl md:text-7xl tracking-tightest leading-[0.95]">
                A short email
                <br />with one photograph
                <br />
                <span className="italic text-clay/80">is enough.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-ink transition-colors"
              >
                Get in touch <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
