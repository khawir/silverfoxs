"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "motion/react";
import type { ProductAccent } from "@/lib/types";

const accentBg: Record<ProductAccent, string> = {
  flare: "bg-flare",
  pulse: "bg-pulse",
  solar: "bg-solar",
  mint: "bg-mint",
};

type TechnologyProduct = {
  id: string;
  accent: ProductAccent;
  heading: string;
  subheading: string;
  cta: string;
  href: string;
};

/**
 * The homepage's single, compact technology moment: SCOPE / SIGNAL / RANGE
 * as a connected family, each reduced to name, tagline, one sentence and a
 * CTA. Full product depth lives on the individual technology pages.
 * docs/UPDATE.md section 9.
 */
export function TechnologyPanel({ products }: { products: TechnologyProduct[] }) {
  const dotRef = useRef<SVGCircleElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || prefersReducedMotion) return;

    // The connector is a straight line (M50,8 L250,8), so cx can be tweened
    // directly - no path-following (getPointAtLength) needed for this shape.
    const controls = animate(
      dot,
      { cx: [50, 250], opacity: [0, 1, 1, 0] },
      {
        duration: 3.2,
        ease: "linear",
        repeat: Infinity,
        opacity: { inherit: true, times: [0, 0.08, 0.92, 1] },
      }
    );

    return () => controls.stop();
  }, [prefersReducedMotion]);

  return (
    <div>
      {/* The three products as one connected system: a signal travels
          SCOPE -> SIGNAL -> RANGE, echoing KNOW -> DETECT -> VALIDATE. The
          dot's static starting attributes (cx=50, opacity=0) are identical
          on server and first client render - the loop itself only ever
          starts inside an effect, so there's nothing for hydration to
          mismatch on, and reduced motion is respected by simply never
          starting it. */}
      <svg viewBox="0 0 300 16" aria-hidden="true" className="mb-4 hidden h-4 w-full sm:block">
        <line x1={50} y1={8} x2={250} y2={8} stroke="var(--color-line-dark)" strokeWidth={1} />
        {[50, 150, 250].map((x) => (
          <circle key={x} cx={x} cy={8} r={2.5} fill="var(--color-line-dark)" />
        ))}
        <circle ref={dotRef} cx={50} cy={8} r={3.5} fill="var(--color-flare)" opacity={0} />
      </svg>

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark sm:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={product.href}
          className="group flex flex-col justify-between gap-10 bg-graphite-800 p-6 transition-colors duration-base ease-out-crisp hover:bg-ink-950 lg:p-8"
        >
          <div>
            <span aria-hidden="true" className={`block h-1.5 w-10 ${accentBg[product.accent]}`} />
            <p className="mt-5 text-mono-label text-line-light">{product.id}</p>
            <p className="mt-3 text-h3 text-bone-050">{product.heading}</p>
            <p className="mt-2 text-body text-line-light">{product.subheading}</p>
          </div>
          <span className="text-mono-label text-bone-050 group-hover:text-flare">
            {product.cta} →
          </span>
        </Link>
      ))}
      </div>
    </div>
  );
}
