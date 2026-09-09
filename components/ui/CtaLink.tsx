import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-on-dark" | "ghost-on-light";
type Size = "md" | "sm";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const base =
  "group/cta relative inline-flex items-center gap-2.5 overflow-hidden text-[0.95rem] font-semibold tracking-[0.01em] transition-colors duration-base ease-out-crisp focus-visible:outline-offset-4";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5",
  sm: "px-4 py-2.5 text-[0.85rem]",
};

const variants: Record<Variant, string> = {
  primary: "bg-flare text-ink-950",
  secondary: "border border-line-dark text-bone-050 hover:border-bone-050",
  "ghost-on-dark": "border border-line-dark text-bone-050 hover:border-bone-050",
  "ghost-on-light": "border border-line-light text-ink-950 hover:border-ink-950",
};

/**
 * The site's single CTA primitive. Every "primary" and "secondary" call to
 * action in docs/SILVERFOX_WEBSITE_CANONICAL.md section 19 routes through
 * this component so hover, focus and press states stay consistent while the
 * label text itself never gets paraphrased at the call site.
 */
export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: CtaLinkProps) {
  const isExternal =
    /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
  const Arrow = (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-fast ease-out-crisp group-hover/cta:translate-x-1"
    >
      <path
        d="M2 8h11.5M9 3.5 13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );

  const sweepColor = variant === "primary" ? "bg-ink-950/12" : "bg-current/10";

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`cta-sweep pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-base ease-out-crisp group-hover/cta:scale-x-100 ${sweepColor}`}
      />
      <span className="relative">{children}</span>
      <span className="relative">{Arrow}</span>
    </>
  );

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
