"use client";

import { useState } from "react";
import Reveal from "@/components/effects/Reveal";
import ScrollProgress from "@/components/effects/ScrollProgress";

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  city: string;
  scope: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  role: "",
  city: "",
  scope: "",
  message: "",
};

export default function ContactPage() {
  const [state, setState] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setState((s) => ({ ...s, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New enquiry · ${state.scope || "Project"} · ${state.name}`;
    const body =
      `Name: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\nRole: ${state.role}\nCity: ${state.city}\nScope: ${state.scope}\n\n${state.message}`;
    window.location.href = `mailto:studio@pietra.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function reset() {
    setState(initial);
    setSent(false);
  }

  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-36 md:pt-52 pb-12 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Reveal>
            <div className="label mb-4">Contact · Pietra</div>
            <h1 className="serif text-5xl md:text-7xl lg:text-[8rem] leading-[1] tracking-tightest max-w-6xl">
              Tell us about the site,
              <br />
              <span className="italic text-clay/80">the scope, and the timeline.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-charcoal/75 leading-relaxed">
              We read everything that arrives at the studio. The earliest
              projects are scheduled from October 2026 — early enquiries help.
              A short email with one photograph of the room is enough to begin.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-16 gap-x-6">
            {/* Form */}
            <div className="col-span-12 md:col-span-7">
              <form onSubmit={submit} className="space-y-8">
                <div className="grid grid-cols-12 gap-6">
                  <Field
                    label="Name"
                    value={state.name}
                    onChange={(v) => update("name", v)}
                    className="col-span-12 md:col-span-6"
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={state.email}
                    onChange={(v) => update("email", v)}
                    className="col-span-12 md:col-span-6"
                    required
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={state.phone}
                    onChange={(v) => update("phone", v)}
                    className="col-span-12 md:col-span-6"
                  />
                  <Field
                    label="Your role"
                    value={state.role}
                    onChange={(v) => update("role", v)}
                    placeholder="Owner · Architect · Press"
                    className="col-span-12 md:col-span-6"
                  />
                  <Field
                    label="City"
                    value={state.city}
                    onChange={(v) => update("city", v)}
                    className="col-span-12 md:col-span-6"
                  />
                  <Field
                    label="Scope"
                    value={state.scope}
                    onChange={(v) => update("scope", v)}
                    placeholder="Residential · Renovation · Hospitality"
                    className="col-span-12 md:col-span-6"
                  />
                </div>

                <div>
                  <label className="label mb-3 block">
                    A few lines on the room
                  </label>
                  <textarea
                    rows={6}
                    value={state.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Surface, light, what you would like changed, when you'd like to begin…"
                    className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal outline-none py-3 text-base md:text-lg leading-relaxed resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-4">
                  <p className="label text-charcoal/60 max-w-xs">
                    We reply within a few working days. No mailing list, no
                    follow-up.
                  </p>
                  <div className="flex items-center gap-3">
                    {sent && (
                      <button
                        type="button"
                        onClick={reset}
                        className="label text-charcoal/60 hover:text-charcoal underline-offset-4 hover:underline"
                      >
                        Start a new one
                      </button>
                    )}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-ink transition-colors"
                    >
                      {sent ? "Sent" : "Send"}
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="space-y-12">
                <div>
                  <div className="label mb-3">New projects</div>
                  <a
                    className="serif text-2xl md:text-3xl tracking-tight link-underline break-words"
                    href="mailto:studio@pietra.com"
                  >
                    studio@pietra.com
                  </a>
                </div>
                <div>
                  <div className="label mb-3">Press</div>
                  <a
                    className="serif text-2xl md:text-3xl tracking-tight link-underline break-words"
                    href="mailto:press@pietra.com"
                  >
                    press@pietra.com
                  </a>
                </div>
                <div>
                  <div className="label mb-3">Telephone</div>
                  <a
                    className="serif text-2xl md:text-3xl tracking-tight link-underline"
                    href="tel:+351213461200"
                  >
                    +351 21 346 1200
                  </a>
                </div>

                <div className="pt-6 border-t border-charcoal/15 space-y-6">
                  <div>
                    <div className="label mb-3">Hours</div>
                    <p className="text-charcoal/75">
                      Monday — Friday, 9 to 18 (Lisbon time)
                    </p>
                  </div>
                  <div>
                    <div className="label mb-3">Availability</div>
                    <p className="text-charcoal/75">
                      Currently booking from October 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addresses */}
      <section className="py-16 md:py-24 invert-section">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="label text-cream/60 mb-12">Two rooms · two cities</div>
          <div className="grid grid-cols-12 gap-6">
            <a
              href="https://maps.google.com/?q=Rua+das+Flores+24+Lisbon"
              target="_blank"
              rel="noreferrer"
              className="col-span-12 md:col-span-6 block group"
            >
              <div className="aspect-[16/10] overflow-hidden mb-6 bg-ink">
                <iframe
                  title="Pietra Lisbon"
                  src="https://www.google.com/maps?q=Rua+das+Flores+24,+1200-195+Lisbon&output=embed"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
                  loading="lazy"
                />
              </div>
              <div className="serif text-3xl md:text-4xl tracking-tight">
                Lisbon · Headquarters
              </div>
              <div className="mt-2 text-cream/70">
                Rua das Flores 24, 1200-195 Lisbon, Portugal
              </div>
            </a>
            <a
              href="https://maps.google.com/?q=Via+Solferino+12+Milano"
              target="_blank"
              rel="noreferrer"
              className="col-span-12 md:col-span-6 block group"
            >
              <div className="aspect-[16/10] overflow-hidden mb-6 bg-ink">
                <iframe
                  title="Pietra Milan"
                  src="https://www.google.com/maps?q=Via+Solferino+12,+20121+Milano&output=embed"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
                  loading="lazy"
                />
              </div>
              <div className="serif text-3xl md:text-4xl tracking-tight">
                Milan · Studio
              </div>
              <div className="mt-2 text-cream/70">
                Via Solferino 12, 20121 Milano, Italia
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="label mb-3 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal outline-none py-3 text-base md:text-lg"
      />
    </div>
  );
}
