"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DURATION, EASE_OUT_CRISP } from "@/lib/motion";

/**
 * The homepage's brand-statement moment: a single memorable resolution from
 * subdued/uncertain to clear/confident, triggered once on scroll entry, in
 * place of a second differentiator list. docs/UPDATE.md section 6.
 *
 * Fully legible with no animation: unresolved and resolved states use the
 * same text in the same position, just different weight/contrast, so a
 * reduced-motion render (MotionConfig reducedMotion="user") already reads
 * correctly.
 */
export function BrandStatement({
  lineOne,
  lineTwo,
  supporting,
}: {
  lineOne: string;
  lineTwo: string;
  supporting: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const resolved = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl overflow-hidden text-center">
      {resolved && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-flare/25 to-transparent"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "340%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.1,
            ease: EASE_OUT_CRISP,
            opacity: { inherit: true, times: [0, 0.15, 0.85, 1] },
          }}
        />
      )}
      <p className="text-mono-label text-slate-650">{lineOne}</p>
      <motion.p
        className="mt-3 text-display-xl text-ink-950"
        initial={{ y: 4, opacity: 0.7, color: "rgba(11,13,14,0.25)" }}
        animate={resolved ? { y: 0, opacity: 1, color: "rgba(11,13,14,1)" } : undefined}
        transition={{ duration: DURATION.slow, ease: EASE_OUT_CRISP }}
      >
        {lineTwo}
      </motion.p>
      <p className="reading-measure mx-auto mt-6 text-lead text-slate-650">{supporting}</p>
    </div>
  );
}
