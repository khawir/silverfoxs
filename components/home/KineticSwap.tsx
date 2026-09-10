"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DURATION, EASE_OUT_CRISP } from "@/lib/motion";

/**
 * A single purposeful word/phrase replacement triggered once on scroll
 * entry, then left resolved. Used for the two homepage kinetic-type moments
 * (ASSUMPTION -> EVIDENCE, and "Control exists." -> "Control holds.").
 * Never loops. Fully static (both states legible) with reduced motion, via
 * MotionConfig's `reducedMotion="user"` at the root.
 */
export function KineticSwap({
  from,
  to,
  fromClassName,
  toClassName,
}: {
  from: string;
  to: string;
  fromClassName: string;
  toClassName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const resolved = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="grid">
      <motion.span
        aria-hidden={resolved}
        className={`col-start-1 row-start-1 ${fromClassName}`}
        animate={{ opacity: resolved ? 0 : 1 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT_CRISP }}
      >
        {from}
      </motion.span>
      <motion.span
        aria-hidden={!resolved}
        className={`col-start-1 row-start-1 ${toClassName}`}
        animate={{ opacity: resolved ? 1 : 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT_CRISP }}
      >
        {to}
      </motion.span>
    </div>
  );
}
