import Link from "next/link";

const siteLinks = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://pinterest.com", label: "Pinterest" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://behance.net", label: "Behance" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-charcoal text-cream pt-24 md:pt-32 pb-10 mt-24 md:mt-32">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          <div className="col-span-12 md:col-span-5">
            <div className="serif text-[18vw] md:text-[10rem] leading-[0.85] tracking-tightest">
              Pietra<span className="text-brass">.</span>
            </div>
            <p className="mt-6 max-w-md text-cream/70 text-base leading-relaxed">
              An interior architecture studio of twelve in Lisbon and Milan.
              Working on a small number of rooms at a time, with the same
              plasterers, masons, and cabinetmakers we started with.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label text-cream/50">Site</div>
            <ul className="mt-5 space-y-2">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-cream/90 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label text-cream/50">Legal</div>
            <ul className="mt-5 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-cream/90 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-9">
            <div className="label text-cream/50">Studio</div>
            <ul className="mt-5 space-y-2 text-cream/90">
              <li>
                <a className="link-underline" href="mailto:studio@pietra.com">
                  studio@pietra.com
                </a>
              </li>
              <li>
                <a className="link-underline" href="tel:+351213461200">
                  +351 21 346 1200
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href="https://maps.google.com/?q=Rua+das+Flores+24+Lisbon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rua das Flores 24, 1200-195 Lisbon
                </a>
              </li>
            </ul>
            <div className="label text-cream/50 mt-10">Follow</div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-cream/90 hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-cream/15 pt-8">
          <div className="serif text-[18vw] md:text-[14rem] leading-[0.85] tracking-tightest text-cream/10 select-none pointer-events-none">
            Calm rooms.
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-auto gap-3 text-cream/55 text-xs">
            <div>© {year} Pietra Studio, Lda.</div>
            <div>Lisbon · Milan · 38.7° N, 9.1° W</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
