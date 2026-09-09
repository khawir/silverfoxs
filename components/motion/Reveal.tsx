"use client";

import { useEffect, useRef, useState } from "react";

type RevealState = "visible" | "hidden";

/**
 * A restrained entrance reveal used across the homepage narrative sections.
 *
 * Progressive-enhancement safe: content is visible by default (as rendered
 * by the server) and only opts into a hidden starting state once mounted in
 * the browser, and only for elements that are not already on screen. If
 * JavaScript never runs, or `prefers-reduced-motion: reduce` is set, nothing
 * is ever hidden - the reveal is purely a bonus, never a requirement to read
 * the page.
 */
export function Reveal({
  children,
  className = "",
  delayClass = "",
}: {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-slow ease-out-crisp ${delayClass} ${
        state === "hidden" ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
