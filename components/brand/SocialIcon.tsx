import type { SocialName } from "@/content/site";

/**
 * Minimal, hand-drawn glyphs in the site's own line-art idiom (see the
 * CtaLink arrow and MobileNav close icon) rather than an icon-library
 * import - four icons doesn't justify a new dependency.
 */
export function SocialIcon({ name, className = "h-4 w-4" }: { name: SocialName; className?: string }) {
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
          <path d="M3.5 5.5h2v7h-2v-7ZM4.5 4.7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM7 5.5h1.9v1h.03c.28-.5.95-1.03 1.97-1.03 2.1 0 2.5 1.32 2.5 3.03v3.5h-2V9.05c0-.9-.02-2.05-1.25-2.05-1.25 0-1.44.96-1.44 1.95v3.55H7v-7Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className={className} aria-hidden="true">
          <path d="M3 3l10 10M13 3 3 13" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
          <path d="M10.5 4.5h1.5V2h-2c-1.8 0-3 1.2-3 3.1V7H5v2.5h2v5.5h2.5V9.5h2L12 7H9.5V5.4c0-.5.3-.9 1-.9Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={className} aria-hidden="true">
          <rect x="2" y="2" width="12" height="12" rx="3" />
          <circle cx="8" cy="8" r="3" />
          <circle cx="11.3" cy="4.7" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
