import type { ProductAccent, ProductId } from "@/lib/types";

/**
 * Centralised business, contact and legal placeholders.
 *
 * Every value here is sourced from an environment variable first and falls
 * back to the canonical bracketed placeholder from
 * docs/SilverFox_Technical_Instructions.md when unset, so the site can be
 * deployed today and have real company details dropped in later without
 * touching a single component or content file.
 */
export const placeholders = {
  legalEntityName: process.env.COMPANY_LEGAL_NAME ?? "Silver Fox Consultancy",
  registrationNumber:
    process.env.COMPANY_REGISTRATION_NUMBER ?? "[REGISTRATION NUMBER]",
  registeredAddress: process.env.COMPANY_ADDRESS ?? "[REGISTERED ADDRESS]",
  jurisdiction: process.env.COMPANY_JURISDICTION ?? "[JURISDICTION]",
  generalContactEmail:
    process.env.GENERAL_CONTACT_EMAIL ?? "[GENERAL CONTACT EMAIL]",
  formRecipientEmail: process.env.CONTACT_EMAIL ?? "[FORM RECIPIENT EMAIL]",
  privacyEmail: process.env.PRIVACY_EMAIL ?? "[PRIVACY EMAIL]",
  publicPhone: process.env.PUBLIC_PHONE ?? "[PUBLIC PHONE]",
  incidentResponseContact:
    process.env.INCIDENT_RESPONSE_CONTACT ?? "[INCIDENT RESPONSE CONTACT]",
  /** e.g. "tel:+441234567890" or "mailto:ir@silverfox.example" - the actual
   * link target, kept separate from the display text above. */
  incidentResponseHref: process.env.INCIDENT_RESPONSE_HREF ?? "",
  privacyPolicyDate: process.env.PRIVACY_POLICY_DATE ?? "[PRIVACY POLICY DATE]",
} as const;

/** True once a real, dedicated incident-response destination has been configured. */
export const hasIncidentResponseDestination = Boolean(process.env.INCIDENT_RESPONSE_HREF);

/**
 * These gate the sitewide contact details (footer, contact page) the same
 * way hasIncidentResponseDestination gates the incident-response CTA: show
 * a real, working destination once configured, otherwise show nothing
 * rather than a bracketed placeholder in a prominent, sitewide spot.
 */
export const hasGeneralContactEmail = Boolean(process.env.GENERAL_CONTACT_EMAIL);
export const hasPublicPhone = Boolean(process.env.PUBLIC_PHONE);

export const siteConfig = {
  name: "SilverFox",
  tagline: "Security built for the way attacks actually happen.",
  description:
    "SilverFox brings together offensive security, security engineering, managed defence and threat intelligence to expose weaknesses, strengthen systems and protect organisations across the attack lifecycle.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.silverfox.example",
};

export const globalCta = {
  talkToSpecialist: "Talk to a Security Specialist",
  exploreCapabilities: "Explore Our Capabilities",
  talkToSilverFox: "Talk to SilverFox",
  startConversation: "Start the Conversation",
};

export type ServiceNavItem = {
  slug: string;
  number: string;
  category: string;
  name: string;
  descriptor: string;
  /** The technology named first in this service's own "Related SilverFox
   * Technology" section - used as the compact tag in navigation surfaces. */
  primaryProduct: ProductId;
};

/**
 * Compact per-service data shared by the header mega-menu, the footer and
 * the services overview page. Full page copy lives in content/services/*.
 */
export const servicesNav: ServiceNavItem[] = [
  {
    slug: "strategy-risk-assurance",
    number: "01",
    category: "Strategy & Assurance",
    name: "Cyber Strategy, Risk & Assurance",
    descriptor:
      "Assess risk, strengthen governance and establish confidence in security controls.",
    primaryProduct: "SCOPE",
  },
  {
    slug: "offensive-security",
    number: "02",
    category: "Offensive Security",
    name: "Offensive Security & Security Validation",
    descriptor:
      "Penetration testing, red teaming, adversary simulation and real-world security validation.",
    primaryProduct: "SCOPE",
  },
  {
    slug: "cloud-application-infrastructure",
    number: "03",
    category: "Cloud & Infrastructure",
    name: "Cloud, Application & Infrastructure Security",
    descriptor:
      "Secure applications, cloud platforms, networks, endpoints and modern development environments.",
    primaryProduct: "SCOPE",
  },
  {
    slug: "identity-data-security",
    number: "04",
    category: "Identity & Data",
    name: "Identity & Data Security",
    descriptor:
      "Protect identities, privileged access, credentials and critical information.",
    primaryProduct: "SCOPE",
  },
  {
    slug: "cyber-defence",
    number: "05",
    category: "Cyber Defence",
    name: "Cyber Defence & Managed Security",
    descriptor: "SOC, MDR, detection engineering, threat hunting and continuous defence.",
    primaryProduct: "SIGNAL",
  },
  {
    slug: "incident-response",
    number: "06",
    category: "Incident Response",
    name: "Incident Response, DFIR & Threat Intelligence",
    descriptor: "Contain incidents, establish what happened and turn intelligence into action.",
    primaryProduct: "SIGNAL",
  },
];

export type ProductNavItem = {
  id: ProductId;
  slug: string;
  accent: ProductAccent;
  category: string;
  signature: string;
  cta: string;
};

export const productsNav: ProductNavItem[] = [
  {
    id: "SCOPE",
    slug: "scope",
    accent: "flare",
    category: "Continuous Exposure & Attack Surface Management",
    signature: "Know what attackers can see.",
    cta: "Explore SCOPE",
  },
  {
    id: "SIGNAL",
    slug: "signal",
    accent: "pulse",
    category: "Security Operations & Threat Intelligence Platform",
    signature: "Less noise. More context. Faster action.",
    cta: "Explore SIGNAL",
  },
  {
    id: "RANGE",
    slug: "range",
    accent: "solar",
    category: "Cyber Range & Digital Twin Platform",
    signature: "Test resilience before reality does.",
    cta: "Explore RANGE",
  },
];

export const engineeringNav = {
  name: "Engineering & Applied R&D",
  descriptor:
    "Secure software engineering, cybersecurity product development, automation, AI and machine learning, computer vision, edge systems and applied research.",
  cta: "Explore Engineering & Applied R&D",
};

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: servicesNav.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  technologies: productsNav.map((p) => ({ label: p.id, href: `/technologies/${p.slug}` })),
  company: [
    { label: "About SilverFox", href: "/about" },
    { label: "Engineering & Applied R&D", href: "/engineering" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
};

export type SocialName = "linkedin" | "x" | "facebook" | "instagram";

/** Footer social icons. Not yet linked to real profiles - href stays "#" until they are. */
export const socialLinks: { name: SocialName; label: string; href: string }[] = [
  { name: "linkedin", label: "LinkedIn", href: "#" },
  { name: "x", label: "X (Twitter)", href: "#" },
  { name: "facebook", label: "Facebook", href: "#" },
  { name: "instagram", label: "Instagram", href: "#" },
];

/**
 * Recurring brand language (docs/SILVERFOX_WEBSITE_CANONICAL.md, section 21).
 * Reused selectively - never forced onto every section.
 */
export const brandLanguage = [
  "Security built for the way attacks actually happen.",
  "Security should be demonstrated, not assumed.",
  "Attackers do not operate in silos. Neither do we.",
  "Offensive insight. Defensive discipline. Engineering depth.",
  "Know the exposure. Read the signal. Prove the defence.",
  "Find the path before the attacker does.",
  "Sometimes attackers break in. Sometimes they log in.",
  "Find the signal in the noise.",
  "Contain the threat. Establish the facts. Regain control.",
  "When the right solution does not exist, build it.",
  "A vulnerability is a finding. An attack path is a risk.",
  "More telemetry is not the answer. Better decisions are.",
  "Test resilience before reality does.",
  "We do not sell fear. We engineer confidence.",
];
