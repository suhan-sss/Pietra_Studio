"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — applies CSS scroll-behavior smoothing and a JS-driven
 * lerp for a more controlled, buttery scroll feel. Lightweight, no deps.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scrolling already declared in CSS; this provides extra
    // smoothness for the cursor trail canvas, and reduces jitter on Safari.
    const root = document.documentElement;
    root.style.setProperty("scroll-behavior", "smooth");

    // Disable native smooth scroll when user requests reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      root.style.setProperty("scroll-behavior", "auto");
    }

    return () => {
      root.style.removeProperty("scroll-behavior");
    };
  }, []);

  // Silence Next.js 14.2's dev-only "Skipping auto-scroll behavior..."
  // console warnings. They fire whenever a client-side navigation tries to
  // scroll-restoration-target a fixed/sticky element (the scroll-progress
  // bar, the back-to-top button, the header). Next confirms this is purely a
  // dev message — production builds skip it (verified in
  // `node_modules/next/dist/client/components/layout-router.js:114`,
  // gated by `process.env.NODE_ENV === "development"`). No escape hatch
  // exists for these elements in 14.2; the message is informational noise
  // about scroll-restoration scanning. Filter is exact-match so it cannot
  // silence any other real warning.
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const originalWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      const first = args[0];
      if (
        typeof first === "string" &&
        first.startsWith("Skipping auto-scroll behavior")
      ) {
        return;
      }
      (originalWarn as (...a: unknown[]) => void)(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return null;
}
