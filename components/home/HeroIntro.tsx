"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

// useLayoutEffect warns when it runs during server rendering (it never
// actually executes there). This component only ever mounts in the
// browser after hydration, so alias to a no-op-on-server equivalent.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The hero's three-beat entrance: the headline types out, then the
 * supporting paragraph (and CTAs) fade in, then "Neither do we." types out
 * and flashes once resolved - one continuous read, not three independent
 * scroll-triggered widgets. Full text is always present in the initial
 * markup (SSR, no-JS, reduced-motion get it immediately, in full); a layout
 * effect blanks it before first paint for everyone else, so there's no
 * flash of the finished state before the sequence plays. Every mutation is
 * `textContent`/`classList`, never a `style` prop, to stay clear of this
 * site's style-src CSP (a ref's own `.style.setProperty` is a separate,
 * unrestricted CSSOM path - only React's `style` prop gets serialised into
 * a blocked inline `style=""` attribute during SSR).
 *
 * The headline and punchline both have their final rendered height
 * measured and reserved via min-height before their text is cleared, and
 * released once each finishes typing. Without this, typing the headline
 * out character by character lets it wrap from one line to two partway
 * through, growing the hero (and pushing everything below it down) mid
 * animation - exactly the kind of layout shift this pins in place instead.
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

  useIsomorphicLayoutEffect(() => {
    const headingEl = headingRef.current;
    const paraWrap = paraWrapRef.current;
    const punchLine = punchLineRef.current;
    const punchWrap = punchWrapRef.current;
    const punchText = punchTextRef.current;
    if (!headingEl || !paraWrap || !punchLine || !punchWrap || !punchText) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pin each line's current (fully-typed) rendered height before clearing
    // its text, so the hero's total height never changes mid-animation.
    headingEl.style.setProperty("min-height", `${headingEl.getBoundingClientRect().height}px`);
    punchLine.style.setProperty("min-height", `${punchLine.getBoundingClientRect().height}px`);

    headingEl.textContent = "";
    paraWrap.classList.add("hero-intro-hidden");
    punchText.textContent = "";

    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const typeInto = (el: HTMLElement, text: string, intervalMs: number, onDone: () => void) => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        el.textContent = text.slice(0, i);
        if (i >= text.length) {
          clearInterval(id);
          onDone();
        }
      }, intervalMs);
      timers.push(id);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        headingEl.classList.add("typing-caret");
        typeInto(headingEl, heading, 28, () => {
          headingEl.classList.remove("typing-caret");
          headingEl.style.removeProperty("min-height");

          paraWrap.classList.remove("hero-intro-hidden");
          const punchlineDelay = setTimeout(() => {
            punchWrap.classList.add("type-out-active");
            typeInto(punchText, punchline, 55, () => {
              punchWrap.classList.remove("type-out-active");
              punchLine.style.removeProperty("min-height");
              sweepRef.current?.classList.add("motion-sweep");
            });
          }, 1000);
          timers.push(punchlineDelay);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(headingEl);
    return () => {
      observer.disconnect();
      timers.forEach((t) => {
        clearInterval(t);
        clearTimeout(t);
      });
    };
  }, [heading, punchline]);

  return (
    <>
      <div className={headingClassName}>
        <h1 ref={headingRef} className="text-display-xl">
          {heading}
        </h1>
      </div>
      <div className={bodyClassName}>
        <div ref={paraWrapRef} className="transition-all duration-slow ease-out-crisp">
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
