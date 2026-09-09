export type EnquiryTopic = {
  slug: string;
  label: string;
  description: string;
};

/**
 * The recommended form options from
 * docs/SILVERFOX_WEBSITE_CANONICAL.md section 17. Every service and product
 * CTA on the site links to `/contact?topic=<slug>` using these slugs so the
 * right option arrives preselected.
 */
export const enquiryTopics: EnquiryTopic[] = [
  {
    slug: "strategy-risk-assurance",
    label: "Cyber Strategy & Assurance",
    description: "Risk assessments, governance, audits, compliance and security programmes.",
  },
  {
    slug: "offensive-security",
    label: "Penetration Testing & Offensive Security",
    description: "Pentesting, red teaming, purple teaming and security validation.",
  },
  {
    slug: "cloud-application-infrastructure",
    label: "Cloud, Application & Infrastructure Security",
    description: "Cloud, application, network, architecture and DevSecOps security.",
  },
  {
    slug: "identity-data-security",
    label: "Identity & Data Security",
    description: "IAM, PAM, Active Directory, identity and sensitive-data protection.",
  },
  {
    slug: "cyber-defence",
    label: "Cyber Defence & Managed Security",
    description: "SOC, MDR, SIEM, detection engineering and threat hunting.",
  },
  {
    slug: "incident-response",
    label: "Incident Response",
    description: "Suspected compromise, ransomware, breach investigation and DFIR.",
  },
  {
    slug: "scope",
    label: "SCOPE",
    description: "Attack-surface and exposure-management enquiries.",
  },
  {
    slug: "signal",
    label: "SIGNAL",
    description: "Security operations and threat-intelligence platform enquiries.",
  },
  {
    slug: "range",
    label: "RANGE",
    description: "Cyber range, digital twin and cyber-exercise enquiries.",
  },
  {
    slug: "engineering",
    label: "Engineering & Applied R&D",
    description: "Secure software, indigenous technology, automation and specialised engineering.",
  },
  {
    slug: "other",
    label: "Other",
    description: "For requirements that do not fit neatly into the above.",
  },
];

export const contactContent = {
  hero: {
    heading: "Start a conversation.",
    paragraphs: [
      "Cybersecurity requirements rarely fit perfectly into a dropdown.",
      "Tell us what you are trying to protect, test, investigate or build.",
      "A SilverFox specialist can help determine the right starting point.",
    ],
  },
  form: {
    heading: "What can we help with?",
    fields: {
      name: "Name",
      organisation: "Organisation",
      email: "Work Email",
      phone: "Phone",
      topic: "What can we help with?",
      message: "Tell us briefly about your requirement",
    },
    privacyLabel:
      "I have read the Privacy Policy and understand how SilverFox will use the information I submit.",
    submitLabel: "Start the Conversation",
    microcopy:
      "Please do not submit passwords, private keys, sensitive credentials or unnecessary confidential information through this form.",
  },
  productEnquiries: [
    { product: "SCOPE", signature: "Know the exposure.", cta: "Discuss SCOPE" },
    { product: "SIGNAL", signature: "Read the signal.", cta: "Discuss SIGNAL" },
    { product: "RANGE", signature: "Prove the defence.", cta: "Discuss RANGE" },
  ],
  closing: {
    heading: "Not sure where to start?",
    body: "That is fine. Describe the problem rather than trying to select the service.",
    cta: "Talk to SilverFox",
  },
};

export function contactHref(topic?: string) {
  return topic ? `/contact?topic=${topic}` : "/contact";
}
