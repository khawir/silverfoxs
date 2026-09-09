"use client";

import Script from "next/script";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Cloudflare Turnstile widget, using implicit rendering: the script finds
 * this div itself and injects a hidden `cf-turnstile-response` input inside
 * it once the challenge completes, which ContactForm reads from the form's
 * FormData at submit time. Renders nothing when no site key is configured,
 * so local development is never blocked on a third-party secret.
 */
export function Turnstile() {
  if (!siteKey) return null;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
    </>
  );
}
