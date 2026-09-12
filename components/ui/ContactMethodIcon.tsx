export type ContactMethod = "email" | "phone" | "whatsapp";

/**
 * Minimal, hand-drawn glyphs in the same line-art idiom as
 * components/brand/SocialIcon.tsx - not brand-exact logos (notably
 * "whatsapp" is a generic chat bubble, not the WhatsApp mark itself), just
 * enough to distinguish the three contact methods at a glance.
 */
export function ContactMethodIcon({ method, className = "h-4 w-4" }: { method: ContactMethod; className?: string }) {
  switch (method) {
    case "email":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={className} aria-hidden="true">
          <rect x="2" y="3.5" width="12" height="9" rx="1.2" />
          <path d="M2.6 4.3 8 8.6l5.4-4.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={className} aria-hidden="true">
          <rect x="5" y="1.5" width="6" height="13" rx="1.4" />
          <path d="M7 12.2h2" strokeLinecap="round" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className={className} aria-hidden="true">
          <path
            d="M8 2.2a5.8 5.8 0 0 0-5 8.7l-.8 2.9 3-.78A5.8 5.8 0 1 0 8 2.2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
