"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div
            className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
              scrolled
                ? "bg-cream/90 backdrop-blur-md border-charcoal/10 px-5 py-3"
                : "bg-transparent border-transparent px-2 py-2"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Pietra home"
            >
              <span className="serif text-2xl md:text-[26px] leading-none tracking-tight">
                Pietra
              </span>
              <span className="hidden md:inline label">Studio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-9">
              {links.map((l) => {
                const active = pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`link-underline text-sm font-medium tracking-tight ${
                      active ? "text-charcoal" : "text-charcoal/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              {/* "Contact" nav link is the single source of truth for the
                  primary CTA — no duplicate "Get in touch" button needed. */}
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-charcoal text-cream"
              aria-label="Open menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 4h14M1 8h14M1 12h14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/" className="serif text-2xl" onClick={() => setOpen(false)}>
            Pietra
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-charcoal text-cream"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-16 px-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="serif text-5xl tracking-tight"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-10 space-y-3 label">
            <a
              href="mailto:studio@pietra.com"
              className="block link-underline"
            >
              studio@pietra.com
            </a>
            <a href="tel:+351213461200" className="block link-underline">
              +351 21 346 1200
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
