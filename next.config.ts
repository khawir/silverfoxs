import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Next.js App Router streams React Server Component "flight" data into the
 * page via inline <script> tags (self.__next_f.push(...)) on every request,
 * including fully static pages. There is no way to avoid these scripts
 * short of switching every route to nonce-based dynamic rendering, which
 * would defeat the static-first requirement (Next's own CSP guide confirms
 * nonces require all pages to render dynamically). Per Next's documented
 * "Without Nonces" CSP pattern, 'unsafe-inline' on script-src is the
 * correct, supported trade-off for a static app - it still blocks loading
 * of any *external* malicious script, which is the more common real-world
 * risk.
 *
 * style-src also carries 'unsafe-inline' for the same reason: the site's
 * motion is built on Motion (motion/react), which drives animated values
 * via per-frame inline style="" writes - a confirmed, "wontfix" limitation
 * upstream (github.com/framer/motion/issues/1727), not something a nonce
 * fixes (Motion's own nonce support only covers a <style> block it injects,
 * not the ongoing per-frame writes - verified directly, not assumed). A
 * nonce-based fix would in any case force this entire static site to
 * dynamic rendering, which is a worse trade-off than 'unsafe-inline' here.
 *
 * upgrade-insecure-requests is production-only: on plain-HTTP local dev,
 * that directive makes the browser try to upgrade every asset request to
 * HTTPS and fail with a TLS error, breaking the dev server entirely.
 */
const baseCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'none';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`
  .replace(/\s{2,}/g, " ")
  .trim();

// The contact page embeds the Cloudflare Turnstile widget, which needs its
// own script, frame and connect origins. Every other route keeps the
// stricter baseline above.
const contactCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self' https://challenges.cloudflare.com;
  frame-src https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // No remote imagery is used anywhere on the site; every visual is
    // typography, SVG or CSS. Leave remotePatterns empty deliberately.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: baseCsp },
        ],
      },
      {
        source: "/contact",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: contactCsp },
        ],
      },
    ];
  },
};

export default nextConfig;
