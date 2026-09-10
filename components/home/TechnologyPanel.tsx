"use client";

import Link from "next/link";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
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
  const reducedMotion = useReducedMotion();

  return (
    <div>
      {/* The three products as one connected system: a signal travels
          SCOPE -> SIGNAL -> RANGE, echoing KNOW -> DETECT -> VALIDATE. SMIL
          animateMotion, not CSS offset-path, which does not reliably track
          SVG geometry in every engine. */}
      <svg viewBox="0 0 300 16" aria-hidden="true" className="mb-4 hidden h-4 w-full sm:block">
        <line x1={50} y1={8} x2={250} y2={8} stroke="var(--color-line-dark)" strokeWidth={1} />
        {[50, 150, 250].map((x) => (
          <circle key={x} cx={x} cy={8} r={2.5} fill="var(--color-line-dark)" />
        ))}
        {!reducedMotion && (
          <circle r={3.5} fill="var(--color-flare)" opacity={0}>
            <animateMotion path="M50 8 L250 8" dur="3.2s" repeatCount="indefinite" fill="freeze" />
            <animate
              attributeName="opacity"
              keyTimes="0;0.08;0.92;1"
              values="0;1;1;0"
              dur="3.2s"
              repeatCount="indefinite"
              fill="freeze"
            />
          </circle>
        )}
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
