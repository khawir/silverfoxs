/**
 * JS-side mirror of the CSS motion tokens in app/globals.css's `@theme`
 * block. Motion's `transition` prop needs literal numbers/arrays, not CSS
 * custom properties, so these are the single source of truth for every
 * Motion-based component - keep in sync with globals.css if either changes.
 */
export const EASE_OUT_CRISP = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_CONTROLLED = [0.65, 0, 0.35, 1] as const;

/** Seconds, matching --transition-duration-* in globals.css. */
export const DURATION = {
  instant: 0.09,
  fast: 0.16,
  base: 0.26,
  slow: 0.48,
  hero: 0.76,
} as const;
