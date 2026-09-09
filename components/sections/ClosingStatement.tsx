import { CtaLink } from "@/components/ui/CtaLink";

export function ClosingStatement({
  heading,
  paragraphs = [],
  cta,
  ctaHref = "/contact",
  secondaryCta,
  secondaryHref,
  dark = false,
}: {
  heading: string;
  paragraphs?: string[];
  cta: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <h2 className={`mx-auto max-w-[26ch] text-display ${dark ? "text-bone-050" : "text-ink-950"}`}>
        {heading}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`mx-auto mt-6 max-w-[54ch] text-body ${dark ? "text-line-light" : "text-slate-650"}`}
        >
          {paragraph}
        </p>
      ))}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <CtaLink href={ctaHref} variant="primary">
          {cta}
        </CtaLink>
        {secondaryCta && secondaryHref && (
          <CtaLink href={secondaryHref} variant={dark ? "ghost-on-dark" : "ghost-on-light"}>
            {secondaryCta}
          </CtaLink>
        )}
      </div>
    </div>
  );
}
