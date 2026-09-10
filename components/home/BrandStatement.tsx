"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The homepage's brand-statement moment: a single memorable resolution from
 * subdued/uncertain to clear/confident, triggered once on scroll entry, in
 * place of a second differentiator list. docs/UPDATE.md section 6.
 *
 * Fully legible with no animation: unresolved and resolved states use the
 * same text in the same position, just different weight/contrast, so a
 * reduced-motion or pre-hydration render already reads correctly.
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
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (prefersReducedMotion || entry.isIntersecting) {
          setResolved(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl overflow-hidden text-center">
      {resolved && (
        <span
          aria-hidden="true"
          className="motion-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-flare/25 to-transparent"
        />
      )}
      <p className="text-mono-label text-slate-650">{lineOne}</p>
      <p
        className={`mt-3 text-display-xl transition-all duration-slow ease-out-crisp ${
          resolved ? "text-ink-950 opacity-100" : "translate-y-1 text-ink-950/25 opacity-70"
        }`}
      >
        {lineTwo}
      </p>
      <p className="reading-measure mx-auto mt-6 text-lead text-slate-650">{supporting}</p>
    </div>
  );
}
