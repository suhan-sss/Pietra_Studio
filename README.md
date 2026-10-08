# Pietra Studio — Next.js Clone

A complete, production-style clone of [pietrastudio.framer.website](https://pietrastudio.framer.website/) built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Pages

- `/` — Home (Hero · Intro · Selected Work · Approach · Studio · Testimonial · Journal · Contact CTA)
- `/work` — Selected work listing with category filters
- `/work/[slug]` — Project case study (8 projects, statically generated)
- `/studio` — Practice, gallery, four-stage approach, team, awards, capabilities
- `/journal` — Editorial listing with category filters
- `/journal/[slug]` — Article reader
- `/contact` — Enquiry form + Lisbon/Milan studios
- `/privacy` · `/terms` · `/cookies` — Plain-language legal pages

## Custom features requested

- **Smooth scroll** in `app/layout.tsx` via `components/effects/SmoothScroll.tsx`.
- **Persistent Header & Footer** rendered around `<main>` from the layout.
- **Custom cursor with trail + stars** (`components/effects/Cursor.tsx`):
  - Small dot + ring cursor.
  - Fading line trail behind the cursor (decays in ~1.5 s).
  - Star particles spawn along the trail, twinkle for 0.7–1.3 s.
  - Inverts colour over dark sections and imagery via `mix-blend-mode: difference`.
  - Auto-disabled on touch devices / narrow viewports.

## Folder layout

```
app/                    Next.js App Router pages
  layout.tsx            Root layout (Header + Cursor + Footer)
  page.tsx              Home
  work/
    page.tsx
    [slug]/page.tsx
  studio/page.tsx
  journal/
    page.tsx
    [slug]/page.tsx
  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  cookies/page.tsx
  not-found.tsx
  loading.tsx
  sitemap.ts
  robots.ts
components/
  layout/               Header, Footer
  effects/              Cursor, SmoothScroll, ScrollProgress, Reveal, CountUp, Marquee
  home/                 01_Hero, 02_Intro, 03_SelectedWork, 04_Approach,
                        05_Studio, 06_Testimonial, 07_Journal, 08_ContactCta
  legal/                LegalLayout (shared by Privacy / Terms / Cookies)
lib/
  data.ts               All project / journal / team / awards / services data
```

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # production server
```

## Notes

- Uses Unsplash imagery via CDN URLs (no local assets).
- The cursor effect is silently disabled under 768 px wide viewports and on touch devices.
- All data lives in `lib/data.ts`; add projects / articles there and a new static route will appear on the corresponding index page.
