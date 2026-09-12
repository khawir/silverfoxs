Build the website as a modern, production-ready cybersecurity company site using the following technical architecture and constraints.

## Core Stack
- Next.js with App Router
- TypeScript
- Tailwind CSS
- GitHub for source control
- Vercel for deployment
- Prefer Server Components
- Use Client Components only where interaction requires them
- Keep the site static-first and pre-render as much content as possible

## Architecture
- Treat this as a corporate website, not a web application
- Do not add a database unless explicitly required
- Do not add authentication
- Do not add a CMS
- Keep website content in the repository using TypeScript, JSON, Markdown or MDX
- Minimise server-side functionality and overall attack surface
- Avoid unnecessary architectural complexity

## Contact Form
Implement the contact form through a secure Next.js Route Handler such as:

`/api/contact`

Requirements:
- Server-side validation using Zod
- Cloudflare Turnstile bot protection
- Honeypot field
- Rate limiting at the edge (Vercel Firewall/WAF rule on `/api/contact`) -
  not an in-process/in-memory limiter, which cannot bound abuse reliably
  across independent serverless instances
- Validate and sanitise submitted fields
- Do not rely only on client-side validation
- Send form notifications via the company's own Zoho Mail account over SMTP
  (using `nodemailer`), not a third-party transactional email provider
- Keep all API keys and secrets server-side
- Never expose secrets using `NEXT_PUBLIC_*`

Do not send email directly from the browser. The browser must never connect
directly to Zoho SMTP.

## Email Architecture
The website itself should not host company mailboxes.

Assume:
- Zoho Mail hosts business email, including the `contact@` mailbox that both
  receives and sends website enquiry notifications
- Website-generated email is delivered by authenticating directly to Zoho's
  SMTP servers (`smtp.zoho.com`) with an application-specific password, via
  `nodemailer` - not a third-party transactional email provider
- SPF, DKIM and DMARC are configured separately at DNS level (via Cloudflare)
- Notifications are always sent "From" the authenticated Zoho mailbox, with
  the visitor's submitted address set only as `Reply-To`, to avoid
  SPF/DKIM/DMARC failures

Keep the implementation compatible with this model.

## Security
Security should be built into the implementation from the start.

Configure appropriate HTTP security headers, including:
- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- `frame-ancestors`

Use a restrictive CSP and avoid unnecessary `unsafe-inline` or `unsafe-eval`.

Also:
- Do not expose environment variables
- Do not hard-code credentials
- Do not expose unnecessary API routes
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Validate external URLs
- Keep third-party dependencies minimal
- Prefer established and actively maintained packages
- Commit and respect the package lockfile
- Remove test routes, debug code and development-only functionality before production

## Dependencies
Do not add packages unless they provide clear value.

Avoid unnecessary:
- UI frameworks
- animation libraries
- analytics packages
- tracking scripts
- third-party embeds
- utility packages for functionality that can be implemented cleanly with existing platform APIs

Keep the dependency surface deliberately small.

For motion and interaction:
- Prefer CSS, SVG and browser APIs where practical
- One well-maintained animation library may be used when it materially improves accessibility, orchestration or maintainability
- Do not add multiple overlapping animation libraries

## Performance
Optimise the implementation for a fast corporate website.

Requirements:
- Minimise client-side JavaScript
- Use `next/image` appropriately
- Optimise fonts and static assets
- Lazy-load non-critical resources
- Avoid unnecessary hydration
- Keep animations performant
- Use responsive images
- Prefer CSS over JavaScript for simple visual effects

## Code Structure
Keep the codebase clean, predictable and easy to maintain.

Suggested structure:

```text
app/
components/
components/ui/
components/sections/
content/
lib/
public/
styles/
```

Create reusable components where there is genuine repetition.

Avoid both:
- duplicated page-specific code
- unnecessary abstraction or over-engineering

## Environment Configuration
Use environment variables for all secrets and service configuration.

Provide:

```text
.env.example
```

with variable names only, never real values.

Do not commit:

```text
.env
.env.local
```

Typical variables may include:

```text
ZOHO_SMTP_HOST=
ZOHO_SMTP_PORT=
ZOHO_SMTP_USER=
ZOHO_SMTP_PASSWORD=
CONTACT_EMAIL=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

Only values that genuinely need to be available in the browser may use the `NEXT_PUBLIC_` prefix.

## Business, Contact and Legal Placeholders
Do not invent unresolved company information.

Keep public company details in one small site configuration file and use clearly labelled placeholders until final values are supplied:

```text
[FULL LEGAL ENTITY NAME]
[REGISTRATION NUMBER]
[REGISTERED ADDRESS]
[JURISDICTION]
[GENERAL CONTACT EMAIL]
[FORM RECIPIENT EMAIL]
[PRIVACY EMAIL]
[PUBLIC PHONE]
[INCIDENT RESPONSE CONTACT]
[PRIVACY POLICY DATE]
```

Placeholders must be easy to locate and replace before production launch. Do not publish a working incident-response CTA until it has a real destination.

## Deployment
The intended deployment workflow is:

```text
Local Development
      ↓
GitHub
      ↓
Vercel Preview Deployment
      ↓
Production
```

Requirements:
- Must deploy natively on Vercel
- Do not introduce Docker, VPS, Nginx or custom server dependencies
- Production builds must pass cleanly
- Preview deployments must work correctly
- Environment variables must work through Vercel configuration
- Keep production and preview configuration clearly separated where required

Cloudflare may later be used for DNS and Turnstile, but hosting remains on Vercel.

## Git and Repository
Assume the code will live in a private GitHub repository.

Maintain:
- clean commits
- sensible `.gitignore`
- no credentials in source control
- no generated clutter
- no unnecessary binary files
- reproducible dependency installation

## Completion Checks
Before considering the implementation complete:

- Run linting
- Run TypeScript checks
- Run the production build
- Resolve build warnings
- Check mobile, tablet and desktop behaviour
- Check all navigation and links
- Test contact form success and failure cases
- Test validation and bot-protection behaviour
- Check browser console for errors
- Verify that no secrets are exposed
- Review dependencies and remove anything unnecessary
- Confirm the project deploys successfully to Vercel

## Accessibility
Treat accessibility as a foundational requirement. Target WCAG 2.2 AA across navigation, content, forms and interactive components.

At minimum:
- Use semantic HTML and a logical heading structure
- Make menus, forms, accordions, selectors and interactive diagrams keyboard accessible
- Provide clear visible focus states
- Do not rely on colour alone
- Respect `prefers-reduced-motion`
- Preserve all information when motion is reduced or unavailable
- Use properly associated form labels, validation messages and status announcements

## Baseline SEO
Implement the technical SEO foundation required for launch:
- Unique page titles and descriptions
- Canonical URLs
- Open Graph and social metadata
- `sitemap.xml`
- `robots.txt`
- Semantic headings and landmarks
- A useful 404 page
- Verified organisation structured data once business details are supplied

Advanced keyword strategy, ongoing content optimisation and search marketing are outside the initial build.

The visual design, branding, content, layouts, imagery and motion direction will be provided separately and should be followed from those documents.

Prioritise security, simplicity, maintainability, performance and clean deployment.
