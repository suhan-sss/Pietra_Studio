"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type RevealBaseProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
};

/**
 * Reveal — fade-up reveal on scroll.
 * Renders a motion.div. Pass it any HTMLMotionProps<"div">.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  ...rest
}: RevealBaseProps & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Convenience variants for valid HTML
export function RevealLi({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  ...rest
}: RevealBaseProps & HTMLMotionProps<"li">) {
  return (
    <motion.li
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.li>
  );
}

export function RevealArticle({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  ...rest
}: RevealBaseProps & HTMLMotionProps<"article">) {
  return (
    <motion.article
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.article>
  );
}

export function RevealSection({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  ...rest
}: RevealBaseProps & HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
