import Link from "next/link";
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
  return (
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
  );
}
