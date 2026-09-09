import type { ServiceContent } from "@/lib/types";

export const identityDataSecurity: ServiceContent = {
  slug: "identity-data-security",
  number: "04",
  name: "Identity & Data Security",
  category: "Identity & Data",
  menuDescriptor: "Protect identities, privileged access, credentials and critical information.",
  signature: "Sometimes attackers break in. Sometimes they log in.",
  homepage: {
    descriptor:
      "Identity has become one of the most important control planes in modern security. SilverFox helps organisations secure users, privileged accounts, machine identities, credentials and the sensitive information those identities can reach.",
    capabilities: [
      "Identity and Access Management",
      "Privileged Access Management",
      "Identity governance",
      "Active Directory security",
      "Microsoft Entra ID security",
      "MFA and authentication architecture",
      "Machine and workload identities",
      "Service-account security",
      "Secrets management",
      "PKI and certificate security",
      "Identity threat detection",
      "Data discovery and classification",
      "Data Loss Prevention",
      "Encryption and key management",
      "Database security",
      "Sensitive-data protection",
      "Data-access governance",
    ],
  },
  primaryCta: "Review Your Identity Risk",
  secondaryCta: "Assess Privileged Access",
  overviewCta: "Explore Identity & Data Security",
  hero: {
    paragraphs: [
      "Modern organisations rely on identities to connect users, applications, cloud platforms, services and machines.",
      "Every credential carries trust.",
      "Every privilege creates reach.",
      "Every access decision affects what an attacker could do with a compromised identity.",
      "SilverFox helps organisations control that trust and protect the data behind it.",
    ],
  },
  sections: [
    {
      id: "identity-attack-surface",
      heading: "Identity is part of the attack surface.",
      paragraphs: ["An attacker using valid credentials may:"],
      groups: [
        {
          items: [
            "bypass traditional perimeter controls",
            "access cloud platforms",
            "move between systems",
            "escalate privileges",
            "reach sensitive information",
            "create persistence",
            "abuse trusted applications",
            "appear legitimate while doing it",
          ],
        },
      ],
      footnote: [
        "Identity security must address more than user accounts. It must account for people, administrators, services, workloads, machines, secrets, certificates and the data those identities can reach.",
      ],
    },
    {
      id: "iam",
      heading: "Identity & Access Management",
      subheading: "Make access intentional.",
      paragraphs: [
        "SilverFox helps organisations design and improve identity controls across enterprise and cloud environments.",
      ],
      groups: [
        {
          items: [
            "Identity and Access Management strategy",
            "IAM architecture",
            "Identity governance and administration",
            "Joiner, mover and leaver processes",
            "Role design and access models",
            "Access certification",
            "Authentication architecture",
            "Multi-Factor Authentication",
            "Single Sign-On",
            "Federation",
            "Conditional access",
            "Customer and partner identity where required",
          ],
        },
      ],
    },
    {
      id: "pam",
      heading: "Privileged Access Management",
      subheading: "Protect the access that can change everything.",
      paragraphs: [
        "Privileged identities can alter infrastructure, security controls, applications and data.",
        "SilverFox can support:",
      ],
      groups: [
        {
          items: [
            "Privileged Access Management architecture",
            "privileged-account discovery",
            "administrative-tier design",
            "privileged-session controls",
            "credential vaulting",
            "just-in-time access",
            "just-enough administration",
            "break-glass access",
            "privileged-access reviews",
            "service-account governance",
            "monitoring of privileged activity",
          ],
        },
      ],
    },
    {
      id: "ad-cloud-identity",
      heading: "Active Directory & Cloud Identity Security",
      paragraphs: [
        "Identity platforms often become the connective tissue of the enterprise.",
        "SilverFox can assess and strengthen:",
      ],
      groups: [
        {
          items: [
            "Active Directory architecture",
            "Microsoft Entra ID",
            "trust relationships",
            "tiering and administrative boundaries",
            "domain and tenant configuration",
            "authentication protocols",
            "legacy authentication",
            "group and role assignments",
            "conditional-access policy",
            "hybrid identity",
            "identity attack paths",
            "resilience and recovery assumptions",
          ],
        },
      ],
    },
    {
      id: "machine-workload-identity",
      heading: "Machine & Workload Identity",
      subheading: "Not every identity is human.",
      paragraphs: [
        "Applications, APIs, automation, cloud workloads and devices all use identities and credentials.",
      ],
      groups: [
        {
          items: [
            "Non-human identity discovery",
            "Service-account security",
            "Workload identity",
            "API credential security",
            "Secrets management",
            "Certificate management",
            "Public Key Infrastructure",
            "Key lifecycle management",
            "Token security",
            "Credential rotation",
            "Machine-identity governance",
          ],
        },
      ],
    },
    {
      id: "identity-threat-detection",
      heading: "Identity Threat Detection",
      paragraphs: [
        "Identity controls should help detect abuse, not only permit access.",
        "SilverFox can support:",
      ],
      groups: [
        {
          items: [
            "suspicious-authentication detection",
            "privileged-activity monitoring",
            "impossible-travel and anomalous-access analysis",
            "identity-event correlation",
            "credential-abuse detection",
            "directory-change monitoring",
            "cloud-role abuse detection",
            "identity-focused threat hunting",
          ],
        },
      ],
    },
    {
      id: "data-discovery-classification",
      heading: "Data Discovery & Classification",
      subheading: "Protect data according to what it is and who can reach it.",
      paragraphs: [
        "Organisations cannot apply appropriate protection without understanding where sensitive information exists.",
        "SilverFox can help with:",
      ],
      groups: [
        {
          items: [
            "data discovery",
            "data classification",
            "sensitive-data identification",
            "data-flow analysis",
            "ownership and stewardship",
            "data inventory",
            "retention and handling requirements",
            "access mapping",
          ],
        },
      ],
    },
    {
      id: "data-protection",
      heading: "Data Protection",
      groups: [
        {
          items: [
            "Data Loss Prevention",
            "Data Security Posture Management",
            "Database security",
            "Encryption architecture",
            "Key management",
            "Tokenisation",
            "Data masking",
            "Sensitive-data protection",
            "Data-access governance",
            "Cloud data security",
            "Secure data sharing",
            "Monitoring of high-risk data access",
          ],
        },
      ],
    },
  ],
  approach: [
    {
      step: "01",
      title: "Discover",
      body: "Identify identities, privileges, credentials, trust relationships and sensitive data.",
    },
    {
      step: "02",
      title: "Map",
      body: "Understand how access connects users, machines, applications, infrastructure and information.",
    },
    {
      step: "03",
      title: "Reduce",
      body: "Remove unnecessary privilege, stale access, weak credentials and excessive trust.",
    },
    {
      step: "04",
      title: "Protect",
      body: "Apply stronger authentication, privileged controls, secrets management and data protection.",
    },
    {
      step: "05",
      title: "Detect",
      body: "Monitor for identity abuse and suspicious access to sensitive systems and data.",
    },
    {
      step: "06",
      title: "Validate",
      body: "Test whether identity and data controls resist realistic attack paths.",
    },
  ],
  extra: [
    {
      id: "connected-offensive-security",
      heading: "Connected to Offensive Security",
      paragraphs: [
        "Identity design should be tested from the attacker's perspective.",
        "SilverFox offensive-security teams can assess:",
      ],
      groups: [
        {
          items: [
            "credential attack paths",
            "privilege escalation",
            "Active Directory compromise",
            "cloud identity abuse",
            "authentication bypass",
            "session and token weaknesses",
            "access to sensitive data",
          ],
        },
      ],
      footnote: ["This creates a direct loop:"],
      sequence: ["Identity Design", "Attack-Path Testing", "Control Improvement"],
    },
  ],
  relatedTechnology: [
    {
      product: "SCOPE",
      body: "SCOPE can add external context around exposed authentication services, login surfaces and credential exposure.",
    },
    {
      product: "SIGNAL",
      body: "SIGNAL can correlate identity events with endpoint, network, cloud and threat-intelligence context.",
    },
  ],
  relevantFor: [
    "Financial services",
    "Government and defence",
    "Cloud-first organisations",
    "Regulated enterprises",
    "Organisations with complex Active Directory estates",
    "Organisations adopting Zero Trust",
    "Businesses with high-value or sensitive data",
    "Environments with extensive machine and service identities",
  ],
  closing: {
    heading: "Protect the identity. Protect the access. Protect the data.",
    paragraphs: ["Understand who and what holds trust before an attacker uses it."],
    cta: "Review Your Identity Risk",
  },
};
