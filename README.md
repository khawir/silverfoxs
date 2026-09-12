# SilverFox Website

The production SilverFox corporate website: Next.js App Router, TypeScript and Tailwind CSS v4, built static-first with no database, no authentication and no CMS.

## Handoff documents

The canonical requirements this build implements live in [`docs/`](docs/):

- [`SILVERFOX_WEBSITE_CANONICAL.md`](docs/SILVERFOX_WEBSITE_CANONICAL.md) — sitemap, page copy, CTA wording, navigation, footer, launch exclusions.
- [`SILVERFOX_WEBSITE_PRESENTATION_SPEC.md`](docs/SILVERFOX_WEBSITE_PRESENTATION_SPEC.md) — art direction, layout, colour, typography, motion.
- [`SilverFox_Technical_Instructions.md`](docs/SilverFox_Technical_Instructions.md) — architecture, security, accessibility, performance, deployment.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything else falls back to a placeholder
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # local development (Turbopack)
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check
```

## Project structure

```text
app/                    Routes (App Router) - one folder per URL
components/
  brand/                The adaptive mark and logo lockup
  layout/                Header, mega-menus, mobile nav, footer
  sections/              Shared section building blocks (hero, chapter rail,
                          content blocks, product/service page pieces)
  home/                  Homepage-only composition and motion pieces
  forms/                 Contact form and Turnstile widget
  ui/                    CtaLink, Section, IncidentResponseCta
content/                 All page copy as typed TypeScript data, transcribed
                          verbatim from docs/SILVERFOX_WEBSITE_CANONICAL.md
lib/                     Zod schema, email, Turnstile verification, client
                          IP helper, structured data, shared types
```

Content is deliberately separated from presentation: to edit copy, change the
relevant file under `content/`, never the JSX in `app/` or `components/`.

## Configuration and placeholders

All business, contact and legal details are centralised in
[`content/site.ts`](content/site.ts) and sourced from environment variables,
falling back to a clearly bracketed placeholder (e.g. `[FULL LEGAL ENTITY
NAME]`) when unset. See [`.env.example`](.env.example) for the full list.

The incident-response CTA only links to a real destination once
`INCIDENT_RESPONSE_HREF` is set; until then it falls back to a working
`mailto:` link to the general contact address rather than a dead link.

## Contact form

`POST /api/contact` ([`app/api/contact/route.ts`](app/api/contact/route.ts))
validates with Zod, checks a honeypot field, verifies Cloudflare Turnstile
(skipped with a logged warning if not configured) and sends via the Zoho
Mail SMTP account over `nodemailer` (logged instead of sent if not
configured). The visitor's own address is only ever used as `Reply-To`; the
message is always sent `From` the authenticated Zoho mailbox to avoid
SPF/DKIM/DMARC failures. None of this blocks the production build or local
development when credentials are missing - see `.env.example`.

Rate limiting is deliberately not implemented in-process (see
[`lib/client-ip.ts`](lib/client-ip.ts) for why an in-memory limiter would be
misleading on Vercel's serverless infrastructure); protect this route with a
Vercel Firewall/WAF rate limiting rule instead.

## Security

- Strict `Content-Security-Policy` with no `unsafe-inline` for scripts or
  styles (see [`next.config.ts`](next.config.ts)). The one inline script -
  the homepage's Organization JSON-LD - is allowed via a SHA-256 hash, not a
  blanket exception.
- HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and a
  restrictive `Permissions-Policy` are set on every route.
- No secrets are ever exposed to the client; only `NEXT_PUBLIC_SITE_URL` uses
  the `NEXT_PUBLIC_` prefix. `TURNSTILE_SITE_KEY` is not a secret either -
  Turnstile requires it in the page's HTML for the widget to work - but it
  is deliberately kept unprefixed and read server-side in
  [`app/contact/page.tsx`](app/contact/page.tsx), then passed to
  [`components/forms/Turnstile.tsx`](components/forms/Turnstile.tsx) as a
  prop, rather than inlined into client JavaScript via `NEXT_PUBLIC_`.

## Deployment

Deploys natively to Vercel with no extra configuration. Set the environment
variables from `.env.example` in the Vercel project settings for Preview and
Production before going live.
