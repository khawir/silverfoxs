import type { ProductContent } from "@/lib/types";

export const scope: ProductContent = {
  id: "SCOPE",
  slug: "scope",
  accent: "flare",
  category: "Continuous Exposure & Attack Surface Management",
  headline: "Know the exposure.",
  subheadline: "See your organisation from the outside in.",
  question: "Where are we exposed?",
  hero: {
    paragraphs: [
      "Your attack surface changes every day.",
      "A new cloud service appears. A forgotten subdomain remains online. A staging environment becomes reachable. A certificate expires. A supplier exposes a service. Credentials appear where they should not.",
      "Attackers actively look for these changes.",
      "SCOPE is designed to help security teams do the same.",
      "SilverFox SCOPE provides continuous external visibility across internet-facing assets, exposures and attack paths so teams can understand what attackers can see and decide what requires attention first.",
    ],
    primaryCta: "Map Your Exposure",
    secondaryCta: "Discuss SCOPE",
  },
  problem: {
    id: "the-problem",
    heading: "You cannot protect what you do not know exists.",
    paragraphs: [
      "Asset inventories rarely remain accurate for long.",
      "Cloud adoption, acquisitions, development environments, third-party services and decentralised technology ownership continually expand the external attack surface.",
      "The result is often a gap between what the organisation believes it owns and what an attacker can actually discover.",
      "SCOPE is built around closing that gap.",
    ],
  },
  questionSection: {
    heading: "Where are we exposed?",
    intro: "SCOPE continuously looks outward from the organisation. Not just:",
    notQuestion: "Which vulnerabilities exist?",
    questions: [
      "Which assets are reachable?",
      "Which services are exposed?",
      "Which weaknesses are exploitable?",
      "Which identities or credentials are at risk?",
      "Which exposures combine into meaningful attack paths?",
    ],
  },
  capabilityModel: {
    heading: "Discover. Map. Analyse. Prioritise. Track.",
    chapters: [
      {
        id: "discover",
        heading: "01. Discover",
        subheading: "Build the external asset picture.",
        paragraphs: ["SCOPE identifies internet-facing technology associated with an organisation."],
        groups: [
          {
            heading: "Asset Discovery",
            items: [
              "Domains",
              "Subdomains",
              "IP addresses",
              "Network ranges",
              "Internet-facing hosts",
              "Web applications",
              "APIs",
              "Cloud resources",
              "Remote-access services",
              "Email infrastructure",
              "DNS infrastructure",
              "Certificates",
              "Third-party hosted assets",
            ],
          },
          {
            heading: "Shadow Asset Discovery",
            intro:
              "Identify infrastructure that may not exist in formal inventories. Potential examples include:",
            items: [
              "forgotten applications",
              "development environments",
              "staging systems",
              "old infrastructure",
              "abandoned domains",
              "unmanaged cloud resources",
              "externally hosted services",
            ],
          },
        ],
        footnote: ["The objective is simple:", "Find the asset before the attacker does."],
      },
      {
        id: "map",
        heading: "02. Map",
        subheading: "Understand how assets relate.",
        paragraphs: [
          "Individual assets become more meaningful when they are connected.",
          "SCOPE can model relationships between:",
        ],
        sequence: ["Domains", "Hosts", "Services", "Applications", "Cloud", "Identities", "Vulnerabilities"],
        footnote: ["This creates an attack-surface graph rather than a flat inventory."],
        questions: [
          "This host has a vulnerability.",
          "This internet-facing service provides a possible path to a business-critical environment.",
        ],
      },
      {
        id: "identify-exposure",
        heading: "03. Identify Exposure",
        subheading: "Find weaknesses visible from outside.",
        paragraphs: ["SCOPE can surface areas requiring investigation such as:"],
        groups: [
          {
            items: [
              "exposed administrative interfaces",
              "vulnerable internet-facing software",
              "unsafe network services",
              "insecure configurations",
              "weak transport security",
              "certificate issues",
              "DNS issues",
              "publicly accessible resources",
              "cloud exposure",
              "obsolete software",
              "remote-access exposure",
              "known exploited vulnerabilities",
            ],
          },
        ],
        footnote: ["Not every exposure represents equal risk.", "That is why discovery is only the beginning."],
      },
      {
        id: "credential-identity-exposure",
        heading: "04. Credential & Identity Exposure",
        subheading: "Sometimes the attack surface is an identity.",
        paragraphs: ["Potential credential-related exposure can include:"],
        groups: [
          {
            items: [
              "leaked credentials",
              "exposed authentication services",
              "externally reachable identity infrastructure",
              "credential reuse indicators",
              "exposed login portals",
              "privileged-access surfaces",
            ],
          },
        ],
        footnote: ["Identity-related findings can be correlated with other exposures to improve risk context."],
      },
      {
        id: "vulnerability-intelligence",
        heading: "05. Vulnerability Intelligence",
        subheading: "Vulnerability severity is not the same as exploitability.",
        paragraphs: ["SCOPE can combine technical vulnerability information with additional context including:"],
        groups: [
          {
            items: [
              "asset accessibility",
              "known exploitation",
              "exploit availability",
              "service type",
              "asset importance",
              "external reachability",
              "related exposures",
              "remediation status",
            ],
          },
        ],
        footnote: ["The objective is not to create the longest vulnerability list. It is to help determine:"],
        questions: ["What deserves attention first?"],
      },
      {
        id: "attack-path-analysis",
        heading: "06. Attack-Path Analysis",
        subheading: "A vulnerability is a finding. An attack path is a risk.",
        paragraphs: ["SCOPE is intended to connect individual exposures into potentially meaningful paths."],
        sequence: [
          "Internet",
          "Exposed Service",
          "Vulnerability",
          "Application Access",
          "Credential / Identity",
          "Privileged System",
        ],
        footnote: ["This helps security teams move beyond isolated technical findings."],
      },
      {
        id: "risk-prioritisation",
        heading: "07. Risk Prioritisation",
        subheading: "Prioritise what changes the outcome.",
        paragraphs: ["Risk prioritisation may incorporate:"],
        groups: [
          {
            items: [
              "external accessibility",
              "vulnerability severity",
              "exploit activity",
              "asset criticality",
              "exposure duration",
              "identity impact",
              "attack-path position",
              "threat intelligence",
              "business context",
            ],
          },
        ],
        footnote: ["The result should help teams answer:"],
        questions: ["What should we fix first?"],
      },
      {
        id: "continuous-monitoring",
        heading: "08. Continuous Monitoring",
        subheading: "Attack surfaces move.",
        paragraphs: [
          "SCOPE is designed around continuous visibility rather than occasional point-in-time discovery.",
          "Potential changes include:",
        ],
        groups: [
          {
            items: [
              "new assets",
              "new services",
              "newly exposed ports",
              "certificate changes",
              "DNS changes",
              "emerging vulnerabilities",
              "newly exploited vulnerabilities",
              "credential exposure",
              "asset disappearance",
              "remediation",
            ],
          },
        ],
        footnote: ["Security teams can focus on what changed, not repeatedly rebuild the entire picture manually."],
      },
      {
        id: "remediation-tracking",
        heading: "09. Remediation Tracking",
        paragraphs: ["Exposure management should lead to action.", "SCOPE can support workflows around:"],
        groups: [
          {
            items: [
              "finding ownership",
              "prioritisation",
              "remediation status",
              "verification",
              "retesting",
              "risk acceptance",
              "exception tracking",
            ],
          },
        ],
        sequence: ["Discover", "Prioritise", "Remediate", "Verify"],
        footnote: ["The remediation lifecycle."],
      },
    ],
  },
  architecture: {
    heading: "Outside-in visibility.",
    tiers: [
      ["INTERNET"],
      ["Domains", "Cloud", "Services", "APIs"],
      ["SILVERFOX SCOPE"],
      ["Discovery", "Intelligence", "Exposure"],
      ["ATTACK GRAPH"],
      ["Assets", "Vulnerabilities", "Identity"],
      ["RISK PRIORITISATION"],
      ["REMEDIATION"],
    ],
  },
  deployment: {
    id: "deployment-integration",
    heading: "Deployment & Integration",
    paragraphs: [
      "SCOPE should integrate into existing security operations rather than become another isolated dashboard.",
      "Potential integration areas include:",
    ],
    groups: [
      {
        items: [
          "SIEM",
          "ticketing",
          "vulnerability-management systems",
          "threat-intelligence platforms",
          "asset-management systems",
          "security orchestration tools",
          "email and notification workflows",
          "SilverFox SIGNAL",
        ],
      },
      {
        heading: "Deployment options can evolve according to operational requirements",
        items: ["SilverFox-managed deployment", "private deployment", "dedicated customer environments"],
      },
    ],
    footnote: ["Avoid promising deployment models that the product cannot yet support operationally."],
  },
  connections: [
    {
      heading: "Offensive Security",
      href: "/services/offensive-security",
      body: "SCOPE identifies potential attack surfaces. SilverFox offensive-security teams determine whether they are exploitable.",
      sequence: ["SCOPE", "Penetration Testing", "Validation"],
    },
    {
      heading: "Cyber Strategy & Risk",
      href: "/services/strategy-risk-assurance",
      body: "SCOPE can provide continuous technical evidence supporting broader risk assessments.",
    },
    {
      heading: "Cloud, Application & Infrastructure Security",
      href: "/services/cloud-application-infrastructure",
      body: "Exposure findings can feed directly into architectural remediation.",
    },
    {
      heading: "Cyber Defence",
      href: "/services/cyber-defence",
      body: "External exposure becomes additional context for internal detection and monitoring.",
    },
  ],
  useCases: [
    {
      heading: "Continuous External Attack-Surface Monitoring",
      body: "Maintain visibility as infrastructure changes.",
    },
    { heading: "Penetration-Test Preparation", body: "Identify areas requiring deeper manual testing." },
    { heading: "Post-Pentest Monitoring", body: "Track whether previously identified exposures return." },
    { heading: "Cloud Exposure Monitoring", body: "Identify unexpected internet-facing cloud resources." },
    {
      heading: "Mergers & Acquisitions",
      body: "Build initial external visibility of an acquired organisation or asset portfolio.",
    },
    {
      heading: "Third-Party Exposure",
      body: "Monitor externally observable risk associated with key suppliers or partners.",
    },
    {
      heading: "Executive Exposure Reporting",
      body: "Translate technical findings into a clearer view of external risk.",
    },
    {
      heading: "Offensive Reconnaissance Support",
      body: "Provide structured reconnaissance for authorised SilverFox testing engagements.",
    },
  ],
  positioning: {
    notLabel: "Yet another vulnerability scanner.",
    identityHeading: "Continuous external exposure intelligence.",
    questions: ["What can attackers see?", "What changed?", "What matters most?"],
  },
  productLanguage: {
    primary: "Know the exposure.",
    secondary: "See your organisation from the outside in.",
    supporting: [
      "Find the asset before the attacker does.",
      "A vulnerability is a finding. An attack path is a risk.",
      "Exposure changes. Visibility should keep up.",
      "Fix what changes the outcome.",
    ],
  },
  finalCta: {
    heading: "What can attackers see right now?",
    body: "Understand the external attack surface before someone else maps it for you.",
    primaryCta: "Map Your Exposure",
    secondaryCta: "Discuss SCOPE",
  },
};
