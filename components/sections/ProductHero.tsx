import type { ReactNode } from "react";
import { CtaLink } from "@/components/ui/CtaLink";
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

export function ProductHero({
  accent,
  category,
  headline,
  subheadline,
  paragraphs,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  dark = false,
  visual,
}: {
  accent: ProductAccent;
  category: string;
  headline: string;
  subheadline: string;
  paragraphs: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  dark?: boolean;
  visual?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <span aria-hidden="true" className={`block h-1.5 w-12 ${accentBg[accent]}`} />
        <p className={`mt-5 text-mono-label ${accentText[accent]}`}>{category}</p>
        <h1 className="mt-3 text-h1">{headline}</h1>
        <p className={`mt-2 text-h3 ${dark ? "text-line-light" : "text-slate-650"}`}>
          {subheadline}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`reading-measure ${index === 0 ? "text-lead" : "text-body"} ${dark ? "text-line-light" : "text-slate-650"}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href={primaryHref} variant="primary">
            {primaryCta}
          </CtaLink>
          <CtaLink href={secondaryHref} variant={dark ? "ghost-on-dark" : "ghost-on-light"}>
            {secondaryCta}
          </CtaLink>
        </div>
      </div>
      {visual && <div className="lg:col-span-5">{visual}</div>}
    </div>
  );
}
