import type { SVGProps } from "react";

type MarkProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> & {
  /**
   * Provide an accessible name when the mark stands alone with no adjacent
   * text (e.g. the footer or a loading state). Omit it when the mark sits
   * next to a text wordmark or inside a link that already has an accessible
   * name - the mark is then purely decorative.
   */
  title?: string;
};

/**
 * The SilverFox adaptive mark, rendered inline so its fill can respond to
 * `currentColor` in light, dark and product-coloured contexts.
 *
 * Geometry is preserved exactly from docs/mark-adaptive.svg. The two shard
 * paths are exposed as separate elements (data-mark-plane) so entrance and
 * hero compositions can animate or offset them independently without ever
 * altering their proportions, per
 * docs/SILVERFOX_WEBSITE_PRESENTATION_SPEC.md section 3.
 */
export function Mark({ title, ...props }: MarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g transform="translate(32 22)">
        <path data-mark-plane="a" d="M0 56 68 0 56 42 0 108Z" />
        <path data-mark-plane="b" d="M32 76 72 44 96 116Z" />
      </g>
    </svg>
  );
}
