"use client";

import Image from "next/image";
import Reveal from "@/components/effects/Reveal";

export default function Studio() {
  const tags = [
    "Residential",
    "Lisbon",
    "Milan",
    "Cultural",
    "Hospitality",
    "Restoration",
    "Furniture",
    "Lighting",
  ];

  const items = [
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      alt: "Drawings for a walnut sideboard",
      caption: "Drawings for a walnut sideboard, Rua das Flores",
      offset: "",
    },
    {
      src: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=900&q=80",
      alt: "Massing models for Serra Archive",
      caption: "Massing models for Serra Archive",
      offset: "mt-10 md:mt-14",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
      alt: "Oak boards sorted by grain",
      caption: "Oak boards sorted by grain",
      offset: "-mt-6 md:-mt-10",
    },
    {
      src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80",
      alt: "Palette review",
      caption: "Travertine, oak, lime plaster, brass",
      offset: "",
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <Reveal>
              <div className="label mb-6">Studio</div>
              <h2 className="serif text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight">
                We work on a small number of rooms at a time, with the same
                plasterers, masons, and cabinetmakers we started with.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-charcoal/75 leading-relaxed text-base md:text-lg">
                The studio is twelve people in two cities — Lisbon and Milan.
                We share a workshop in Sintra, a joinery in Évora, and a stone
                yard in Cascais. Most of what we specify is made within an
                hour of one of those rooms.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center rounded-full border border-charcoal/20 px-3 py-1.5 text-xs uppercase tracking-wider text-charcoal/80"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 grid grid-cols-2 gap-3 md:gap-4">
            {items.map((it, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <figure className={it.offset}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      width={700}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 label">{it.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
