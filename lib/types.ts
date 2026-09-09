export type ProductId = "SCOPE" | "SIGNAL" | "RANGE";

export type ProductAccent = "flare" | "pulse" | "solar" | "mint";

/**
 * A single flexible content block used to compose the long-form capability
 * narrative on service and product pages. One shape, reused with different
 * fields populated, keeps every page's copy faithful to its own structure in
 * SILVERFOX_WEBSITE_CANONICAL.md without forcing identical templates.
 */
export type ContentBlock = {
  id: string;
  heading?: string;
  kicker?: string;
  /** A short, punchy statement directly under the heading (canonical "###" line). */
  subheading?: string;
  paragraphs?: string[];
  /** Grouped or flat capability lists, e.g. "Application Security Testing". */
  groups?: { heading?: string; intro?: string; items: string[] }[];
  /** Closing sentence(s) that follow a capability list. */
  footnote?: string[];
  /** An arrow-chain statement, e.g. ["Risk", "Decision", "Engineering", "Validation"]. */
  sequence?: string[];
  /** Italic rhetorical questions, e.g. "Can an adversary achieve the objective?" */
  questions?: string[];
};

export type ApproachStep = {
  step: string;
  title: string;
  body: string;
};

export type RelatedTechnologyNote = {
  product: ProductId;
  body: string;
};

export type ServiceContent = {
  slug: string;
  number: string;
  name: string;
  category: string;
  /** One-line descriptor shared by the mega-menu and the services overview page. */
  menuDescriptor: string;
  /** The bold "signature" line used across hero, homepage rail and closing. */
  signature: string;
  homepage: {
    descriptor: string;
    capabilities: string[];
  };
  primaryCta: string;
  secondaryCta?: string;
  /** CTA label used only on the services overview page ("Explore X"). */
  overviewCta: string;
  hero: {
    paragraphs: string[];
  };
  sections: ContentBlock[];
  approach: ApproachStep[];
  extra?: ContentBlock[];
  relatedTechnology: RelatedTechnologyNote[];
  relevantFor: string[];
  closing: {
    heading: string;
    paragraphs: string[];
    cta: string;
  };
};

export type ProductContent = {
  id: ProductId;
  slug: string;
  accent: ProductAccent;
  category: string;
  headline: string;
  subheadline: string;
  question: string;
  hero: {
    paragraphs: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  problem: ContentBlock;
  questionSection: {
    heading: string;
    intro?: string;
    notQuestion: string;
    questions: string[];
  };
  capabilityModel: {
    heading: string;
    chapters: ContentBlock[];
  };
  architecture: {
    heading: string;
    tiers: string[][];
  };
  deployment?: ContentBlock;
  /** Cross-product relationships, e.g. "SCOPE + SIGNAL" (SIGNAL and RANGE only). */
  productConnections?: { heading: string; body: string; sequence?: string[] }[];
  connections: { heading: string; body: string; href: string; sequence?: string[] }[];
  useCases: { heading: string; body: string }[];
  positioning: {
    notLabel: string;
    identityHeading: string;
    questions: string[];
  };
  productLanguage: {
    primary: string;
    secondary: string;
    supporting: string[];
  };
  finalCta: {
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};
