# SilverFox Website UX/UI Correction Brief

## Objective

Refine the existing SilverFox website at:

`https://silverfoxs.vercel.app/`

Do **not** redesign the brand, rewrite the portfolio, or rebuild the website from scratch.

The content, visual direction, branding, service structure, technology portfolio, imagery, and overall premium cybersecurity positioning are already established.

This task is a **UX, responsive design, typography, information architecture, spacing, navigation, and motion correction pass**.

The current implementation has several problems:

- headings are excessively large
- too many sections compete for visual attention
- homepage is too long
- service sections contain too much detail
- mobile navigation is faulty
- mobile layouts often feel like compressed desktop layouts
- motion/animation is sometimes excessive or misplaced
- content hierarchy needs improvement
- spacing is sometimes excessive
- some sections repeat similar messaging
- interactive and animated elements should feel purposeful rather than decorative

Preserve the established SilverFox visual identity while making the website feel more controlled, mature, technical, premium, and polished.

---

# 1. Important Constraints

## Preserve

Preserve:

- existing SilverFox branding
- logo and brand assets
- overall colour palette
- existing imagery unless a layout genuinely requires repositioning
- existing service structure
- existing technology products:
  - SCOPE
  - SIGNAL
  - RANGE
- existing individual service pages
- existing individual technology pages
- Engineering & R&D page
- About page
- Contact page
- existing strong brand copy and punchlines where appropriate
- existing Next.js architecture unless there is a technical reason to refactor

Do not replace the website with a generic cybersecurity template.

Do not introduce a new visual identity.

Do not add unnecessary dependencies.

---

# 2. General Design Direction

The website should feel:

- precise
- technically sophisticated
- controlled
- premium
- credible
- security-focused
- modern without appearing trendy for the sake of it
- visually confident without being loud

Avoid the common design pattern of:

> huge typography + huge whitespace + excessive scroll animation = premium

SilverFox should instead communicate:

> precision + restraint + hierarchy + technical depth + deliberate motion

---

# 3. Typography

Typography is currently too large throughout the website.

Only major hero statements should use very large typography.

Create a clear typographic hierarchy.

## Suggested Desktop Scale

Use approximately:

```css
Hero H1:        64px to 72px
Page H1:        48px to 60px
Section H2:     36px to 44px
Section H3:     24px to 30px
Card H3:        21px to 26px
Body Large:     18px to 20px
Body:           16px to 18px
Small / Label:  13px to 15px
```

These are guidelines, not rigid values.

Use responsive `clamp()` values where appropriate.

Example:

```css
font-size: clamp(2.5rem, 5vw, 4.5rem);
```

for major hero headings.

For section headings, prefer something closer to:

```css
font-size: clamp(1.8rem, 3vw, 2.75rem);
```

## Mobile Scale

Approximately:

```css
Hero H1:       40px to 46px
Page H1:       34px to 42px
Section H2:    28px to 34px
Section H3:    21px to 26px
Body:          16px
```

Avoid headings that occupy most of the viewport.

Avoid awkward headings consisting of one or two words per line unless deliberately designed.

Check heading wrapping at:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px+

---

# 4. Homepage Information Architecture

The current homepage is too long and tries to perform the job of:

- homepage
- services catalogue
- technology catalogue
- Engineering & R&D page
- brand manifesto
- company overview

This needs to be simplified.

The homepage should introduce SilverFox, demonstrate its positioning, present the major capabilities, introduce the proprietary technologies, establish differentiation, and direct visitors to deeper pages.

Detailed scope belongs on the individual pages.

---

# 5. New Homepage Structure

Restructure the homepage approximately as follows.

---

## Section 1: Header / Navigation

Keep navigation concise.

Desktop navigation should provide access to:

- Services
- Technology
- Engineering & R&D
- About
- Contact

Primary CTA:

**Talk to a Security Specialist**

Do not overload the desktop navigation.

If there is a mega-menu, keep it clean and compact.

---

## Section 2: Hero

Retain the core hero positioning.

Preferred primary headline:

> Security built for the way attacks actually happen.

Supporting copy should remain concise.

Keep no more than approximately 2 to 3 short lines of supporting text.

Primary CTA:

> Talk to a Security Specialist

Secondary CTA:

> Explore Capabilities

Hero should feel strong but not oversized.

Do not allow the heading to dominate the entire screen.

The hero should fit comfortably within the initial viewport on normal laptop displays.

Any animation or visual should support the idea of:

- attack paths
- connected systems
- exposure
- security signals
- defensive validation

Motion should remain subtle.

---

## Section 3: Core Positioning

Headline:

> Security should be demonstrated, not assumed.

Use a short supporting paragraph explaining the SilverFox philosophy.

Do not turn this into another full-screen section.

This should be restrained and compact.

---

## Section 4: Capabilities

Headline:

> Cybersecurity across the attack lifecycle.

Present the six primary service areas as compact capability cards.

Use the existing service names.

Each card should contain only:

- service number if part of the design language
- service title
- concise one-sentence description
- `Explore Service →`

Do **not** display long lists of service scope on the homepage.

Those lists belong on individual service pages.

The capability section should function as a navigation layer.

Example structure:

```text
01
Cybersecurity Strategy & Risk

Turn security requirements into practical,
defensible programmes.

Explore Service →
```

Do the same for all six services.

Avoid giant cards that each consume most of a viewport.

Desktop layout may use 2 or 3 columns depending on visual balance.

Mobile should use one clean vertical column.

---

## Section 4b: Certifications & Accreditations *(added post-launch, copy revised 2026-09-13)*

Directly below the capability grid. Given the same kicker/headline/intro treatment as every other homepage section (Section 4's own KineticSwap -> h2 -> intro pattern) - it is a full credibility moment, not a footnote.

Kinetic swap: **CLAIMED.** -> **CERTIFIED.**

Headline: **We don't just hold certifications. We deliver them.**

Client feedback (2026-09-13): the original headline/intro ("Independently assessed. Formally certified." / "SilverFox holds and delivers audits against the standards that matter most...") read as SilverFox flexing its own credentials rather than offering to certify and audit the visitor's organisation - visitors kept asking about it directly instead of the site answering the question. The revised heading leads with the active service ("we deliver them"), and the intro names the standards and the internal/external audit deliverable explicitly, keeping the OSCP/CREST/CISSP practitioner credentials as a supporting clause rather than the headline claim.

Inverted to a dark (graphite) surface - deliberately distinct from both neighbours (Capabilities is bone, Connected Security is paper) rather than blending into either.

Below the intro, a CTA ("Explore Certification Audits") links to the Certification Audits & Assessments detail on the Strategy, Risk & Assurance service page (`/services/strategy-risk-assurance#certification-audits`), so an interested visitor gets the full internal/external audit breakdown in one click instead of emailing to ask.

Below that, a continuously drifting strip of bordered badge cards (no logo images yet - see docs/SILVERFOX_WEBSITE_CANONICAL.md's "Certifications & Accreditations" homepage entry for why, and for the swap-in path once real badge artwork is supplied): ISO/IEC 27001, ISO 9001, SWIFT CSP, CMMC, OSCP, CREST, CISSP, each with a one-line plain-English expansion.

Pauses on hover/focus so it can actually be read. Falls under the sitewide reduced-motion rule like every other motion moment on the site - no separate handling needed.

---

# 6. Remove Detailed Service Scope From Homepage

This is important.

The homepage currently exposes extensive lists such as:

- penetration testing
- red teaming
- application testing
- architecture assessments
- cloud testing
- identity security
- AI security
- firmware analysis
- infrastructure testing
- security validation
- etc.

Do not display these detailed lists on the homepage.

Keep them on their appropriate individual service pages.

The homepage should provide orientation, not documentation.

---

# 7. Connected Security / Attack Path Section

Retain the concept:

> Attackers see paths. We do too.

This is one of the strongest SilverFox concepts.

Use this section to visually communicate how security weaknesses connect across systems.

Prefer a meaningful visual representation involving concepts such as:

```text
External Exposure
      ↓
Application
      ↓
Identity
      ↓
Cloud / Infrastructure
      ↓
Critical Asset
```

or a networked attack path.

The visual should communicate progression and connected risk.

Do not clutter this section with excessive body text.

---

# 8. SilverFox Security Lifecycle

Use the established sequence:

```text
UNDERSTAND → CHALLENGE → ENGINEER → WATCH → RESPOND
```

This should be visually clear and concise.

It can be integrated into the attack-path section or immediately following it.

Avoid creating a huge standalone section unless it materially improves the design.

On mobile, this must not overflow horizontally.

Consider vertical stacking or horizontally scrollable presentation only if interaction is obvious and accessible.

Prefer wrapping or a vertical timeline.

---

# 9. Technology Section

The proprietary technology portfolio is strategically important.

Keep:

- SCOPE
- SIGNAL
- RANGE

Position them clearly as a connected technology family.

Suggested presentation:

```text
SCOPE
Know the exposure.

SIGNAL
Read the signal.

RANGE
Prove the defence.
```

Supporting conceptual sequence:

```text
KNOW → DETECT → VALIDATE
```

or retain:

> Know the exposure. Read the signal. Prove the defence.

Do not replicate the full technology pages on the homepage.

Each product should have:

- name
- short descriptor
- one short explanatory sentence
- CTA

Example:

```text
SCOPE

Know the exposure.

Continuous visibility into the external
attack surface and exposed assets.

Explore SCOPE →
```

Use strong visual treatment here.

This can be one of the visually distinctive sections of the homepage.

---

# 10. Engineering & Applied R&D

The current homepage contains too much Engineering & R&D detail.

Reduce it to a teaser.

Suggested structure:

### Heading

> When the right solution does not exist, build it.

### Supporting Copy

SilverFox combines cybersecurity expertise with software engineering, intelligent systems, edge technologies, and applied research to develop specialised capabilities where conventional products are not enough.

CTA:

> Explore Engineering & R&D

Do not list every R&D capability here.

Move or retain detailed capability descriptions on the Engineering & R&D page.

---

# 11. Why SilverFox

Create a concise differentiation section.

Suggested concepts:

- Offensive insight
- Defensive discipline
- Engineering depth
- Evidence over assumption

Each should have a short supporting line if needed.

Avoid large paragraphs.

Avoid repeating entire ideas already communicated elsewhere.

---

# 12. Remove Repetition

Several statements currently express almost the same philosophy.

Examples include ideas such as:

- Security should be demonstrated, not assumed.
- A control that has never been tested is still an assumption.
- Evidence over assumption.
- Question the assumption.
- We do not sell fear. We engineer confidence.

These are all strong statements, but they should not all compete on the homepage.

Use the strongest messages selectively.

Move secondary philosophy statements to:

- About
- service pages
- technology pages
- Engineering & R&D

The homepage should contain fewer, stronger statements.

---

# 13. Final CTA

End the homepage with one strong closing section.

Preferred headline:

> What would an attacker find?

Supporting text should be short.

Primary CTA:

> Talk to a Security Specialist

Avoid adding another long manifesto before the footer.

---

# 14. Target Homepage Length

The revised homepage should be approximately **35 to 50 percent shorter** in scroll depth than the current implementation.

Do not achieve this by simply reducing vertical spacing.

Achieve it through:

- removal of detailed scope lists
- consolidation of sections
- shortening repeated content
- reducing oversized section heights
- removing unnecessary animation space
- improving grid layouts
- reducing excessive padding

The homepage should feel substantial but efficient.

---

# 15. Section Rhythm

Not every section should have the same level of visual drama.

Create deliberate rhythm.

Recommended hierarchy:

```text
HERO
High impact

POSITIONING
Quiet / restrained

CAPABILITIES
Structured

CERTIFICATIONS & ACCREDITATIONS (added post-launch)
Contrast / credibility - inverted (dark) so it reads as a deliberate moment, not filler

CONNECTED SECURITY
Visual / technical

TECHNOLOGY
High impact

ENGINEERING & R&D
Moderate

WHY SILVERFOX
Restrained

FINAL CTA
High impact
```

Avoid:

```text
BIG HEADING
BIG VISUAL
BIG HEADING
BIG VISUAL
BIG HEADING
BIG VISUAL
```

throughout the entire page.

---

# 16. Mobile Navigation

The current mobile navigation needs to be corrected.

Build a proper mobile navigation experience.

## Required behaviour

Mobile header:

```text
[SilverFox Logo]                   [Menu]
```

On menu open, display a clean full-height or near-full-height drawer/overlay.

Suggested structure:

```text
Services                 >
Technology               >
Engineering & R&D
About
Contact

Talk to a Security Specialist
```

Services and Technology may open as accordions.

Do not attempt to reproduce a complex desktop mega-menu at mobile width.

## Mobile Menu Requirements

The mobile menu must:

- open reliably
- close reliably
- have a visible close control
- prevent page scrolling behind the menu
- close after navigation
- close on Escape
- support keyboard navigation
- manage focus properly
- avoid horizontal overflow
- work on touch devices
- avoid elements being hidden below browser UI
- account for safe-area insets
- have adequate touch targets
- remain usable at small heights

Recommended touch target minimum:

```text
44px × 44px
```

Test menu interaction at:

- iPhone SE dimensions
- 375px width
- 390px width
- 430px width
- common Android dimensions
- tablet widths

---

# 17. Responsive Design

Do not treat mobile as a smaller desktop layout.

Review each major component independently.

Check:

- hero
- navigation
- cards
- grids
- attack-path visual
- product section
- CTA sections
- footer
- images
- animated elements
- button groups
- headings
- spacing

Avoid:

- horizontal overflow
- cropped text
- off-screen animations
- large empty areas
- oversized headings
- narrow multi-column layouts
- tiny buttons
- text over complex imagery
- fixed heights that break on mobile

Prefer content-driven heights.

Use `min-height` only where genuinely necessary.

Avoid arbitrary `100vh` sections.

Where viewport height is required, consider modern viewport units:

```css
100svh
100dvh
```

instead of relying blindly on `100vh`.

---

# 18. Mobile Spacing

Reduce excessive vertical spacing on mobile.

Large desktop padding values should not automatically carry into mobile.

As general guidance:

```text
Desktop major section padding:
80px to 120px

Tablet:
64px to 88px

Mobile:
48px to 72px
```

Some compact sections can use less.

Spacing should follow content hierarchy rather than identical values everywhere.

---

# 19. Motion and Animation

Motion needs to be purposeful.

SilverFox motion should communicate:

- signal
- attack paths
- connected systems
- detection
- validation
- system activity
- defensive response

Prefer:

- subtle line drawing
- path progression
- node activation
- small signal pulses
- restrained opacity transitions
- slight depth movement
- subtle hover states
- progressive diagram animation

Avoid excessive:

- sliding text
- flying cards
- large parallax effects
- repeated fade-up animations
- bouncing elements
- dramatic scaling
- animations on every section
- animations that delay content visibility

Normal body content should generally appear immediately.

Animation should enhance comprehension, not delay it.

---

# 20. Scroll-Reveal Behaviour

Review all scroll-based reveals.

Do not hide important content until complicated animation triggers occur.

Use subtle reveals only where they improve presentation.

Recommended:

```text
opacity: 0 → 1
translateY: 8px → 0
duration: ~300-500ms
```

Avoid:

```text
translateY: 80px+
large scale changes
long delays
sequential animation of every paragraph
```

Do not animate every card simply because it exists.

---

# 21. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or simplify:

- parallax
- continuous animation
- path animation
- large transitions
- animated transforms

The website must remain fully understandable without animation.

---

# 22. Performance

Do not sacrifice performance for visual effects.

Review:

- unnecessary client components
- large JS animation libraries
- unused dependencies
- oversized image assets
- unnecessary video backgrounds
- layout shifts
- hydration-heavy sections
- excessive event listeners
- scroll handlers

Prefer CSS where simple CSS can handle the interaction.

Use Framer Motion only where it meaningfully improves complex interaction, assuming it is already part of the project.

Do not add an animation library solely for basic fades.

---

# 23. Images

Ensure images:

- use appropriate Next.js image handling
- have responsive sizing
- do not overflow containers
- maintain correct aspect ratios
- do not cause layout shift
- use sensible `sizes`
- use lazy loading where appropriate
- are not unnecessarily rendered at huge intrinsic sizes

Hero imagery should be prioritised where appropriate.

---

# 24. Cards

Current cards should be reviewed for density and size.

Cards should not automatically occupy huge vertical areas.

Use consistent:

- border treatment
- internal spacing
- typography
- hover behaviour
- CTA alignment

Avoid excessive rounded corners if that conflicts with the established technical visual language.

Avoid generic SaaS dashboard aesthetics.

The site should still look like SilverFox.

---

# 25. Buttons and CTAs

Create a consistent CTA system.

Use clear hierarchy:

## Primary

`Talk to a Security Specialist`

## Secondary

Examples:

- Explore Capabilities
- Explore Technology
- Explore Service
- Explore Engineering & R&D

Ensure:

- consistent sizing
- consistent typography
- proper focus states
- hover states
- minimum touch target size
- no awkward wrapping on mobile

---

# 26. Navigation Behaviour

Desktop navigation should:

- remain stable
- not shift layout unexpectedly
- provide clear dropdown states
- avoid accidental menu dismissal
- support keyboard interaction
- provide visible focus states

If sticky:

- keep height compact
- avoid covering content
- change background/blur subtly when scrolling if needed
- do not use excessive blur

---

# 27. Footer

Keep footer structured and useful.

Suggested grouping:

```text
SilverFox

Services
Technology
Company
Contact / CTA
```

Do not turn the footer into another large homepage section.

Keep mobile stacking clean.

---

# 28. Accessibility Basics

A full accessibility pass can happen later, but do not introduce obvious accessibility problems during this correction.

Ensure:

- semantic headings
- one logical H1 per page
- meaningful button labels
- links are actual links
- buttons are actual buttons
- visible keyboard focus
- keyboard-accessible navigation
- menu ARIA state where appropriate
- sufficient colour contrast
- image alt text
- reduced-motion support

---

# 29. Breakpoint Testing

Do not rely only on Chrome responsive presets.

Review at least:

```text
320px
360px
375px
390px
430px
768px
1024px
1280px
1440px
1728px+
```

Look specifically for:

- text wrapping
- horizontal overflow
- spacing
- oversized headings
- navigation failures
- image cropping
- broken grids
- animation offsets
- CTA wrapping
- excessive section height

---

# 30. Code Quality

While implementing corrections:

- preserve reusable components
- avoid duplicate markup
- avoid arbitrary inline styles
- keep responsive styles systematic
- remove obsolete code created by the previous layout if no longer used
- remove unused imports
- remove unused animation variants
- keep components understandable
- do not over-engineer abstractions

Do not rebuild working components without reason.

---

# 31. Do Not Rewrite All Copy

Do not independently rewrite the company content.

The approved content is deliberate.

You may shorten or reposition homepage text where necessary to implement this information architecture, but preserve the established voice and meaning.

Detailed content removed from the homepage must remain available on the appropriate inner pages.

---

# 32. Inner Pages

After the homepage is corrected, perform a consistency pass on inner pages.

Focus on:

- oversized page titles
- excessively tall hero sections
- mobile responsiveness
- section spacing
- navigation
- typography hierarchy
- card layouts
- visual consistency
- excessive motion

Do not aggressively shorten detailed service pages.

Those pages are supposed to contain depth.

The main compression requirement applies to the homepage.

---

# 33. Visual Quality Standard

The end result should feel closer to a premium cybersecurity consultancy / engineering organisation than a marketing-heavy SaaS startup.

Avoid visual clichés such as:

- neon hacker interfaces
- endless glowing grids
- excessive glassmorphism
- enormous gradient typography
- giant rounded SaaS cards
- animation everywhere
- meaningless cybersecurity particle effects

Use the existing SilverFox identity instead.

---

# 34. Final Validation

Before considering the task complete:

1. Run the project locally.
2. Check for build errors.
3. Check browser console errors.
4. Check mobile navigation manually.
5. Test all primary navigation links.
6. Test all CTAs.
7. Confirm no horizontal scrolling.
8. Confirm no animation causes content to disappear.
9. Check homepage at desktop, tablet, and mobile widths.
10. Check service pages at mobile widths.
11. Check Technology pages at mobile widths.
12. Verify the homepage is materially shorter.
13. Verify detailed content removed from the homepage still exists on appropriate inner pages.
14. Check that layout remains visually coherent at ultrawide desktop sizes.
15. Run the production build.

Use:

```bash
npm run build
```

and resolve any errors or warnings that indicate genuine implementation problems.

---

# 35. Expected Outcome

The corrected website should retain everything that makes SilverFox distinctive while becoming:

- shorter
- easier to scan
- better organised
- more restrained
- more responsive
- significantly better on mobile
- more consistent typographically
- more purposeful in its use of motion
- more premium
- more credible
- easier to navigate

The biggest principle is:

> Do not make SilverFox visually louder. Make it more precise.

Implement this as a careful refinement of the existing website, not as a new website.