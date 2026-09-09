import { placeholders, siteConfig } from "../content/site";

/**
 * Organisation structured data, built only from verified site configuration
 * and the documented placeholders in content/site.ts - never invented
 * business details. This object must stay fully static (no dates, no
 * request-specific values) because next.config.ts hashes its serialised
 * form to allow it under a strict, non-'unsafe-inline' script-src CSP.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `SilverFox ${placeholders.legalEntityName}`,
  url: siteConfig.url,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: placeholders.registeredAddress,
    addressCountry: placeholders.jurisdiction,
  },
  email: placeholders.generalContactEmail,
};

export const organizationJsonLdString = JSON.stringify(organizationJsonLd);
