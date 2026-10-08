"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
};

export default function Marquee({
  items,
  className = "",
  separator = "·",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const allItems = items.flatMap((i, idx) => [
    <span key={`${i}-${idx}`}>{i}</span>,
    <span key={`sep-${idx}`} className="text-clay/60 mx-4">{separator}</span>,
  ]);

  // duplicate for seamless loop
  const repeated = [...allItems, ...allItems, ...allItems, ...allItems];

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x }} className="inline-flex">
        {repeated}
      </motion.div>
    </div>
  );
}
