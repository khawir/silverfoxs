import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Surface = "bone" | "paper" | "ink" | "graphite" | "flare";
type Spacing = "chapter" | "standard" | "tight" | "none";

const surfaceStyles: Record<Surface, string> = {
  bone: "bg-bone-050 text-ink-950",
  paper: "bg-paper-100 text-ink-950",
  ink: "bg-ink-950 text-bone-050",
  graphite: "bg-graphite-800 text-bone-050",
  // Reserved for rare, deliberate colour-takeover moments (e.g. the
  // homepage Offensive Security feature) - not part of the everyday rhythm.
  flare: "bg-flare text-ink-950",
};

/**
 * Vertical rhythm per docs/UPDATE.md section 18: desktop ~80-120px, tablet
 * ~64-88px, mobile ~48-72px - not a single spacing value stretched across
 * every breakpoint.
 */
const spacingStyles: Record<Spacing, string> = {
  chapter: "py-[clamp(4rem,3rem+5vw,7.5rem)]",
  standard: "py-[clamp(3rem,2.2rem+3.2vw,6rem)]",
  tight: "py-[clamp(2.5rem,2rem+2vw,4.5rem)]",
  none: "",
};

const isDarkSurface: Record<Surface, boolean> = {
  bone: false,
  paper: false,
  ink: true,
  graphite: true,
  flare: false,
};

type SectionProps = {
  as?: ElementType;
  surface?: Surface;
  spacing?: Spacing;
  bleed?: boolean;
  border?: "top" | "bottom" | "both" | "none";
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const borderStyles = {
  top: "border-t",
  bottom: "border-b",
  both: "border-y",
  none: "",
};

/**
 * The one reusable section wrapper for the whole site. It sets the surface
 * (colour, text, border and focus-ring tone), vertical rhythm and an
 * optional full-bleed shell, then gets out of the way - composition inside
 * varies deliberately per docs/SILVERFOX_WEBSITE_PRESENTATION_SPEC.md.
 */
export function Section({
  as: Tag = "section",
  surface = "bone",
  spacing = "standard",
  bleed = false,
  border = "none",
  className = "",
  children,
  ...rest
}: SectionProps) {
  const borderColor = isDarkSurface[surface] ? "border-line-dark" : "border-line-light";
  return (
    <Tag
      data-surface={surface}
      className={`relative ${surfaceStyles[surface]} ${spacingStyles[spacing]} ${borderStyles[border]} ${border !== "none" ? borderColor : ""} ${className}`}
      {...rest}
    >
      {bleed ? children : <div className="shell">{children}</div>}
    </Tag>
  );
}
