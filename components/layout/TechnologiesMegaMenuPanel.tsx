import Link from "next/link";
import { productsNav, engineeringNav } from "@/content/site";
import type { ProductAccent } from "@/lib/types";

const accentText: Record<ProductAccent, string> = {
  flare: "text-flare",
  pulse: "text-pulse",
  solar: "text-solar",
  mint: "text-mint",
};

const accentBg: Record<ProductAccent, string> = {
  flare: "bg-flare",
  pulse: "bg-pulse",
  solar: "bg-solar",
  mint: "bg-mint",
};

export function TechnologiesMegaMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-3 divide-x divide-line-light border border-line-light">
        {productsNav.map((product) => (
          <Link
            key={product.id}
            href={`/technologies/${product.slug}`}
            onClick={onNavigate}
            className="group/band flex flex-col justify-between gap-8 p-6 transition-colors duration-base ease-out-crisp hover:bg-ink-950"
          >
            <div>
              <span
                aria-hidden="true"
                className={`block h-1 w-8 ${accentBg[product.accent]}`}
              />
              <p className="mt-4 text-h3 text-ink-950 group-hover/band:text-bone-050">
                {product.id}
              </p>
              <p className="mt-2 text-small text-slate-650 group-hover/band:text-line-light">
                {product.category}
              </p>
            </div>
            <div>
              <p
                className={`text-[0.95rem] font-medium ${accentText[product.accent]}`}
              >
                {product.signature}
              </p>
              <span className="mt-3 inline-block text-mono-label text-ink-950 group-hover/band:text-bone-050">
                {product.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/engineering"
        onClick={onNavigate}
        className="mt-5 flex items-baseline justify-between gap-4 border-t border-line-light pt-5 text-slate-650 transition-colors duration-fast ease-out-crisp hover:text-ink-950"
      >
        <span className="text-[0.95rem] font-medium">{engineeringNav.name}</span>
        <span className="text-mono-label">{engineeringNav.cta}</span>
      </Link>
    </div>
  );
}
