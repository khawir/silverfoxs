"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT_CRISP } from "@/lib/motion";

const offsetFor = {
  up: { y: 8 },
  left: { x: -32 },
  right: { x: 32 },
} as const;

/**
 * A restrained entrance reveal used across the homepage narrative sections.
 * Built on Motion's `useInView` (once: true) rather than a hand-rolled
 * IntersectionObserver: it correctly handles an element that's already
 * substantially on screen at mount (no permanently-stuck-hidden state, no
 * flash), which a hand-rolled "already visible" percentage check got wrong
 * for short elements sitting just past a hero.
 *
 * Respects `prefers-reduced-motion` automatically via Motion's built-in
 * handling - no separate matchMedia check needed.
 */
export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Which way it travels in from. Defaults to the subtle vertical nudge used everywhere else on the site. */
  direction?: "up" | "left" | "right";
  /** Seconds to wait before this reveal starts, once triggered. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsetFor[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_CRISP, delay }}
    >
      {children}
    </motion.div>
  );
}
