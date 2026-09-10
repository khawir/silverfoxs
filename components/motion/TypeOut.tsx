"use client";

import { useEffect, useRef } from "react";

/**
 * Types its text out character by character, once, on scroll entry - the
 * same IntersectionObserver + reduced-motion convention as Reveal and
 * KineticSwap. The full text is always present in the initial markup (SSR,
 * no-JS, reduced-motion), so nothing is ever hidden behind the animation;
 * JS only clears and retypes it as a bonus. Text is mutated via
 * `textContent`, never a `style` prop, so it stays clear of this site's
 * style-src CSP.
 */
export function TypeOut({ text, className = "" }: { text: string; className?: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const targetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const target = targetRef.current;
    if (!wrap || !target) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let i = 0;
        target.textContent = "";
        wrap.classList.add("type-out-active");
        intervalId = setInterval(() => {
          i++;
          target.textContent = text.slice(0, i);
          if (i >= text.length) {
            clearInterval(intervalId);
            wrap.classList.remove("type-out-active");
          }
        }, 55);
      },
      { threshold: 0.6 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [text]);

  return (
    <span ref={wrapRef} className={`type-out ${className}`}>
      <span ref={targetRef}>{text}</span>
    </span>
  );
}
