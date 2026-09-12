"use client";

import Script from "next/script";

/**
 * Cloudflare Turnstile widget, using implicit rendering: the script finds
 * this div itself and injects a hidden `cf-turnstile-response` input inside
 * it once the challenge completes, which ContactForm reads from the form's
 * FormData at submit time. Renders nothing when no site key is configured,
 * so local development is never blocked on a third-party secret.
 *
 * The site key is deliberately NOT read from `process.env` in this client
 * component - Next.js only inlines `NEXT_PUBLIC_`-prefixed vars into
 * browser code, and this env var is intentionally named `TURNSTILE_SITE_KEY`
 * (no prefix) to keep it out of the Vercel dashboard's "public" grouping.
 * The value itself is not a secret (Turnstile requires it to be embedded in
 * the page's HTML for the widget to work at all), so it is read
 * server-side in app/contact/page.tsx and passed down as a prop.
 */
export function Turnstile({ siteKey }: { siteKey?: string }) {
  if (!siteKey) return null;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
    </>
  );
}
