# SilverFox Website Presentation and Interaction Specification

> **Status:** Creative direction and coding handoff  
> **Content source of truth:** `SILVERFOX_WEBSITE_CANONICAL.md`  
> **Brand mark:** `public/brand/mark.png`  
> **Audience:** Product designer, creative developer, front-end engineer, motion designer, and QA reviewer  
> **Editorial rule:** Use British English and do not use em dashes

This document defines how the approved SilverFox website content should be presented. It covers the visual system, motion language, interaction patterns, responsive behaviour, accessibility, and the intended composition of every launch page.

The website must feel designed around SilverFox, not assembled from a generic technology template.

---

# 1. Creative Direction

## The central idea: Controlled Voltage

SilverFox should feel calm, intelligent and exact, with moments of high visual energy.

The experience is built on four tensions:

1. **Calm surfaces, charged accents**
2. **Editorial clarity, technical depth**
3. **Hard geometry, fluid motion**
4. **Generous space, concentrated information**

The result should be dopamine-inducing through contrast, timing, discovery and transformation. It should not rely on constant animation, rainbow gradients, decorative particles or visual noise.

## Desired impression

Within the first few seconds, the site should communicate:

- SilverFox is a serious cybersecurity company
- the company thinks differently from compliance-led consultancies
- offensive, defensive and engineering capabilities belong to one connected system
- SCOPE, SIGNAL and RANGE are distinct technologies with a shared logic
- the company is technically deep without being theatrical

## The emotional sequence

The experience should move through:

```text
Intrigue → Clarity → Depth → Evidence → Confidence → Action
```

Each page should deliver this sequence at its own scale.

## Creative principles

### 1. Show systems, not decoration

Every visual should explain a relationship, reveal a path, organise information or support the narrative.

### 2. Use motion as evidence

Motion should demonstrate how exposure becomes context, how signals converge, how attacks progress and how controls respond.

### 3. Reserve colour for consequence

Large areas remain calm. Accent colour appears when something changes, connects, becomes active or requires attention.

### 4. Let typography carry personality

Strong words, controlled line breaks, scale changes and kinetic transitions should do more work than stock imagery.

### 5. Change composition, preserve grammar

Sections should not all use the same card layout. They may use editorial splits, bento grids, scrollytelling, data strips, diagrams and typographic fields, but should share one grid, type system, colour logic and motion language.

### 6. Confidence without theatre

No fear-based imagery. No exaggerated threat counters. No fake live attacks. No unsupported product metrics.

---

# 2. What the Site Must Not Look Like

Avoid the common visual shorthand of cybersecurity and AI websites.

## Do not use

- neon green code on black
- blue and purple gradient blobs
- generic glowing shields, locks or fingerprints
- hooded hackers
- matrix rain
- circuit-board backgrounds
- decorative world maps with random attack lines
- floating glass cards
- a rounded card grid for every section
- excessive pill-shaped controls
- 3D chrome objects without narrative purpose
- generic AI-generated people, offices or server rooms
- random particle fields
- continuously moving backgrounds
- fake terminals used as decoration
- fake dashboards presented as actual product screens
- arbitrary parallax on every object
- scroll hijacking
- custom cursors that reduce usability
- excessive blur and glassmorphism
- giant claims followed by thin content

## The anti-AI-generated test

Before approving a section, ask:

1. Could this exact section appear on an AI startup, crypto exchange or design agency with only the logo changed?
2. Is the visual connected to the actual SilverFox message?
3. Does the layout contain a deliberate hierarchy, or is it a collection of equal cards?
4. Is the motion explaining something, or merely proving that animation was possible?
5. Does the section still look intentional with animation disabled?

If the first answer is yes, or any later answer is no, redesign it.

---

# 3. Brand Mark Direction

## Assessment of the supplied mark

The supplied mark is strong enough to become the visual foundation of the site.

It has:

- an angular, asymmetric silhouette
- two independent forms held in tension
- a central negative-space cut
- a sense of speed without using literal motion lines
- enough ambiguity to suggest a fox, a shard, a signal, an aperture or a directional path
- no conventional cybersecurity symbolism

The source PNG is 1024 × 1024 with transparency. Its dominant fill is graphite `#22272B`.

## Production asset recommendation

Create or obtain an SVG master before final implementation.

Use the PNG as a fallback and design reference. The SVG is preferred because the mark needs to:

- scale sharply
- act as a clipping mask
- change colour by context
- separate into its two component shapes
- animate along defined paths
- crop cleanly at large display sizes

Do not auto-trace the PNG and accept rough geometry without review. Rebuild or export the original vector paths if available.

## Logo behaviour

### Default

Use the complete mark with a restrained SILVERFOX wordmark.

### Hero scale

Use a cropped portion of the mark at architectural scale. It may exceed the viewport and become part of the composition.

### Section transitions

Use the mark's central cut as a mask or reveal boundary.

### Product context

The mark may adopt the current product accent colour, but its geometry must remain unchanged.

### Loading and first entry

The two shapes may assemble once during the first page load. Keep the animation under 900 ms and never replay it on every internal navigation.

### Favicon and small sizes

Test optical clarity at 16, 24, 32 and 48 pixels. If necessary, create a manually adjusted small-size version rather than adding effects.

## Clear space

Use the width of the central negative-space cut as the minimum clear space around the mark.

Do not place text, borders or interactive controls inside that area.

## Misuse

Do not:

- rotate the complete logo arbitrarily
- add a glow, bevel or shadow
- place it inside a shield
- outline it with a neon stroke
- fill it with unrelated photography
- stretch or alter its proportions
- turn it into a constantly spinning object
- repeat it as a dense wallpaper pattern

---

# 4. Visual Design System

## 4.1 Colour philosophy

The palette should feel warm, mineral and electric rather than stereotypically cyber.

Use dark and light surfaces in deliberate chapters. Do not keep the entire site dark. Alternating large fields of ink and warm bone creates rhythm, gives the content room to breathe and makes accent moments more rewarding.

## Core palette

| Token | Hex | Role |
|---|---:|---|
| `ink-950` | `#0B0D0E` | Primary dark background and dark text |
| `graphite-800` | `#22272B` | Logo source colour, panels and secondary dark surfaces |
| `slate-650` | `#4B535A` | Secondary text on light surfaces |
| `bone-050` | `#F4F0E8` | Primary light background and text on dark surfaces |
| `paper-100` | `#E8E2D7` | Secondary light field and diagram surface |
| `line-light` | `#CEC7BA` | Borders on light surfaces |
| `line-dark` | `#343A3F` | Borders on dark surfaces |

## Charged accents

| Token | Hex | Primary use | Contrast note |
|---|---:|---|---|
| `flare` | `#FF5A36` | Global action, offensive moments, exposure | 6.28:1 against ink |
| `solar` | `#F2CC4D` | RANGE, validation, successful reveal | 12.54:1 against ink |
| `pulse` | `#6474FF` | SIGNAL, active data and focus | 5.09:1 against ink |
| `mint` | `#5DD6C7` | Engineering, resolution and verified state | 11.05:1 against ink |

The `ink` and `bone` pairing provides approximately 17.14:1 contrast. The core accent pairings listed above meet normal-text contrast against `ink`, but all final combinations still require implementation-level testing at actual size and weight.

## Product ownership

- **SCOPE:** `flare`
- **SIGNAL:** `pulse`
- **RANGE:** `solar`
- **Engineering & Applied R&D:** `mint`

The product colours identify context. They do not create four unrelated mini-brands.

## Colour ratio

As a general page-level target:

```text
70% calm neutral fields
20% contrasting structural fields
10% charged accent
```

The exact ratio may vary, but accent colour should feel earned.

## Gradient rule

Gradients are allowed only when they express direction or state change.

Acceptable:

- a narrow transition from transparent to product colour along a signal path
- a controlled heat band showing risk progression
- a mask reveal between page chapters

Avoid:

- decorative multicolour blobs
- full-page purple-blue washes
- blurred colour clouds behind every section
- gradients used to make an otherwise generic card look premium

## Semantic colours

Do not use product accents as the sole indicator of error, warning or success.

Define separate semantic states during implementation and pair them with iconography, labels and text.

---

## 4.2 Typography

## Recommended family system

### Primary sans

**Instrument Sans**, variable if practical.

Use for display, headings, body copy, navigation and buttons. Its personality is contemporary without looking like a default startup template.

### Technical mono

**IBM Plex Mono**.

Use selectively for:

- section numbers
- product labels
- small data annotations
- diagrams
- timeline markers
- technical metadata
- code or query examples

Do not set long paragraphs in monospace.

### Fallback stack

```css
--font-sans: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
--font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
```

Verify licensing and self-host production fonts where appropriate.

## Type scale

Use fluid sizing with `clamp()`.

| Role | Desktop target | Mobile target | Notes |
|---|---:|---:|---|
| Display XL | 104 to 144 px | 54 to 72 px | Hero only, tightly tracked |
| Display | 72 to 96 px | 44 to 58 px | Major section statement |
| H1 | 64 to 84 px | 40 to 52 px | Interior page hero |
| H2 | 44 to 64 px | 32 to 42 px | Section heading |
| H3 | 28 to 36 px | 24 to 30 px | Module title |
| Lead | 22 to 28 px | 19 to 22 px | Introductory copy |
| Body | 17 to 19 px | 16 to 18 px | Comfortable reading |
| Small | 13 to 15 px | 13 to 14 px | Labels and notes |
| Mono label | 11 to 13 px | 11 to 12 px | Uppercase, tracked |

## Typography rules

- Use sentence case for major headlines.
- Use uppercase only for short labels, product names and small metadata.
- Keep body copy between 50 and 72 characters per line.
- Allow display copy to break asymmetrically when the wording benefits.
- Use manual line breaks only at meaningful semantic points.
- Avoid centre alignment for long copy.
- Avoid overusing outlined text.
- Avoid applying a different typographic effect to every heading.

## Kinetic typography rules

Kinetic type should reveal meaning.

Good examples:

- **assumption** being replaced by **evidence**
- **noise** separating until **signal** remains
- **exposure**, **context** and **validation** aligning across product chapters
- section verbs changing as the user progresses: **Understand**, **Challenge**, **Engineer**, **Defend**, **Respond**, **Improve**

Use transforms, masks and opacity. Preserve readable text in the DOM and avoid canvas-only text.

---

## 4.3 Grid and negative space

## Layout grid

- Desktop: 12 columns
- Tablet: 6 columns
- Mobile: 4 columns
- Maximum content width: 1440 px
- Editorial reading width: 720 to 820 px
- Wide diagram width: up to 1280 px

## Gutters

Use fluid horizontal gutters:

```css
--gutter: clamp(20px, 4vw, 72px);
```

## Section spacing

| Context | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Major chapter | 144 to 208 px | 104 to 144 px | 72 to 104 px |
| Standard section | 96 to 144 px | 80 to 112 px | 56 to 80 px |
| Related modules | 56 to 80 px | 48 to 64 px | 36 to 52 px |

Negative space is a design element. Do not fill gaps with decorative graphics merely because room exists.

## Alignment

Use an editorial mix of:

- full-bleed statements
- narrow reading columns
- asymmetric 7/5 and 8/4 splits
- edge-aligned numerical labels
- occasional centred impact lines

Avoid a continuous sequence of equal-width centred containers.

---

## 4.4 Shape language

Derive the shape system from the logo:

- acute diagonal cuts
- split planes
- narrow apertures
- directional wedges
- long straight rules
- cropped geometric masses

## Corner radius

Use only three radius levels:

- `0`: structural panels and diagrams
- `6px`: inputs, buttons and compact controls
- `18px`: rare soft containers such as forms or a single bento feature

Do not round every surface.

## Borders

Use 1 px borders to organise dense information. Accent borders may increase to 2 px for active state.

Avoid shadows as the primary separation mechanism.

## Texture

A very subtle static grain may be used at 1 to 2 percent opacity to stop large colour fields feeling sterile.

It must:

- remain static
- not reduce text contrast
- not create visible tiling
- be disabled where it harms performance

---

## 4.5 Imagery and diagrams

## Preferred visual sources

1. Brand geometry
2. Purpose-built SVG diagrams
3. Real product UI when it exists
4. Documentary photography of real people, environments or equipment
5. Abstract macro photography with a clear material relationship

## Photography direction

If photography is used, it should be:

- high contrast but not heavily cyber-coloured
- candid or documentary rather than staged
- tightly cropped
- textural and human
- relevant to real environments
- treated consistently, possibly with warm monochrome or duotone accents

Do not use generic stock imagery of people pointing at monitors.

## Diagram direction

Diagrams should use simple geometry, short labels and controlled animation.

Preferred forms:

- attack-path graphs
- signal lanes
- entity relationships
- layered architecture
- timelines
- control loops
- exercise flows
- before and after state transitions

Do not make fake quantitative claims through charts.

## Iconography

Use a restrained custom line-icon set with squared terminals and occasional diagonal cuts derived from the mark.

Icons should support scanning, not replace descriptive labels.

---

# 5. Motion and Interaction System

## Motion character

Motion should feel:

- precise
- short
- directional
- responsive
- slightly elastic only at high-value moments
- calm when the user is reading

Avoid floaty, dreamy movement.

## Timing tokens

| Token | Duration | Use |
|---|---:|---|
| `motion-instant` | 90 ms | Pressed states and toggles |
| `motion-fast` | 160 ms | Hover, underline and icon shift |
| `motion-base` | 260 ms | Panels, menus and focus changes |
| `motion-slow` | 480 ms | Section reveals and diagram transitions |
| `motion-hero` | 760 ms | First hero composition only |

## Easing

Use a crisp ease-out for entrances and a controlled ease-in-out for reconfiguration.

Suggested values:

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

## Reveal language

Primary reveal patterns:

- clipped vertical rise for text
- horizontal wipe using the logo cut angle
- line drawing for connections
- node activation for paths
- colour fill for state change
- content replacement rather than decorative entrance

Use one main reveal idea per section.

## Parallax

Parallax is allowed when it creates depth between system layers.

Use it for:

- the two logo planes in the hero
- separated architecture layers
- foreground and background elements in RANGE simulation

Limit offset to approximately 4 to 8 percent of the viewport. Do not create nausea or make content chase the scroll position.

## Micro-interactions

### Links

An underline or rule should draw from the current reading direction. The arrow may move 3 to 5 px.

### Buttons

Use a two-layer fill. On hover, the accent plane moves behind the label using the logo cut angle. On press, compress by no more than 1 to 2 percent.

### Service rows

Hover and focus reveal a short descriptor, related product and accent line. The row should remain usable without hover.

### Product switches

Changing SCOPE, SIGNAL and RANGE should update colour, diagram and copy as one coordinated transition.

### Diagram nodes

Focus or hover reveals one concise explanation and highlights connected edges. Do not use inaccessible hover-only tooltips.

### Form inputs

The label remains visible. Focus activates a 2 px accent edge and concise helper text. Error movement must not shake the interface.

## Scroll-linked motion

Use `IntersectionObserver` or a motion library's equivalent for discrete state changes.

Use scroll progress only for:

- attack-path progression
- signal convergence
- RANGE exercise stages
- long page chapter indicators

Avoid tying every element directly to scroll position.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- remove parallax
- remove smooth scrolling
- stop continuous animation
- show final diagram states immediately
- replace wipes with short opacity transitions or no transition
- preserve all information and interaction states

---

# 6. Global Site Shell

## 6.1 Header

### Desktop composition

- Logo at left
- Primary navigation aligned to the right half of the grid
- Global CTA at far right
- Initial height between 84 and 96 px
- Compact sticky state between 64 and 72 px

The header begins transparent over the hero where contrast permits. After the first scroll threshold, it becomes an opaque ink or bone strip based on page theme.

### Interaction

- Logo returns to Home
- Underline current section with a short geometric rule
- Mega-menus open on click and keyboard activation, not hover alone
- Menu movement uses a clipped downward reveal
- Closing returns focus to the trigger
- Escape closes the menu

### Mobile

- Keep logo and menu trigger visible
- Use a full-screen navigation sheet
- Reveal navigation in numbered groups
- Keep the primary CTA visible near the bottom
- Do not nest more than one level deep

## 6.2 Services mega-menu

Do not display six equal cards.

Use a two-zone layout:

- left: numbered service index
- right: active service descriptor, signature line and related product

Changing focus updates the right zone without moving the menu frame.

On mobile, convert this to a clean accordion.

## 6.3 Technologies mega-menu

Use three vertical colour bands for SCOPE, SIGNAL and RANGE, followed by a smaller Engineering & R&D link.

Each product band contains:

- product name
- category
- one signature line
- a minimal animated diagram

The three bands should feel related, not like cards from different brands.

## 6.4 Page transition

Use a short transition when navigating between major pages:

1. current content lowers in contrast
2. a diagonal brand plane crosses 20 to 30 percent of the viewport
3. new page title appears as the plane clears

Keep total duration below 500 ms. Skip the transition for hash links, browser back where it causes delay, and reduced-motion users.

## 6.5 Footer

Use a large typographic footer rather than a conventional small link farm.

Composition:

- oversized cropped mark on one side
- brand statement as a display line
- four disciplined link columns
- legal and company information along a final baseline

The mark can slowly resolve from outline to fill when the footer enters view. It should not loop.

---

# 7. Homepage Presentation Plan

The homepage should feel like a directed narrative. Its sections must vary in composition without becoming a collection of unrelated experiments.

## Section 01. Hero

### Content

**Security built for the way attacks actually happen.**

Supporting copy, two CTAs and the line:

**Offensive insight. Defensive discipline. Engineering depth.**

### Composition

- Full viewport or slightly taller than one viewport on desktop
- Headline occupies 7 to 8 columns
- Supporting copy sits below or to the right in a narrow measure
- Large cropped mark occupies the opposite field and extends beyond the viewport
- One mark plane sits slightly nearer than the other
- Use a warm bone background for an unexpected opening, with graphite text and a concentrated flare accent

### Motion

1. The two mark planes resolve from separate clipped fields.
2. The headline reveals in two or three meaningful line groups.
3. The words **actually happen** gain a flare-coloured underline that draws like an attack path.
4. CTAs enter last.

Use pointer movement for no more than 8 px of logo depth. Disable on touch and reduced-motion devices.

### Micro-interaction

Hovering the secondary CTA lightly exposes the negative-space cut through the button fill.

### Mobile

- Headline first
- Mark cropped behind the lower half, not behind body copy
- CTAs stacked or wrapped with full tap targets
- Remove pointer parallax

## Section 02. Positioning

### Content

**Security should be demonstrated, not assumed.**

### Composition

Use an editorial split with abundant negative space.

- left: small mono section label and the word **ASSUMPTION**
- right: the approved positioning paragraph
- a thin rule links them across the grid

### Motion

As the section enters, **ASSUMPTION** is crossed by the diagonal logo cut and replaced with **EVIDENCE**.

The copy remains static after the transition so the user can read comfortably.

## Section 03. The SilverFox Approach

### Content

**Attackers see paths. We do too.**

The vulnerable application, identity, cloud, privilege and overlooked-system sequence.

### Composition

Use scrollytelling, not cards.

- sticky left column: headline and short framing copy
- right side: an attack path that builds vertically
- each narrative example becomes one connected node
- the final state zooms out to reveal the complete connected system

### Motion

Progress the path at discrete scroll thresholds. Draw one connection at a time.

At the end, replace the attack path with the six SilverFox verbs:

**Understand → Challenge → Engineer → Defend → Respond → Improve**

### Mobile

Remove sticky behaviour. Present a simple vertical sequence with connections that activate on entry.

## Section 04. Services

### Content

The six approved service practices, descriptions, signature lines and CTAs.

### Composition

Use a numbered editorial service rail.

Each service is a full-width row with:

- large two-digit number
- service title
- short action phrase
- one-line descriptor
- related technology tag

The rows are separated by rules, not containers.

Desktop focus or hover expands one row to reveal the approved capabilities and CTA while the other rows remain visible.

### Visual rhythm

Alternate title alignment slightly across the rail. Keep the reading order obvious.

### Motion

- number shifts horizontally by 8 to 12 px
- active rule fills with the current accent
- capability list reveals through a clipped mask
- related product tag connects by a short animated line

### Mobile

Use an accessible accordion with one optional open item. Do not hide core descriptors behind interaction.

## Section 05. Offensive Security Feature

### Content

**A control that has never been tested is still an assumption.**

Penetration Testing, Red Teaming, Purple Teaming, AI Security Testing and Security Validation.

### Composition

Use the first major colour takeover.

- background: `flare`
- foreground: `ink`
- headline at display scale
- five capabilities arranged as a staggered attack sequence, not cards

A thin path moves through the capabilities and ends at **Challenge Your Environment**.

### Kinetic type

On entry, **control exists** briefly appears, then resolves to **control holds**.

This must be a single purposeful transition, not looping text.

### Interaction

Focusing a capability reveals its one-sentence definition and highlights the relevant point in the path.

## Section 06. Technologies Introduction

### Content

**Security technology shaped by real security problems.**

**Three platforms. Three questions.**

### Composition

Use a full-width three-part field rather than cards.

- SCOPE owns the left field
- SIGNAL owns the centre field
- RANGE owns the right field
- borders touch so the system reads as one whole

Each field starts mostly neutral. Focus or hover activates the product colour and expands its width slightly.

### Shared interaction

Selecting a product updates:

- accent colour
- question
- micro-diagram
- CTA label

The selected state must also be available through keyboard controls.

### Mobile

Stack as three full-width chapters with colour strips and visible descriptions.

## Section 07. SCOPE Feature

### Content

**Know the exposure.**  
**See your organisation from the outside in.**  
**Where are we exposed?**

### Composition

Use a light, wide field with an outside-in attack graph.

- outer edge: domains, cloud services, certificates and credentials
- centre: the organisation
- exposed path highlighted in flare
- copy sits in a narrow left column

### Motion

Nodes appear from the viewport edges and connect inward. One high-risk path becomes visible while low-priority paths recede.

This shows prioritisation without inventing numerical scores.

### Interaction

Hover or focus on a node reveals a plain-language label such as **forgotten subdomain** or **exposed administrative interface**.

## Section 08. SIGNAL Feature

### Content

**Read the signal.**  
**Turn security telemetry into decisions.**  
**What is happening?**

### Composition

Switch to an ink background.

Five telemetry lanes enter from different directions:

```text
Endpoint
Network
Identity
Cloud
Threat Intelligence
```

They converge into a clear investigation timeline.

### Motion

The section begins with many low-contrast events. As the user progresses, irrelevant events fade and related events align into one incident path.

Use `pulse` only for meaningful correlated activity.

### Kinetic phrase

The word **noise** fragments into low-opacity characters while **signal** remains sharp.

## Section 09. RANGE Feature

### Content

**Prove the defence.**  
**Test resilience before reality does.**  
**Can we withstand it?**

### Composition

Use a split-stage layout:

- left: controlled attack actions
- right: defensive response
- centre: measurement line

The layout should feel like a test environment, not a gaming interface.

### Motion

1. an attack technique enters the environment
2. a defensive control responds
3. the measurement line records detected, missed or delayed
4. the environment resets to a clean improved state

Use `solar` for measured outcomes and active validation.

### Mobile

Present the scenario as a three-step sequence: **Attack**, **Observe**, **Improve**.

## Section 10. Technology Philosophy

### Content

**Know the exposure. Read the signal. Prove the defence.**

### Composition

Use one long typographic line that spans the viewport and breaks into three product-coloured segments.

Below it, show the three questions aligned on a shared baseline.

### Motion

The three segments begin separated and align into one complete statement as the section enters.

Do not make the line horizontally scroll on mobile. Stack the phrases with shared alignment.

## Section 11. Engineering & Applied R&D

### Content

**When the right solution does not exist, build it.**

Secure software, intelligent systems, edge and embedded, and applied research.

### Composition

This is the homepage's primary bento grid.

Use an asymmetric 12-column composition:

- large 7-column secure-software field
- tall 5-column intelligent-systems field
- two smaller edge and research fields
- one narrow statement strip for **Buy. Integrate. Build.**

Not every cell needs a border. Use colour fields and spatial grouping.

### Interaction

- secure software reveals a simple architecture stack
- intelligent systems reveals small decision nodes
- edge shows processing moving toward the device
- research moves from question to prototype

Use `mint` as the restrained section accent.

### Important restraint

AI and computer vision must appear as tools within engineering, never as the headline identity.

## Section 12. Brand Manifesto

### Content

**We do not sell fear. We engineer confidence.**

### Composition

Use a spacious typographic chapter with almost no interface chrome.

Place **fear** at the edge of the viewport in low contrast. Place **confidence** firmly on the grid in high contrast.

The supporting sentences appear one by one as the user scrolls, but remain visible once shown.

### Background

Use `bone` or `paper`, not dark cyber styling. This gives the manifesto a human and editorial quality.

## Section 13. Why SilverFox

### Content

Offensive insight, defensive discipline, engineering depth, connected thinking, evidence over assumption and technology without dependency.

### Composition

Use an annotated two-column index.

- left: the six principles as large numbered lines
- right: one active explanation and a small supporting diagram

This may look like the contents page of a technical monograph rather than a card grid.

### Interaction

Focus or hover changes the active explanation. On touch, each explanation remains inline below its title.

## Section 14. The SilverFox Way

### Content

Think like the adversary. Question the assumption. Follow the signal. Engineer the outcome. Stay curious.

### Composition

Use a horizontal sequence on desktop with oversized verbs crossing the grid.

Each verb has one short supporting sentence. The sequence ends by pointing into the final CTA.

### Motion

Use clipped word replacement at discrete thresholds. Do not make the user wait for an animation to finish before continuing.

### Mobile

Use a vertical numbered sequence with a single connecting rule.

## Section 15. Final CTA

### Content

**What would an attacker find?**

Primary and secondary CTAs plus the three supporting links.

### Composition

- ink background
- bone type
- mark used as a large aperture around the headline
- flare CTA
- supporting links aligned as a compact action rail

### Interaction

As the pointer approaches the CTA, the two mark planes move apart by a few pixels, creating an opening. The button remains stationary.

On mobile and reduced-motion devices, show the open final state without tracking.

---

# 8. Services Overview Presentation

## Hero

Use a calm editorial hero with the statement:

**Cybersecurity across the attack lifecycle.**

The word **lifecycle** should connect to a fine path that continues into the service index.

## Six-service navigator

Use a vertical, numbered chapter list rather than six cards.

Each chapter includes:

- number
- service name
- approved signature line
- one concise descriptor
- related products
- text link

The active chapter can occupy more vertical space and reveal its full descriptor.

## Connected lifecycle

After the index, show a simple non-linear relationship diagram:

```text
Strategy informs architecture
Architecture limits attack paths
Offensive testing validates controls
Defence observes the environment
Response produces evidence
Evidence improves strategy
```

Use a looped diagram, but do not animate it continuously.

## Closing

Use the approved **Not sure where to start?** message in a small, high-contrast conversation panel.

---

# 9. Shared Service-Page Framework

All six service pages should share a recognisable structure without becoming identical templates.

## Common anatomy

1. Hero and signature line
2. The central security problem
3. Capability narrative
4. Method or operating approach
5. Connection to other services
6. Related SilverFox technologies
7. Relevant environments
8. Closing CTA

## Shared hero system

- service number in mono at the outer edge
- H1 on 7 to 9 columns
- signature line directly below
- primary and secondary CTAs
- one custom diagram or interaction tied to the service

## Shared capability navigation

For long pages, use a sticky chapter rail with text labels.

Do not use icon-only navigation.

On mobile, replace the sticky rail with a compact in-page contents list.

## Shared related-technology treatment

Use product-coloured edge bands rather than cards.

Example:

```text
SCOPE  | external exposure context
SIGNAL | operational detection context
RANGE  | controlled validation context
```

Only show relevant products on each service page.

## Shared closing treatment

Each service ends with:

- its approved signature line
- one action sentence
- the approved service CTA

Vary the background and composition, but preserve the CTA language.

---

# 10. Service 01: Cyber Strategy, Risk & Assurance

## Visual character

Measured, legible and structured. Use more light surface than dark surface.

## Hero

### Content focus

**Turn cyber risk into decisions.**

### Composition

Place the service title in a narrow left field. On the right, show three aligned terms:

```text
Risk → Decision → Assurance
```

Use a single flare marker to show the current decision point.

## Security without context

Use a before-and-after editorial comparison:

- left: a dense, low-contrast list labelled **activity**
- right: three high-priority items labelled **decision**

No fake numerical risk scores.

## Cyber Strategy & Advisory

Use a wide roadmap band. Reveal phases along a horizontal rule, with capabilities organised under direction, operating model, investment and execution.

On mobile, convert to a vertical roadmap.

## Cyber Risk

Use an interactive risk relationship matrix only here.

Axes:

- criticality
- exposure
- consequence

Selecting a relationship reveals the relevant approved capability. Keep the matrix explanatory, not quantitative.

## Governance, Risk & Compliance

Use a clean standards index that looks like a reference table, not a logo wall.

Frameworks appear as text: ISO/IEC 27001, NIST, CIS, PCI DSS and SOC 2.

## Security Audit & Assurance

Use the three-state sequence:

```text
Exists → Designed appropriately → Operating as intended
```

Animate the rule only when each state is reached.

## Our Approach

Display **Understand, Assess, Prioritise, Design, Validate** as a vertical decision path.

## Beyond the Report

Use one large arrow or directional plane connecting:

**Risk → Decision → Engineering → Validation**

## Related technology

Use two edge bands for SCOPE and RANGE.

## Closing

Return to a large, calm statement:

**Know where you stand before deciding where to go.**

---

# 11. Service 02: Offensive Security & Security Validation

## Visual character

Sharper contrast, more compressed spacing at the top, and stronger flare accents. The page should feel active without becoming aggressive.

## Hero

### Content focus

**Find the path before the attacker does.**

### Composition

Use an incomplete attack path that begins near the logo cut and disappears below the fold.

The user should want to follow it.

## Security should survive contact

Use four calm labels:

```text
Configured
Deployed
Enabled
Reported
```

Then interrupt them with the larger question:

**Does it hold?**

## Penetration Testing

Use a layered surface map, grouped by Application, Infrastructure, Identity, Cloud and Specialist Testing.

Do not place every test type in its own card. Use expandable labelled regions within one system map.

## Red Team Operations

Use scrollytelling to progress through reconnaissance, access, escalation, movement, persistence and objective.

Highlight scope and authorisation visually so the interaction does not glamorise uncontrolled attack.

## Purple Teaming

Split the viewport between attacker action and defender observation. A shared centre column records detected, missed and improved.

## Assumed Breach

Begin the diagram inside the perimeter. The visual distinction should make the concept immediately understandable.

## Application & Product Security

Use a product lifecycle rail from architecture to deployed software. Attach review and testing capabilities to the relevant stages.

## AI Security

Use a permission-and-tool relationship diagram. Avoid chat bubbles, robot heads and glowing neural networks.

## Security Validation

Use a simple control test sequence:

**Technique → Control → Evidence → Result**

## Findings that explain the attack

Use an editorial report spread. Show the approved questions as the report's structure rather than fabricating a sample finding.

## Related technology

Connect SCOPE and RANGE through one line:

**Discover the exposure. Reproduce the scenario. Validate the control.**

## Closing

Use a flare field with:

**Do not ask whether the control exists. Find out whether it holds.**

---

# 12. Service 03: Cloud, Application & Infrastructure Security

## Visual character

Architectural, layered and spacious. Use graphite, bone and small mint or pulse details.

## Hero

### Content focus

**Secure the stack, not just the perimeter.**

### Composition

Show an exploded technical stack built from horizontal planes. Each plane moves at a slightly different depth.

Labels: Application, API, Identity, Cloud, Container, Network and Endpoint.

## Security architecture and blast radius

Use two side-by-side path diagrams:

- excessive trust produces a long connected path
- engineered boundaries stop progression early

Do not label either state as perfectly secure.

## Cloud Security

Use a three-cloud architecture field with shared controls beneath it. Avoid vendor-logo dominance.

## Containers & Kubernetes

Use a lifecycle strip from image to registry to cluster to runtime.

## Application Security

Use a secure-development loop with architecture, threat modelling, build, test, release and operate.

## DevSecOps

Use a pipeline that reveals security controls at relevant points. The message is integration, not more scanners.

## Network & Infrastructure Security

Use a trust-boundary diagram with segmentation and administrative paths.

## Endpoint Security

Use a quiet device field connected to identity and telemetry, avoiding a fleet-of-laptops illustration.

## Architecture Reviews

Use a blueprint-style annotated spread with trust, data, identity, ingress, egress and telemetry layers.

## Engineering & Remediation

Use a before-and-after composition where the architecture changes rather than merely receiving a check mark.

## Approach

Present **Map, Analyse, Prioritise, Engineer, Validate** as an exploded-to-resolved transition.

## Related technology

Use SCOPE and SIGNAL edge bands.

## Closing

Allow the stack to align into one stable system behind:

**Security is strongest when it is engineered in.**

---

# 13. Service 04: Identity & Data Security

## Visual character

Relationship-driven, precise and human. Avoid biometric clichés.

## Hero

### Content focus

**Sometimes attackers break in. Sometimes they log in.**

### Composition

Show two visually equal entry paths:

- exploit path
- valid-identity path

The identity path should reach farther, demonstrating the risk without a sensational visual.

## Identity is part of the attack surface

Use a trust graph centred on an identity. Connected systems reveal how valid access can cross boundaries.

## Identity & Access Management

Use a lifecycle from joiner to mover to leaver with decisions attached at each stage.

## Privileged Access Management

Use a narrow privileged route surrounded by larger blocked paths. On interaction, show just-in-time access and session control.

## Active Directory & Cloud Identity

Use a dual-plane relationship diagram. One plane represents directory infrastructure; the other represents cloud identity. Hybrid trust connects them.

## Machine & Workload Identity

Shift from person icons to services, APIs, workloads, certificates and tokens. The change in visual language should reinforce that not every identity is human.

## Identity Threat Detection

Use an authentication timeline where one sequence becomes suspicious only when combined with endpoint or cloud context.

## Data Discovery & Classification

Use a calm data map that changes from unknown blocks to labelled ownership and sensitivity states.

## Data Protection

Show protection applied according to classification and access, not a generic padlock.

## Approach

Present **Discover, Map, Reduce, Protect, Detect, Validate** as a tightening trust field.

## Related technology

Use SCOPE and SIGNAL edge bands.

## Closing

Use three aligned statements:

**Protect the identity. Protect the access. Protect the data.**

---

# 14. Service 05: Cyber Defence & Managed Security

## Visual character

Dark operational surface, high legibility and controlled pulse accents. It should feel focused, not like a science-fiction control room.

## Hero

### Content focus

**Find the signal in the noise.**

### Composition

Begin with many quiet event lines. Only a few connect into a meaningful sequence.

The copy remains in a stable left column while the operational picture resolves on the right.

## More alerts are not more security

Use a density-to-clarity transition. Avoid fake alert counts.

## Security Operations

Use an operating-model diagram that connects telemetry, detection, analyst, investigation, escalation and response.

## Managed Detection & Response

Use a 24-hour circular band only if 24/7 monitoring is genuinely available at launch. Otherwise, use a continuous workflow without a time claim.

Show endpoint, network, identity, cloud and application coverage as connected lanes.

## Detection Engineering

Use a coverage matrix tied to behaviours and telemetry. Do not fabricate percentages.

## Threat Hunting

Use a query-to-hypothesis interaction. Selecting a hypothesis highlights the data sources needed to investigate it.

## Managed Security

Present managed capabilities as one service operating model with optional modules, not a shop of disconnected tools.

## Security Automation

Show repetitive tasks moving into automation while decision gates remain explicitly human.

## Approach

Present **Observe, Detect, Investigate, Contain, Hunt, Improve** as an active operational loop.

## Offensive and defensive loop

Use an attack event from RANGE or a purple-team engagement to show how missed activity becomes a new detection.

## Related technology

SIGNAL is primary. SCOPE and RANGE appear as supporting bands.

## Closing

Reduce the page to one sharp line:

**More telemetry is not the answer. Better decisions are.**

---

# 15. Service 06: Incident Response, DFIR & Threat Intelligence

## Visual character

Sober, urgent and exceptionally clear. Avoid playful motion and excessive colour.

## Persistent urgent path

Place a compact **Need Incident Response?** action near the page header. It must not compete with ordinary navigation, but it must remain easy to find.

## Hero

### Content focus

**When something happens, certainty matters.**

### Composition

Use a large quiet field with a single evidence timeline beginning below the headline.

Do not use a countdown, flashing red warning or alarm animation.

## Pressure makes clarity more important

Display the approved incident questions as an evidence board. Each question connects to systems, identities, data and time.

## Incident Response

Use a command sequence with clear ownership and outcomes. Keep incident types in a restrained text index.

## Digital Forensics

Use an evidence timeline that distinguishes:

- confirmed fact
- supported inference
- unanswered question

These states must differ by label and shape, not colour alone.

## Malware Analysis

Use a controlled analysis flow from sample to behaviour, persistence, command and control, indicators and impact. Do not show malicious code as decoration.

## Compromise Assessment

Use a wide environment scan that gradually narrows to affected identities and systems.

## Threat Intelligence

Show intelligence becoming useful only when it connects to an exposure, event, investigation or decision.

## Incident Response Retainers

Use a readiness checklist or relationship map. The tone should be prepared, not alarmist.

## Response approach

Present **Stabilise, Scope, Investigate, Contain, Eradicate, Recover, Improve** as a clear timeline with decision gates.

## From incident to improvement

Complete the loop:

**Incident → Evidence → Remediation → Validation**

## Related technology

SIGNAL is primary. RANGE and SCOPE provide supporting context.

## Closing

Use a high-contrast but calm final field:

**Contain the threat. Establish the facts. Regain control.**

---

# 16. Technologies Overview Presentation

## Hero

Use the statement:

**Three platforms. Three questions.**

Place the questions before the product names:

```text
Where are we exposed?
What is happening?
Can we withstand it?
```

As the user enters the page, each question resolves into SCOPE, SIGNAL and RANGE.

## Connected product field

Use three adjacent but unequal bands. Their widths respond to focus and keyboard selection.

Each band contains:

- product name
- category
- question
- signature line
- one custom micro-diagram
- approved CTA

## Product relationship

Use one connected sequence:

**Exposure → Security Context → Detection → Validation → Improvement**

Allow the user to focus each stage and see which product contributes.

## Closing

End with:

**Know the exposure. Read the signal. Prove the defence.**

The words should align to one shared baseline as the section enters.

---

# 17. SCOPE Product Page

## Product colour

`flare` on bone and ink surfaces.

## Hero

### Content focus

**Know the exposure.**  
**See your organisation from the outside in.**

### Composition

Show a central organisation boundary surrounded by external assets. The visible attack surface exceeds the assumed inventory.

The main CTA remains **Map Your Exposure**. Use **Discuss SCOPE** as the secondary CTA.

## The problem

Use a split comparison:

- known inventory
- externally discoverable reality

The second field expands beyond the first.

## The question

Present the approved questions as a full-width editorial sequence. Each question highlights a different layer in the graph.

## Capability model

Use a sticky left rail for:

1. Discover
2. Map
3. Identify Exposure
4. Credential & Identity Exposure
5. Vulnerability Intelligence
6. Attack-Path Analysis
7. Risk Prioritisation
8. Continuous Monitoring
9. Remediation Tracking

The right side contains one evolving system graph. Do not create nine unrelated cards.

## Discover

Assets enter from the page edges and join the inventory. Shadow assets appear from beyond the expected boundary.

## Map

Relationships draw between domains, hosts, services, applications, cloud, identities and vulnerabilities.

## Identify Exposure

The interface filters the graph to externally visible weaknesses.

## Credential & Identity Exposure

One identity node enters the graph and changes the meaning of connected assets.

## Vulnerability Intelligence

Show context accumulating around a finding: reachability, exploitation, criticality and related exposures.

## Attack-Path Analysis

Use the approved path diagram as the centrepiece. Let the user step through it with keyboard-accessible controls.

## Risk Prioritisation

Multiple paths fade until the most consequential path remains. Avoid invented scores.

## Continuous Monitoring

Use a change strip with new asset, new service, certificate change, emerging vulnerability and remediation states.

## Remediation Tracking

Resolve the graph through:

**Discover → Prioritise → Remediate → Verify**

## Architecture

Rebuild the approved conceptual architecture as responsive SVG. Keep labels selectable and available as HTML text where practical.

## Deployment and integration

Use a restrained integration matrix. Clearly distinguish:

- available now
- planned
- technically possible

Do not expose internal status publicly unless product leadership approves it. The coding implementation should support these states so unsupported claims cannot be published accidentally.

## Use cases

Use a horizontal editorial index with one active explanation, not eight cards.

## Services connection

Show SCOPE feeding offensive testing, cyber risk, architecture remediation and defensive context.

## Positioning and product language

Use the approved language as a typographic interlude.

## Final CTA

Use a wide flare plane entering from outside the viewport:

**What can attackers see right now?**

---

# 18. SIGNAL Product Page

## Product colour

`pulse` on ink and bone surfaces.

## Hero

### Content focus

**Read the signal.**  
**Turn security telemetry into decisions.**

### Composition

Five telemetry lanes converge into a single incident timeline. Keep the product copy readable in a fixed column.

Use **See SIGNAL in Action** only if a real product walkthrough exists. Otherwise use **Discuss SIGNAL** as the primary CTA.

## The problem

Use separated evidence fragments across the grid. On entry, related fragments align and unrelated fragments recede.

## The question

Reveal the approved investigation questions one at a time while the same entity remains highlighted.

## Capability model

Use a sticky operational workspace for:

1. Collect
2. Normalise & Enrich
3. Detect
4. Entity-Centric Analysis
5. Attack-Chain Reconstruction
6. MITRE ATT&CK Context
7. Threat Intelligence
8. Threat Hunting
9. Investigation Workspace
10. Response & Orchestration
11. AI-Assisted Analysis
12. Detection Coverage

The visual should evolve as one connected investigation, not reset at every chapter.

## Collect

Telemetry lanes enter from endpoint, identity, network, cloud, applications and intelligence.

## Normalise & Enrich

Raw events receive asset, identity, geolocation, vulnerability, intelligence and historical context.

## Detect

Show rule, behaviour, correlation, intelligence, anomaly and custom detection as complementary methods.

## Entity-Centric Analysis

Allow the active entity to change between user, endpoint, server, IP, domain, workload and application.

## Attack-Chain Reconstruction

Build the approved credential-to-sensitive-data sequence as a timeline.

## MITRE ATT&CK Context

Use ATT&CK labels as analysis metadata, not a decorative matrix wallpaper.

## Threat Intelligence

Start with an isolated indicator and reveal its actor, campaign, infrastructure and decision context.

## Threat Hunting

Use a concise query builder or hypothesis selector. Avoid creating a fake terminal.

## Investigation Workspace

This can use a controlled bento layout because the content is genuinely modular: alerts, entities, timeline, intelligence, notes and response.

It must look like a conceptual workflow unless real product UI is available.

## Response & Orchestration

Show action gates. Automated steps move quickly; human decisions remain visible and deliberate.

## AI-Assisted Analysis

Use the approved natural-language examples in an investigation context. Do not turn this into a chatbot hero.

## Detection Coverage

Use a labelled technique and telemetry matrix without invented percentages.

## Architecture

Rebuild the approved architecture as responsive SVG and HTML labels.

## Product connections

- SCOPE adds external exposure context
- RANGE generates controlled activity for validation

Animate only the selected connection.

## Deployment and use cases

Use an editorial specification layout with clear caveats around supported deployment models.

## Final CTA

Resolve the event field into one clear line:

**What is your security data trying to tell you?**

---

# 19. RANGE Product Page

## Product colour

`solar` on ink and graphite surfaces.

## Hero

### Content focus

**Prove the defence.**  
**Test resilience before reality does.**

### Composition

Use a contained simulation frame floating within generous negative space. The frame contains attack, defence and measurement zones.

The interface should feel controlled and safe, not militarised or game-like.

## The problem

Contrast written intent with tested behaviour:

```text
Policy says → Environment does
Diagram shows → Test reveals
Team expects → Exercise measures
```

## The question

Use the approved validation questions as scenario checkpoints.

## Capability model

Use a scenario-building workspace for:

1. Cyber Range Environments
2. Digital Twins
3. Attack Simulation
4. Red, Blue & Purple Teaming
5. SOC Training
6. Incident Response & DFIR Exercises
7. IT/OT & Industrial Simulation
8. Security-Control Validation
9. Technology Evaluation
10. Exercise Management
11. Scenario Development
12. Measurement & After-Action Review

## Cyber Range Environments

Use a modular environment canvas. Modules connect visibly to form one controlled scenario.

## Digital Twins

Use two layers: source environment and selected replica. Highlight that RANGE reproduces what the test requires, not every production detail.

## Attack Simulation

Use a linear scenario path with safety and authorisation boundaries visible.

## Red, Blue & Purple Teaming

Use a three-column exercise view that becomes one shared improvement record.

## SOC Training

Show an alert becoming an investigation, then a decision. Avoid scores unless real exercise data exists.

## Incident Response & DFIR Exercises

Use a timed sequence without a countdown clock. The visual should emphasise evidence and coordination.

## IT/OT & Industrial Simulation

Use restrained industrial system diagrams. Do not use dramatic factory photography as a substitute for explanation.

## Security-Control Validation

Show technique, control, telemetry, detection and outcome on one line.

## Technology Evaluation

Use a comparison field for architecture, integration, security and operational behaviour. Avoid fake ratings.

## Exercise Management

Use a scenario timeline from objective through after-action review.

## Scenario Development

Show threat intelligence, incidents, business systems and known gaps feeding the scenario.

## Measurement & Review

Use labelled evidence states and improvement actions. Avoid gamified badges.

## Architecture

Rebuild the approved RANGE architecture as responsive SVG.

## Deployment and isolation

Make isolation a visual boundary. Do not claim air-gapped operation, full production replication or hardware support unless validated.

## Product connections

- SCOPE provides exposure and attack-path scenarios
- SIGNAL observes and investigates controlled attack activity

## Final CTA

Open the simulated environment into a clean solar field:

**What should your team discover before a real attacker arrives?**

---

# 20. About SilverFox Presentation

## Overall tone

Human, confident and intellectually clear. The page should compensate for the company's newness through perspective and method, not fabricated history.

## Hero

### Content focus

**Built to challenge assumptions.**

Use the logo at its most iconic scale. The two planes should feel like independent disciplines held in one system.

## Cybersecurity is a connected problem

Use the approved application, identity, infrastructure and service sequence as a horizontal cause-and-effect path.

## Offensive insight, defensive discipline, engineering depth

Use three adjacent editorial chapters, not cards.

Each chapter has different spatial behaviour:

- Offensive insight cuts into the grid
- Defensive discipline stabilises the grid
- Engineering depth rebuilds the grid

## Our Approach

Use the six verbs as a circular but non-looping improvement system.

## Technology as an extension of expertise

Use one connected triptych for SCOPE, SIGNAL and RANGE.

## Built when necessary

Use a restrained capability constellation. AI and computer vision remain subordinate items.

## How we think

Use a large numbered principles index with ample space.

## SilverFox Principle

Finish on an almost empty page field:

**We do not sell fear.**

Then reveal:

**We engineer confidence.**

---

# 21. Engineering & Applied R&D Presentation

## Overall tone

Lab notebook meets product studio. More experimental than the service pages, but still controlled by the same visual grammar.

## Hero

### Content focus

**When the right solution does not exist, build it.**

Show a technical requirement becoming a rough architecture, then a tested system.

## Security engineering beyond configuration

Use a multi-layer problem map across applications, cloud, identity, data, sensors, networks, edge and telemetry.

## Secure Software Engineering

Use the largest bento composition on the page. Organise capabilities around the approved lifecycle:

**Architecture → Development → Testing → Deployment → Validation**

## Indigenous Technology Development

Use a control-and-sovereignty diagram. Show local operation, maintainability, integration and deployment boundaries without nationalist visual clichés.

## Cybersecurity Product Engineering

Use SCOPE, SIGNAL and RANGE as proof of the engineering philosophy, but do not imply capabilities that are not implemented.

## Security Automation

Use a workflow where repetitive steps compress and human decision points remain full size.

## AI & Machine Learning

Use an applied decision diagram. Avoid neural-network artwork. Lead with the security outcome and show AI as one tool in the path.

## Computer Vision

Use a restrained image-analysis frame with bounding geometry only if real or purpose-built imagery is available. Do not use fabricated surveillance footage.

## Edge & Embedded Systems

Use a processing-distance diagram that moves computation from cloud to site to device.

## Applied Security Research

Use a research notebook sequence:

**Question → Investigation → Evidence → Prototype or Recommendation**

## Rapid Prototyping

Use a series of increasingly resolved wireframes or system shapes.

## Technology Evaluation

Use the approved decision:

**Buy where appropriate. Integrate where practical. Build where necessary.**

Let each clause occupy one deliberate column.

## Cybersecurity connections

Use a relationship map connecting Engineering to Offensive, Cloud, Identity, Defence, Incident Response and the three technologies.

## Engineering approach

Use a visible eight-stage progress rail. Do not animate all eight stages automatically. Advance them through scroll entry or direct selection.

## Closing

Use:

**Research when necessary. Engineer when possible. Build when it matters.**

---

# 22. Contact Presentation

## Overall tone

Direct, calm and welcoming. The user should not feel forced to understand the service taxonomy before making contact.

## Page composition

Use a 5/7 split on desktop:

- left: headline, reassurance and contact context
- right: form

The page may use a warm bone field with one dark form plane.

## Hero

Use:

**Start a conversation.**

Keep it short. Do not add a stock image.

## Enquiry selector

Do not use a visually heavy native-looking dropdown if space allows.

Use an accessible combobox or radio-list panel containing the approved enquiry categories. Each option reveals its approved one-line description.

On mobile, use a standard accessible select or compact radio accordion.

## Form

### Fields

- Name
- Organisation
- Work Email
- Phone
- What can we help with?
- Requirement
- Privacy acknowledgement

Use persistent labels above inputs. Placeholder text must never replace a label.

## Form interaction

- Focus uses a clear 2 px accent edge
- Helper text appears without moving surrounding content excessively
- Errors use text, icon and colour
- Submission state confirms what happens next without promising an unverified response time
- Preserve entered content after validation failure

## Incident Response Path

Place this in a distinct ink panel with a flare edge.

Use:

**Suspect an active cyber incident?**

The panel should contain the dedicated contact route when one exists and the approved warning not to submit malware, credentials or sensitive evidence through the general form.

It must not flash, pulse continuously or use alarm styling.

## Product enquiries

Use a compact three-line selector for SCOPE, SIGNAL and RANGE. Selecting one pre-fills the enquiry category.

## General closing

Use the approved reassurance:

**Not sure where to start? That is fine. Describe the problem rather than trying to select the service.**

---

# 23. Privacy Policy Presentation

## Overall tone

Quiet, legible and trustworthy. This is a document page, not a marketing stage.

## Composition

- narrow reading column between 680 and 760 px
- sticky desktop table of contents on the left
- last-updated date and legal status near the title
- clear numbered headings
- generous paragraph spacing
- no decorative animation inside legal copy

## Interaction

- active table-of-contents item updates as the reader progresses
- anchor links are copyable
- focus states are visible
- external links are identified
- print stylesheet removes navigation and preserves clean pagination

## Mobile

Replace the sticky table of contents with a collapsed **On this page** control.

## Legal integrity

Do not publish until all placeholders are replaced and the draft has been checked against the actual jurisdiction, legal entity, hosting, analytics, CRM and form behaviour.

---

# 24. Responsive Behaviour

## Breakpoints

Use content-driven breakpoints. The following may be initial guides:

```text
Small:   below 640 px
Medium:  640 to 959 px
Large:   960 to 1279 px
Wide:    1280 px and above
```

Do not design only at these exact widths. Test continuously between them.

## Mobile principles

- Preserve narrative order
- Replace horizontal interactions with vertical sequences
- Remove sticky sections that create cramped reading
- Keep all content available without hover
- Reduce parallax and layered movement
- Use large touch targets of at least 44 × 44 px
- Keep body text at least 16 px
- Avoid full-height sections when mobile browser chrome would trap content
- Keep diagrams horizontally readable without requiring precision pinch zoom

## Tablet principles

- Use 6-column compositions
- Do not simply scale the desktop layout
- Convert side-by-side diagrams into staged layers where necessary
- Test mega-menu and sticky rails in landscape and portrait

## Wide-screen principles

- Cap reading widths
- Allow mark crops and diagrams to use additional space
- Do not stretch paragraphs across the screen
- Maintain intentional margins beyond the 1440 px content grid

---

# 25. Accessibility Requirements

Accessibility is part of the design, not a later audit.

## Minimum requirements

- Meet WCAG 2.2 AA contrast targets
- Support keyboard access for all menus, selectors, accordions and diagrams
- Provide visible focus states
- Preserve meaningful reading order in the DOM
- Use semantic headings
- Provide a skip link
- Provide descriptive accessible names for controls
- Never rely on colour alone
- Respect `prefers-reduced-motion`
- Respect browser zoom up to at least 200 percent
- Avoid content that flashes more than permitted thresholds
- Provide text equivalents for diagram meaning
- Keep pointer targets large enough
- Ensure sticky elements do not hide focused content
- Use correct labels, errors and status announcements in forms

## Motion accessibility

No critical information may exist only inside animation.

Every animated diagram needs:

- a readable static final state
- accessible labels
- logical keyboard order if interactive
- a reduced-motion presentation

## Contrast discipline

Do not place body text over imagery or moving diagrams.

Accent text on light backgrounds requires separate contrast testing. When an accent does not meet normal-text requirements, use it for shapes, borders or large display text while keeping body copy in ink.

---

# 26. Performance Requirements

The site should feel immediate. Motion that causes delay works against the brand.

## Targets

- Prefer SVG and CSS for diagrams
- Animate `transform` and `opacity` where possible
- Avoid large autoplay video in the hero
- Lazy-load below-fold media
- Use responsive images with explicit dimensions
- Self-host and subset fonts where licensing permits
- Limit font weights
- Avoid a heavy WebGL dependency unless a single approved interaction genuinely requires it
- Pause off-screen animations
- Do not run pointer effects on touch devices
- Keep page transitions short
- Render meaningful content before optional motion initialises

## Progressive enhancement

The complete site must remain readable and navigable when:

- JavaScript is slow
- animation fails
- reduced motion is enabled
- images do not load
- the browser does not support an optional effect

---

# 27. Content and Product Integrity

Use `SILVERFOX_WEBSITE_CANONICAL.md` as the only source of public copy.

## Do not add

- unsupported metrics
- fake client logos
- fabricated testimonials
- fabricated case studies
- fake product screenshots
- unverified certifications
- unverified partnerships
- fake response times
- fake live threat data
- invented team history

## Product capability states

The implementation should make it possible for content owners to distinguish:

- available capability
- configurable capability
- planned capability
- conceptual architecture

Do not expose these labels publicly unless approved, but keep the content model clear enough that speculative language cannot accidentally become a factual product claim.

## Launch exclusions

Do not add navigation or presentation sections for:

- Industries
- Research & Insights
- Leadership
- Careers
- Responsible Disclosure
- Terms of Use
- a standalone Cookies page
- additional products
- a seventh service (post-launch client-requested audit/certification/consulting scope was folded into the existing Cyber Strategy, Risk & Assurance service instead - see the "No seventh service" note in SILVERFOX_WEBSITE_CANONICAL.md)

Industry relevance may appear inside appropriate service and product pages, as defined in the canonical content.

---

# 28. Suggested Component Inventory

Build a small, expressive system rather than dozens of one-off effects.

## Global components

- `SiteHeader`
- `ServicesMegaMenu`
- `TechnologiesMegaMenu`
- `MobileNavigation`
- `SiteFooter`
- `PageTransition`
- `SkipLink`

## Typography and layout

- `DisplayHeadline`
- `KineticPhrase`
- `SectionLabel`
- `EditorialSplit`
- `FullBleedStatement`
- `StickyNarrative`
- `ChapterRail`
- `ActionRail`

## Interaction and data presentation

- `AttackPath`
- `SignalLanes`
- `EntityGraph`
- `ArchitectureLayers`
- `ExerciseTimeline`
- `LifecycleLoop`
- `CapabilityAccordion`
- `ProductBand`
- `RelatedTechnologyBand`
- `BentoField`

## Conversion and utility

- `PrimaryCTA`
- `SecondaryCTA`
- `IncidentResponseCTA`
- `EnquirySelector`
- `ContactForm`
- `LegalTableOfContents`

## Component rule

Components may share behaviour without sharing the exact same composition. A `ProductBand` can have the same interaction grammar while SCOPE, SIGNAL and RANGE use different diagrams.

---

# 29. Implementation Sequence

## Phase 01. Foundations

1. Confirm SVG logo master and wordmark
2. Implement colour, type, spacing and motion tokens
3. Build the responsive grid
4. Build accessible header, mega-menus and footer
5. Build button, link, form and focus states
6. Implement reduced-motion behaviour

## Phase 02. Homepage prototype

1. Hero
2. Positioning transition
3. Attack-path scrollytelling
4. Service rail
5. Technology triptych
6. One product feature, preferably SIGNAL
7. Engineering bento
8. Final CTA

Test the complete visual rhythm before building every interior page.

## Phase 03. Shared page systems

1. Service-page hero
2. Sticky chapter rail
3. Related-technology bands
4. Product-page hero
5. Responsive SVG diagram framework
6. Legal document layout
7. Contact form and incident-response path

## Phase 04. Individual page expression

Build the custom visual modules for each service and product page. Reuse the shared motion grammar without copying the same layout.

## Phase 05. Validation

1. Content comparison against the canonical file
2. Responsive QA
3. Keyboard QA
4. Screen-reader QA
5. Reduced-motion QA
6. Contrast QA
7. Performance profiling
8. Product-claim review
9. Legal placeholder review
10. Final visual consistency review

---

# 30. Acceptance Criteria

The website presentation is ready when all of the following are true.

## Brand

- The site is recognisably SilverFox without relying on the wordmark alone
- The angular mark informs layout, masking and motion
- The visual language avoids conventional cybersecurity clichés
- The palette feels energetic but controlled
- AI and computer vision remain supporting capabilities

## Layout

- Sections use a deliberate mix of editorial layouts, diagrams, sequences and bento compositions
- Cards are used only when the content is genuinely modular
- Negative space is present at every breakpoint
- Long pages remain easy to scan through chapter navigation
- Mobile layouts are designed, not merely collapsed

## Motion

- Motion explains state, relationship or progression
- No section depends on continuous decorative animation
- Scroll-linked effects remain smooth and restrained
- Reduced-motion users receive the complete experience
- Page transitions do not delay navigation

## Content

- All public copy comes from the canonical content file
- Every service and product retains its approved signature language
- CTA labels remain consistent
- No excluded page appears in navigation
- No unsupported claims have been introduced

## Accessibility

- Keyboard navigation works throughout
- Focus is always visible
- Contrast meets WCAG 2.2 AA
- Diagrams have accessible equivalents
- Forms expose labels, instructions, errors and success messages correctly

## Performance

- The hero becomes usable quickly
- Optional motion does not block content
- Diagrams use efficient SVG or CSS where practical
- Media is responsive and appropriately loaded
- The site remains readable when motion or JavaScript is unavailable

---

# 31. Final Creative Check

The finished site should feel like this:

**A precise editorial system interrupted by controlled moments of energy.**

It should not feel like a theme.

It should not feel like a product-dashboard collage.

It should not feel like an AI-generated collection of fashionable components.

It should feel as though the SilverFox mark, philosophy, services and technologies could only have produced this particular website.

