import type { ProductContent } from "@/lib/types";

export const signal: ProductContent = {
  id: "SIGNAL",
  slug: "signal",
  accent: "pulse",
  category: "Security Operations & Threat Intelligence Platform",
  headline: "Read the signal.",
  subheadline: "Turn security telemetry into decisions.",
  question: "What is happening?",
  hero: {
    paragraphs: [
      "Modern security teams rarely suffer from a shortage of data.",
      "They suffer from too much of it.",
      "Endpoint alerts. Identity events. Cloud logs. Network telemetry. Application activity. Threat intelligence. Vulnerability information.",
      "SIGNAL is designed to bring those perspectives together so analysts can understand what is happening, why it matters and what should happen next.",
    ],
    primaryCta: "Discuss SIGNAL",
    secondaryCta: "Explore Security Operations",
  },
  problem: {
    id: "the-problem",
    heading: "Security data is fragmented. Attacks are not.",
    paragraphs: ["Attackers move across systems.", "A single incident may involve:"],
    groups: [
      {
        items: [
          "an identity",
          "an endpoint",
          "a SaaS application",
          "cloud infrastructure",
          "remote access",
          "network activity",
          "privileged escalation",
          "data access",
        ],
      },
    ],
    footnote: [
      "Yet the security evidence may sit in six different tools.",
      "SIGNAL is built around connecting that evidence.",
    ],
  },
  questionSection: {
    heading: "What is happening?",
    intro: "Not simply:",
    notQuestion: "Which alerts fired?",
    questions: [
      "Are these events related?",
      "Which entity is affected?",
      "Is this behaviour malicious?",
      "How far has the activity progressed?",
      "Which intelligence changes the interpretation?",
      "What should the analyst do next?",
    ],
  },
  capabilityModel: {
    heading: "Collect. Enrich. Detect. Correlate. Investigate. Respond.",
    chapters: [
      {
        id: "collect",
        heading: "01. Collect",
        subheading: "Bring relevant security telemetry together.",
        paragraphs: ["Potential telemetry sources include:"],
        groups: [
          { heading: "Endpoint", items: ["EDR/XDR", "servers", "workstations", "process activity", "endpoint events"] },
          {
            heading: "Identity",
            items: ["authentication events", "Active Directory", "Microsoft Entra ID", "cloud IAM", "privileged-access systems"],
          },
          {
            heading: "Network",
            items: ["firewalls", "network-security platforms", "DNS", "proxy", "VPN", "network detection"],
          },
          { heading: "Cloud", items: ["AWS", "Azure", "Google Cloud", "SaaS platforms", "cloud security controls"] },
          {
            heading: "Applications",
            items: ["application logs", "APIs", "authentication platforms", "security-sensitive business systems"],
          },
          {
            heading: "Intelligence",
            items: ["indicators", "threat actors", "campaigns", "vulnerabilities", "malicious infrastructure", "internal intelligence"],
          },
        ],
        footnote: ["SIGNAL should integrate rather than require customers to replace every tool they already operate."],
      },
      {
        id: "normalise-enrich",
        heading: "02. Normalise & Enrich",
        subheading: "Turn raw events into security context.",
        paragraphs: ["Events become more useful when enriched with:"],
        groups: [
          {
            items: [
              "asset information",
              "identity context",
              "geolocation",
              "vulnerability data",
              "threat intelligence",
              "MITRE ATT&CK techniques",
              "historical behaviour",
              "related events",
              "known malicious infrastructure",
            ],
          },
        ],
        footnote: ["The objective is to give the analyst enough context to make a decision."],
      },
      {
        id: "detect",
        heading: "03. Detect",
        subheading: "Look for behaviour, not only signatures.",
        paragraphs: ["SIGNAL can support multiple detection approaches."],
        groups: [
          { heading: "Rule-Based Detection", items: ["Known malicious or suspicious patterns."] },
          { heading: "Behavioural Detection", items: ["Activity inconsistent with expected behaviour."] },
          { heading: "Correlation", items: ["Multiple low-confidence events combined into higher-confidence security activity."] },
          { heading: "Intelligence Matching", items: ["Events associated with known indicators, infrastructure or threat activity."] },
          { heading: "Anomaly Detection", items: ["Unusual patterns requiring investigation."] },
          { heading: "Detection Engineering", items: ["Custom detections aligned to the customer's environment and threat model."] },
        ],
      },
      {
        id: "entity-centric-analysis",
        heading: "04. Entity-Centric Analysis",
        subheading: "Follow the identity, device, asset or workload.",
        paragraphs: [
          "Instead of analysing alerts independently, SIGNAL should allow analysts to investigate entities such as:",
        ],
        groups: [{ items: ["users", "privileged accounts", "endpoints", "servers", "IP addresses", "domains", "cloud workloads", "applications"] }],
        footnote: ["The analyst can ask:"],
        questions: [
          "What has this identity done?",
          "Which systems has this endpoint contacted?",
          "Which alerts relate to this cloud workload?",
          "What changed before the incident?",
        ],
      },
      {
        id: "attack-chain-reconstruction",
        heading: "05. Attack-Chain Reconstruction",
        subheading: "Understand progression, not just individual events.",
        sequence: [
          "Credential Use",
          "Suspicious Login",
          "Endpoint Activity",
          "Privilege Escalation",
          "Lateral Movement",
          "Cloud Access",
          "Sensitive Data",
        ],
        footnote: ["SIGNAL should help reconstruct activity into a coherent incident timeline."],
      },
      {
        id: "mitre-attack-context",
        heading: "06. MITRE ATT&CK Context",
        paragraphs: ["Where relevant, observed activity can be mapped to:"],
        groups: [{ items: ["tactics", "techniques", "sub-techniques", "detection coverage", "investigation hypotheses"] }],
        footnote: ["ATT&CK mapping should support analysis rather than become decorative reporting."],
      },
      {
        id: "threat-intelligence",
        heading: "07. Threat Intelligence",
        subheading: "Intelligence should change the decision.",
        paragraphs: ["SIGNAL can bring together:"],
        groups: [
          {
            items: [
              "indicators of compromise",
              "malicious infrastructure",
              "threat-actor profiles",
              "campaign intelligence",
              "tactics, techniques and procedures",
              "malware intelligence",
              "vulnerability intelligence",
              "internal incident intelligence",
            ],
          },
        ],
        footnote: ["The analyst should be able to understand not only:"],
        questions: [
          "This IP is suspicious.",
          "Why is it suspicious, what is it associated with, and does that change our assessment?",
        ],
      },
      {
        id: "threat-hunting",
        heading: "08. Threat Hunting",
        subheading: "Ask questions the rules did not.",
        paragraphs: ["SIGNAL can support hunting across collected telemetry.", "Potential hunting workflows include:"],
        groups: [
          {
            items: [
              "suspicious identity activity",
              "persistence",
              "lateral movement",
              "cloud-role abuse",
              "unusual administrative behaviour",
              "command-and-control patterns",
              "known threat-actor techniques",
              "emerging campaign indicators",
            ],
          },
          { heading: "Hunting can be", items: ["Hypothesis-led", "Intelligence-led", "Incident-led"] },
        ],
      },
      {
        id: "investigation-workspace",
        heading: "09. Investigation Workspace",
        paragraphs: ["An investigation should bring together:"],
        groups: [
          {
            items: [
              "related alerts",
              "entities",
              "timeline",
              "intelligence",
              "analyst notes",
              "evidence",
              "ATT&CK mapping",
              "investigation status",
              "response actions",
            ],
          },
        ],
        footnote: ["This provides a common operational picture."],
      },
      {
        id: "response-orchestration",
        heading: "10. Response & Orchestration",
        subheading: "Context should lead to action.",
        paragraphs: ["Potential workflows may include:"],
        groups: [
          {
            items: [
              "case creation",
              "analyst escalation",
              "IOC blocking",
              "endpoint isolation",
              "identity disablement",
              "credential reset",
              "ticket creation",
              "evidence collection",
              "stakeholder notification",
              "response playbooks",
            ],
          },
        ],
        footnote: ["Automation should support analysts, not obscure important security decisions."],
      },
      {
        id: "ai-assisted-analysis",
        heading: "11. AI-Assisted Analysis",
        paragraphs: ["AI belongs inside SIGNAL as an enabling capability.", "It should not become the product identity."],
        groups: [
          {
            heading: "Potential assistance may include",
            items: [
              "alert summarisation",
              "investigation summaries",
              "event explanation",
              "intelligence summarisation",
              "natural-language querying",
              "timeline summarisation",
              "evidence synthesis",
              "recommended investigation steps",
              "reporting assistance",
            ],
          },
        ],
        questions: [
          "Show suspicious authentication activity associated with this identity over the last seven days.",
          "Summarise the sequence of events associated with this incident.",
        ],
        footnote: ["The value proposition is faster understanding, not that a chatbot was added."],
      },
      {
        id: "detection-coverage",
        heading: "12. Detection Coverage",
        paragraphs: [
          "SIGNAL can help teams understand whether security monitoring addresses relevant attacker techniques.",
          "Potential views include:",
        ],
        groups: [
          { items: ["ATT&CK technique coverage", "telemetry availability", "detection availability", "detection confidence", "control gaps", "validation status"] },
        ],
        footnote: ["This creates a natural connection to RANGE and SilverFox purple-team engagements."],
      },
    ],
  },
  architecture: {
    heading: "Telemetry to response.",
    tiers: [
      ["ENDPOINT", "IDENTITY", "NETWORK", "CLOUD"],
      ["SECURITY TELEMETRY"],
      ["SILVERFOX SIGNAL"],
      ["Detect", "Correlate", "Enrich"],
      ["INVESTIGATION"],
      ["Entity", "Timeline", "Intelligence"],
      ["RESPONSE"],
    ],
  },
  deployment: {
    id: "deployment-philosophy",
    heading: "Deployment Philosophy",
    paragraphs: [
      "Different organisations have different security, sovereignty and integration requirements.",
      "SIGNAL should be engineered with deployment flexibility in mind.",
      "Potential deployment models may include:",
    ],
    groups: [
      {
        items: [
          "SilverFox-managed environments",
          "dedicated customer environments",
          "private-cloud deployment",
          "on-premise deployment where technically supported",
        ],
      },
    ],
    footnote: [
      "Air-gapped operation should only be marketed once the required update, intelligence and integration architecture genuinely supports it.",
    ],
  },
  productConnections: [
    {
      heading: "SCOPE + SIGNAL",
      body: "SCOPE looks outward and asks where are we exposed. SIGNAL looks across security operations and asks what is happening. Exposure information can improve investigation context. Incident information can improve exposure prioritisation.",
    },
    {
      heading: "RANGE + SIGNAL",
      body: "RANGE can generate controlled attacks. SIGNAL can determine whether the activity was detected.",
      sequence: ["Attack", "Detect", "Measure", "Improve"],
    },
  ],
  connections: [
    {
      heading: "Cyber Defence & Managed Security",
      href: "/services/cyber-defence",
      body: "SIGNAL is primarily associated with this practice and supports monitoring, investigation, threat hunting and response workflows.",
    },
    {
      heading: "Incident Response, DFIR & Threat Intelligence",
      href: "/services/incident-response",
      body: "SIGNAL can connect evidence, timelines, entities and intelligence during investigations.",
    },
    {
      heading: "Offensive Security",
      href: "/services/offensive-security",
      body: "Purple-team and validation activity can improve SIGNAL detections and coverage.",
    },
    {
      heading: "Identity & Data Security",
      href: "/services/identity-data-security",
      body: "Identity events can be analysed in context with endpoint, network, application and cloud activity.",
    },
  ],
  useCases: [
    { heading: "SOC Modernisation", body: "Bring fragmented security evidence into a more connected operational workflow." },
    { heading: "Managed Detection & Response", body: "Support SilverFox analysts delivering managed defensive services." },
    { heading: "Threat Hunting", body: "Search across endpoint, identity, network and cloud data." },
    { heading: "Incident Investigation", body: "Build coherent timelines and entity relationships." },
    { heading: "Detection Engineering", body: "Develop and validate behaviour-based security detections." },
    { heading: "Threat Intelligence Operations", body: "Connect intelligence to security events and investigations." },
    { heading: "Identity-Focused Detection", body: "Correlate identity activity with endpoint and cloud behaviour." },
    { heading: "Cloud Security Operations", body: "Bring cloud events into broader security investigations." },
  ],
  positioning: {
    notLabel: "Another alert dashboard or an LLM product.",
    identityHeading: "Connected security operations and threat intelligence.",
    questions: ["What is happening?", "Why does it matter?", "What should happen next?"],
  },
  productLanguage: {
    primary: "Read the signal.",
    secondary: "Turn security telemetry into decisions.",
    supporting: [
      "Less noise. More context. Faster action.",
      "Security data is fragmented. Attacks are not.",
      "Intelligence should change the decision.",
      "Context should lead to action.",
    ],
  },
  finalCta: {
    heading: "What is your security data trying to tell you?",
    body: "Connect telemetry, intelligence and investigation around the decisions that matter.",
    primaryCta: "Discuss SIGNAL",
    secondaryCta: "Explore Security Operations",
  },
};
