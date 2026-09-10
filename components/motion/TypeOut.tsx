"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect warns when it runs during server rendering (it never
// actually executes there). This component is only ever mounted in the
// browser after hydration, so alias to a no-op-on-server equivalent.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Types its text out character by character, once, on scroll entry - the
 * same IntersectionObserver + reduced-motion convention as Reveal and
 * KineticSwap. The full text is always present in the initial markup (SSR,
 * no-JS, reduced-motion), so nothing is ever hidden behind the animation for
 * those cases. For everyone else, a layout effect (runs before the browser
 * paints, unlike a regular effect) blanks it immediately so there is no
 * flash of the full text before it clears and starts typing. JS only ever
 * mutates `textContent` and toggles `classList`, never a `style` prop, so it
 * stays clear of this site's style-src CSP.
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

  useIsomorphicLayoutEffect(() => {
    const wrap = wrapRef.current;
    const target = targetRef.current;
    if (!wrap || !target) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Blank it before the browser ever paints the full SSR text, so the
    // delay that follows is genuinely a pause before anything appears.
    target.textContent = "";

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
