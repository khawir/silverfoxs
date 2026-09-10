"use client";

import { useEffect, useRef } from "react";

/**
 * Types its text out character by character, once, on scroll entry - the
 * same IntersectionObserver + reduced-motion convention as Reveal and
 * KineticSwap. The full text is always present in the initial markup (SSR,
 * no-JS, reduced-motion), so nothing is ever hidden behind the animation;
 * JS only clears and retypes it as a bonus. Text is mutated via
 * `textContent`, and the post-type flash via `classList`, never a `style`
 * prop, so it stays clear of this site's style-src CSP.
 */
export function TypeOut({
  text,
  className = "",
  startDelayMs = 0,
  sweepOnComplete = false,
}: {
  text: string;
  className?: string;
  /** Pause after scroll entry before typing begins. */
  startDelayMs?: number;
  /** Flash the same resolve-sweep used by the brand statement once typing finishes. */
  sweepOnComplete?: boolean;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const targetRef = useRef<HTMLSpanElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const target = targetRef.current;
    if (!wrap || !target) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let startTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        startTimeoutId = setTimeout(() => {
          let i = 0;
          target.textContent = "";
          wrap.classList.add("type-out-active");
          intervalId = setInterval(() => {
            i++;
            target.textContent = text.slice(0, i);
            if (i >= text.length) {
              clearInterval(intervalId);
              wrap.classList.remove("type-out-active");
              sweepRef.current?.classList.add("motion-sweep");
            }
          }, 55);
        }, startDelayMs);
      },
      { threshold: 0.6 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (startTimeoutId) clearTimeout(startTimeoutId);
    };
  }, [text, startDelayMs]);

  return (
    <span ref={wrapRef} className={`type-out relative inline-block overflow-hidden ${className}`}>
      <span ref={targetRef}>{text}</span>
      {sweepOnComplete && (
        <span
          ref={sweepRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-flare/25 to-transparent opacity-0"
        />
      )}
    </span>
  );
}
