"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_CRISP } from "@/lib/motion";

// useLayoutEffect warns when it runs during server rendering (it never
// actually executes there). This component only ever mounts in the
// browser after hydration, so alias to a no-op-on-server equivalent.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The hero's three-beat entrance: the headline types out, then the
 * supporting paragraph (and CTAs) fade in, then "Neither do we." types out
 * and flashes once resolved - one continuous read, not three independent
 * scroll-triggered widgets. Full text is always present in the initial
 * markup (SSR, no-JS, reduced-motion get it immediately, in full); the
 * effect below blanks it before the sequence plays. Character-by-character
 * typing still mutates `textContent` directly (not a style/attribute) so it
 * stays outside anything a stricter future CSP would need to special-case;
 * every value driving it is timed by Motion's `animate()`, not a hand-rolled
 * interval/timeout chain.
 *
 * The headline and punchline both have their final rendered height measured
 * and reserved via min-height before their text is cleared, and released
 * once each finishes typing. Without this, typing the headline out
 * character by character lets it wrap from one line to two partway through,
 * growing the hero (and pushing everything below it down) mid animation -
 * exactly the kind of layout shift this pins in place instead.
 */
export function HeroIntro({
  heading,
  paragraph,
  punchline,
  headingClassName = "",
  bodyClassName = "",
  children,
}: {
  heading: string;
  paragraph: string;
  punchline: string;
  headingClassName?: string;
  bodyClassName?: string;
  children?: ReactNode;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraWrapRef = useRef<HTMLDivElement>(null);
  const punchLineRef = useRef<HTMLParagraphElement>(null);
  const punchWrapRef = useRef<HTMLSpanElement>(null);
  const punchTextRef = useRef<HTMLSpanElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(headingRef, { once: true, amount: 0.6 });

  // Blank the text and reserve its final height before first paint - never
  // after, or there'd be a flash of the fully-typed state first. This part
  // is unconditional (not gated on being in view yet): the sequence itself
  // waits for that below, but the hidden starting state must already be in
  // place the instant this mounts.
  useIsomorphicLayoutEffect(() => {
    const headingEl = headingRef.current;
    const paraWrap = paraWrapRef.current;
    const punchLine = punchLineRef.current;
    const punchText = punchTextRef.current;
    if (!headingEl || !paraWrap || !punchLine || !punchText) return;
    if (prefersReducedMotion) return;

    headingEl.style.setProperty("min-height", `${headingEl.getBoundingClientRect().height}px`);
    punchLine.style.setProperty("min-height", `${punchLine.getBoundingClientRect().height}px`);
    headingEl.textContent = "";
    punchText.textContent = "";
    paraWrap.style.opacity = "0";
    paraWrap.style.transform = "translateY(0.5rem)";
  }, [heading, punchline, prefersReducedMotion]);

  useEffect(() => {
    const headingEl = headingRef.current;
    const paraWrap = paraWrapRef.current;
    const punchLine = punchLineRef.current;
    const punchWrap = punchWrapRef.current;
    const punchText = punchTextRef.current;
    const sweep = sweepRef.current;
    if (!headingEl || !paraWrap || !punchLine || !punchWrap || !punchText || !sweep) return;
    if (prefersReducedMotion || !inView) return;

    let cancelled = false;

    const typeText = (el: HTMLElement, text: string, msPerChar: number) =>
      animate(0, text.length, {
        duration: (text.length * msPerChar) / 1000,
        ease: "linear",
        onUpdate: (value) => {
          el.textContent = text.slice(0, Math.round(value));
        },
      });

    (async () => {
      headingEl.classList.add("typing-caret");
      await typeText(headingEl, heading, 28);
      if (cancelled) return;
      headingEl.classList.remove("typing-caret");
      headingEl.style.removeProperty("min-height");

      await animate(
        paraWrap,
        { opacity: 1, y: 0 },
        { duration: DURATION.slow, ease: EASE_OUT_CRISP }
      );
      if (cancelled) return;

      await animate(0, 0, { duration: 1 });
      if (cancelled) return;

      punchWrap.classList.add("type-out-active");
      await typeText(punchText, punchline, 55);
      if (cancelled) return;
      punchWrap.classList.remove("type-out-active");
      punchLine.style.removeProperty("min-height");

      await animate(
        sweep,
        { x: ["-120%", "340%"], opacity: [0, 1, 1, 0] },
        {
          duration: 1.1,
          ease: EASE_OUT_CRISP,
          opacity: { times: [0, 0.15, 0.85, 1] },
        }
      );
    })();

    return () => {
      cancelled = true;
    };
  }, [heading, punchline, prefersReducedMotion, inView]);

  return (
    <>
      <div className={headingClassName}>
        <h1 ref={headingRef} className="text-display-xl">
          {heading}
        </h1>
      </div>
      <div className={bodyClassName}>
        <div ref={paraWrapRef}>
          <p className="text-lead text-slate-650">{paragraph}</p>
          <p ref={punchLineRef} className="mt-3 text-lead font-bold italic uppercase tracking-[0.08em] text-ink-950">
            <span ref={punchWrapRef} className="type-out relative inline-block overflow-hidden">
              <span ref={punchTextRef}>{punchline}</span>
              <span
                ref={sweepRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-flare/25 to-transparent opacity-0"
              />
            </span>
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
