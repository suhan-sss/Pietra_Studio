"use client";

import Link from "next/link";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 right-0 h-[2px] bg-charcoal z-[55] origin-left"
      />
      <Link
        href="#top"
        aria-label="Back to top"
        className="fixed right-5 bottom-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-cream hover:bg-ink transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 13V3M3 8l5-5 5 5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
}
