"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A single purposeful word/phrase replacement triggered once on scroll
 * entry, then left resolved. Used for the two homepage kinetic-type moments
 * (ASSUMPTION -> EVIDENCE, and "Control exists." -> "Control holds.").
 * Never loops. Fully static (both states legible) with reduced motion.
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
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid">
      <span
        aria-hidden={resolved}
        className={`col-start-1 row-start-1 transition-opacity duration-slow ease-out-crisp ${fromClassName} ${
          resolved ? "opacity-0" : "opacity-100"
        }`}
      >
        {from}
      </span>
      <span
        aria-hidden={!resolved}
        className={`col-start-1 row-start-1 transition-opacity duration-slow ease-out-crisp ${toClassName} ${
          resolved ? "opacity-100" : "opacity-0"
        }`}
      >
        {to}
      </span>
    </div>
  );
}
