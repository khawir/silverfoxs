import type { ReactNode } from "react";
import { CtaLink } from "@/components/ui/CtaLink";

export function ServiceHero({
  number,
  name,
  paragraphs,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  dark = false,
  visual,
}: {
  number: string;
  name: string;
  paragraphs: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  dark?: boolean;
  visual?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <p className={`text-mono-label ${dark ? "text-line-light" : "text-slate-650"}`}>
          Service {number} / 06
        </p>
        <h1 className="mt-4 text-h1">{name}</h1>
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
          {secondaryCta && secondaryHref && (
            <CtaLink href={secondaryHref} variant={dark ? "ghost-on-dark" : "ghost-on-light"}>
              {secondaryCta}
            </CtaLink>
          )}
        </div>
      </div>
      {visual && <div className="lg:col-span-5">{visual}</div>}
    </div>
  );
}
