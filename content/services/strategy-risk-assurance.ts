import type { ServiceContent } from "@/lib/types";

export const strategyRiskAssurance: ServiceContent = {
  slug: "strategy-risk-assurance",
  number: "01",
  name: "Cyber Strategy, Risk & Assurance",
  category: "Strategy & Assurance",
  menuDescriptor:
    "Assess risk, strengthen governance and establish confidence in security controls.",
  signature: "Turn cyber risk into decisions.",
  homepage: {
    descriptor:
      "Build security programmes around real risk, effective governance and controls that can withstand scrutiny.",
    capabilities: [
      "Cybersecurity strategy and roadmaps",
      "Cyber risk assessments",
      "Security maturity assessments",
      "Virtual CISO and advisory",
      "Governance, policies and frameworks",
      "ISO 27001, NIST, CIS and PCI DSS readiness",
      "Third-party and supply-chain risk",
      "Security audits and assurance",
      "Architecture assessments",
      "Ransomware and incident-response readiness",
    ],
  },
  primaryCta: "Assess Your Security Posture",
  secondaryCta: "Talk to a Security Specialist",
  overviewCta: "Explore Cyber Strategy, Risk & Assurance",
  hero: {
    paragraphs: [
      "Security programmes often become collections of policies, technologies and compliance activities without a clear connection to actual business risk.",
      "SilverFox helps organisations understand where they stand, determine where attention is required and build security programmes that can withstand technical, regulatory and executive scrutiny.",
      "Our work connects governance with technology, controls with risk, and assurance with evidence.",
    ],
  },
  sections: [
    {
      id: "context",
      heading: "Security without context becomes compliance.",
      paragraphs: [
        "Passing an audit does not necessarily mean an organisation is secure.",
        "Likewise, a long vulnerability register does not automatically tell leadership which risks matter most.",
        "Effective cybersecurity requires a clear understanding of:",
      ],
      groups: [
        {
          items: [
            "what needs protection",
            "which threats matter",
            "where weaknesses exist",
            "which controls reduce meaningful risk",
            "where investment should be prioritised",
            "how security performance can be demonstrated",
          ],
        },
      ],
      footnote: ["SilverFox brings these questions together."],
    },
    {
      id: "strategy-advisory",
      heading: "Cyber Strategy & Advisory",
      subheading: "Build security around what the organisation actually needs.",
      paragraphs: [
        "We help organisations establish practical cybersecurity direction based on business priorities, technology environments and threat exposure.",
      ],
      groups: [
        {
          items: [
            "Cybersecurity strategy development",
            "Multi-year security roadmaps",
            "Cyber transformation programmes",
            "Security operating models",
            "Virtual CISO advisory",
            "Security programme design",
            "Security capability assessments",
            "Security architecture assessments",
            "Cyber investment prioritisation",
            "Board and executive cyber advisory",
          ],
        },
      ],
      footnote: [
        "The objective is not to produce another strategy document.",
        "It is to establish a security programme that can be executed.",
      ],
    },
    {
      id: "cyber-risk",
      heading: "Cyber Risk",
      subheading: "Understand risk before prioritising controls.",
      paragraphs: [
        "SilverFox assesses cybersecurity risk across organisations, systems, suppliers and technology environments.",
      ],
      groups: [
        {
          items: [
            "Enterprise cyber risk assessments",
            "Technology risk assessments",
            "Application risk assessments",
            "Cloud risk assessments",
            "Third-party risk assessments",
            "Supply-chain cyber risk",
            "Ransomware readiness assessments",
            "Incident-response readiness assessments",
            "Business-impact analysis",
            "Critical-asset identification",
            "Risk treatment planning",
          ],
        },
      ],
      footnote: ["We distinguish between vulnerabilities that exist and risks that matter."],
    },
    {
      id: "governance-risk-compliance",
      heading: "Governance, Risk & Compliance",
      subheading: "Compliance is a baseline. Effective security goes further.",
      paragraphs: [
        "SilverFox helps organisations establish governance structures and prepare for recognised cybersecurity frameworks and regulatory obligations.",
      ],
      groups: [
        {
          heading: "Frameworks and standards may include",
          items: [
            "ISO/IEC 27001",
            "NIST Cybersecurity Framework",
            "NIST SP 800-series",
            "CIS Critical Security Controls",
            "PCI DSS",
            "SOC 2",
            "relevant privacy and data-security requirements",
            "sector-specific requirements where applicable",
          ],
        },
        {
          heading: "Services include",
          items: [
            "Gap assessments",
            "Security policy development",
            "Security standards and procedures",
            "Control framework design",
            "Compliance readiness",
            "Evidence preparation",
            "Remediation planning",
            "Security governance design",
          ],
        },
      ],
    },
    {
      id: "security-audit-assurance",
      heading: "Security Audit & Assurance",
      subheading: "A control should earn confidence through evidence.",
      paragraphs: [
        "SilverFox evaluates whether security controls exist, whether they are appropriately designed and whether they are operating as intended.",
      ],
      groups: [
        {
          items: [
            "Cybersecurity audits",
            "IT security audits",
            "Technical control assessments",
            "Configuration reviews",
            "Network security reviews",
            "Cloud security reviews",
            "Architecture assurance",
            "Security baseline assessments",
            "Product security evaluations",
            "Certification-readiness assessments",
          ],
        },
      ],
      sequence: ["Exists", "Designed appropriately", "Operating as intended"],
      footnote: [
        "Where appropriate, assurance findings can be validated through SilverFox offensive-security testing.",
      ],
    },
  ],
  approach: [
    {
      step: "01",
      title: "Understand",
      body: "Establish business context, critical assets, technology dependencies and regulatory requirements.",
    },
    {
      step: "02",
      title: "Assess",
      body: "Evaluate risk, controls, maturity and current security capability.",
    },
    {
      step: "03",
      title: "Prioritise",
      body: "Separate material security issues from background noise.",
    },
    {
      step: "04",
      title: "Design",
      body: "Define practical controls, governance and improvement programmes.",
    },
    {
      step: "05",
      title: "Validate",
      body: "Determine whether implementation provides the intended security outcome.",
    },
  ],
  extra: [
    {
      id: "beyond-the-report",
      heading: "Beyond the Report",
      paragraphs: [
        "An assessment should not end with a spreadsheet of findings.",
        "SilverFox can continue into:",
      ],
      groups: [
        {
          items: [
            "remediation planning",
            "architecture improvement",
            "penetration testing",
            "identity reviews",
            "cloud-security engineering",
            "security-control validation",
            "SOC design",
            "incident-response readiness",
          ],
        },
      ],
      footnote: ["This creates a direct path from:"],
      sequence: ["Risk", "Decision", "Engineering", "Validation"],
    },
  ],
  relatedTechnology: [
    {
      product: "SCOPE",
      body: "External exposure and attack-surface intelligence can provide additional evidence for cyber-risk assessments and continuous assurance.",
    },
    {
      product: "RANGE",
      body: "Cyber ranges can be used to validate security assumptions, incident-response plans and organisational readiness.",
    },
  ],
  relevantFor: [
    "Government and defence",
    "Financial services",
    "Critical infrastructure",
    "Telecommunications",
    "Technology companies",
    "Regulated organisations",
    "Enterprises undergoing digital transformation",
    "Organisations preparing for certification or major security investment",
  ],
  closing: {
    heading: "Know where you stand before deciding where to go.",
    paragraphs: [
      "Cybersecurity decisions become easier when risk is visible, priorities are defensible and controls can be demonstrated.",
    ],
    cta: "Assess Your Security Posture",
  },
};
