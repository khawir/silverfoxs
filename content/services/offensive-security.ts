import type { ServiceContent } from "@/lib/types";

export const offensiveSecurity: ServiceContent = {
  slug: "offensive-security",
  number: "02",
  name: "Offensive Security & Security Validation",
  category: "Offensive Security",
  menuDescriptor:
    "Penetration testing, red teaming, adversary simulation and real-world security validation.",
  signature: "Find the path before the attacker does.",
  homepage: {
    descriptor:
      "Go beyond vulnerability scanning. SilverFox tests applications, infrastructure, identities, people and security controls under realistic attack conditions to determine what can actually be exploited and how far an adversary could go.",
    capabilities: [
      "Penetration testing",
      "Web, API and mobile security testing",
      "Network and infrastructure testing",
      "Active Directory assessments",
      "Cloud penetration testing",
      "Red team operations",
      "Purple team exercises",
      "Assumed-breach assessments",
      "Social engineering",
      "Attack-path analysis",
      "Secure code review",
      "Firmware and binary analysis",
      "AI and LLM security testing",
      "Breach and attack simulation",
      "Security-control validation",
    ],
  },
  primaryCta: "Test Your Defences",
  secondaryCta: "Discuss a Red Team Exercise",
  overviewCta: "Explore Offensive Security",
  hero: {
    paragraphs: [
      "Vulnerabilities matter.",
      "Attack paths matter more.",
      "SilverFox offensive-security teams test applications, infrastructure, identities, people and security controls from the perspective of a determined adversary.",
      "The goal is not simply to produce findings.",
      "The goal is to understand what can actually be exploited, what an attacker could reach and whether existing defences would detect or stop them.",
    ],
  },
  sections: [
    {
      id: "control-should-survive",
      heading: "Security should survive contact with an attacker.",
      paragraphs: [
        "A firewall can be correctly configured.",
        "An EDR agent can be deployed.",
        "MFA can be enabled.",
        "A vulnerability scanner can show green.",
        "None of those facts independently prove that the organisation cannot be compromised.",
        "Real security emerges from how controls work together.",
        "That is what we test.",
      ],
    },
    {
      id: "penetration-testing",
      heading: "Penetration Testing",
      subheading: "Go beyond automated vulnerability discovery.",
      paragraphs: [
        "SilverFox performs technical penetration testing across modern enterprise environments.",
      ],
      groups: [
        {
          heading: "Application Security Testing",
          items: [
            "Web application penetration testing",
            "API penetration testing",
            "Mobile application security testing",
            "Authentication testing",
            "Session-management testing",
            "Authorisation testing",
            "Business-logic testing",
            "API abuse testing",
          ],
        },
        {
          heading: "Infrastructure Testing",
          items: [
            "External infrastructure penetration testing",
            "Internal network penetration testing",
            "Network-device security testing",
            "Wireless-security testing",
            "Remote-access security testing",
            "VPN assessment",
          ],
        },
        {
          heading: "Identity Testing",
          items: [
            "Active Directory penetration testing",
            "Microsoft Entra ID testing",
            "Privilege-escalation assessment",
            "Credential attack-path analysis",
            "Authentication bypass testing",
          ],
        },
        {
          heading: "Cloud Testing",
          items: [
            "AWS penetration testing",
            "Azure penetration testing",
            "Google Cloud testing",
            "Cloud configuration exploitation",
            "Identity and entitlement testing",
            "Container and Kubernetes attack simulation",
          ],
        },
        {
          heading: "Specialist Testing",
          items: [
            "IoT security testing",
            "Embedded-device assessment",
            "Firmware assessment",
            "OT/ICS security testing where appropriate",
          ],
        },
      ],
    },
    {
      id: "red-team-operations",
      heading: "Red Team Operations",
      subheading: "Test the organisation, not just the system.",
      paragraphs: [
        "Red teaming examines how multiple weaknesses can be combined to achieve realistic objectives.",
        "Depending on scope, an engagement may incorporate:",
      ],
      groups: [
        {
          items: [
            "external reconnaissance",
            "initial-access simulation",
            "phishing",
            "social engineering",
            "application exploitation",
            "identity compromise",
            "Active Directory attack paths",
            "cloud exploitation",
            "lateral movement",
            "privilege escalation",
            "persistence",
            "command-and-control simulation",
            "objective-based attack scenarios",
          ],
        },
      ],
      questions: ["How many vulnerabilities exist?", "Can an adversary achieve the objective?"],
      footnote: ["A mature red-team exercise does not ask that first question. It asks the second."],
    },
    {
      id: "purple-teaming",
      heading: "Purple Teaming",
      subheading: "Turn offensive insight into better detection.",
      paragraphs: [
        "Purple-team exercises bring offensive and defensive specialists together.",
        "The objective is not competition.",
        "It is improvement.",
        "SilverFox can simulate defined attack techniques while defenders observe:",
      ],
      groups: [
        {
          items: [
            "which activities were detected",
            "which were missed",
            "which alerts lacked context",
            "where telemetry was missing",
            "how escalation occurred",
            "whether containment worked",
          ],
        },
      ],
      footnote: ["The result is direct improvement in security detection and response."],
    },
    {
      id: "assumed-breach",
      heading: "Assumed Breach",
      subheading: "Start from the uncomfortable assumption.",
      paragraphs: ["What happens if the attacker already has:"],
      groups: [
        {
          heading: "The attacker may already have",
          items: [
            "a valid user account",
            "access to a workstation",
            "compromised credentials",
            "access to a cloud tenant",
            "a foothold inside the network",
          ],
        },
        {
          heading: "Assumed-breach testing focuses on",
          items: [
            "escalation",
            "lateral movement",
            "credential access",
            "privilege abuse",
            "data access",
            "persistence",
            "detection",
            "containment",
          ],
        },
      ],
      footnote: [
        "Assumed-breach testing avoids spending the entire engagement proving that initial access is possible.",
      ],
    },
    {
      id: "application-product-security",
      heading: "Application & Product Security",
      subheading: "Find weaknesses before customers or attackers do.",
      paragraphs: ["SilverFox supports security testing throughout the product lifecycle."],
      groups: [
        {
          items: [
            "Secure code review",
            "Source-code security assessment",
            "Architecture review",
            "Binary analysis",
            "Firmware analysis",
            "Reverse engineering",
            "Protocol security analysis",
            "Dependency assessment",
            "Software supply-chain analysis",
            "Product security evaluation",
          ],
        },
      ],
      footnote: [
        "This can support both enterprise software teams and organisations developing security-sensitive products.",
      ],
    },
    {
      id: "threat-modelling",
      heading: "Threat Modelling",
      subheading: "Find the attack paths before a single line of code is exploited.",
      paragraphs: [
        "SilverFox works with engineering and architecture teams to identify likely attack paths before systems are built, changed or deployed.",
      ],
      groups: [
        {
          items: [
            "Architecture and design review",
            "Data-flow and trust-boundary analysis",
            "Abuse-case and misuse-case analysis",
            "Structured threat-modelling methods, including STRIDE and attack trees",
            "Cloud and infrastructure threat modelling",
            "Secure-design recommendations",
          ],
        },
      ],
      footnote: [
        "Threat modelling is most effective early, but SilverFox can apply it to existing systems as part of a wider security review.",
      ],
    },
    {
      id: "ai-security",
      heading: "AI Security",
      subheading: "AI creates new capabilities and new attack paths.",
      paragraphs: [
        "SilverFox evaluates the security of AI-enabled applications and systems without turning AI into a separate consulting business.",
      ],
      groups: [
        {
          heading: "Testing may include",
          items: [
            "LLM application security",
            "Prompt injection",
            "Indirect prompt injection",
            "Sensitive-information disclosure",
            "Insecure tool use",
            "Excessive agent permissions",
            "Retrieval-system abuse",
            "Model manipulation",
            "Unsafe agent workflows",
            "Adversarial machine learning",
            "AI supply-chain risk",
            "AI security architecture",
          ],
        },
      ],
      questions: ["What can the attacker make the system do?"],
      footnote: ["The focus remains the same:"],
    },
    {
      id: "security-validation",
      heading: "Security Validation",
      subheading: "A deployed control is not necessarily an effective control.",
      paragraphs: [
        "SilverFox can test whether defensive controls detect or stop defined attack techniques.",
      ],
      groups: [
        {
          heading: "Validation capabilities",
          items: [
            "Breach and attack simulation",
            "Security-control validation",
            "Detection validation",
            "EDR validation",
            "SIEM use-case validation",
            "Network-control validation",
            "Identity-control validation",
            "Exploit validation",
            "Remediation retesting",
          ],
        },
      ],
    },
  ],
  approach: [
    {
      step: "01",
      title: "Reconnaissance",
      body: "Understand the target and identify potential attack paths.",
    },
    {
      step: "02",
      title: "Exploitation",
      body: "Attempt controlled exploitation within agreed rules of engagement.",
    },
    {
      step: "03",
      title: "Progression",
      body: "Determine how far compromise can realistically extend.",
    },
    {
      step: "04",
      title: "Validation",
      body: "Observe whether security controls detect, prevent or contain the activity.",
    },
    {
      step: "05",
      title: "Evidence",
      body: "Document attack paths, impact and technical evidence.",
    },
    {
      step: "06",
      title: "Improvement",
      body: "Prioritise remediation and validate fixes where required.",
    },
  ],
  extra: [
    {
      id: "findings-explain-attack",
      heading: "Findings That Explain the Attack",
      paragraphs: ["A useful offensive-security report should answer:"],
      questions: [
        "What was exploited?",
        "Why was exploitation possible?",
        "What could the attacker reach?",
        "Which controls failed?",
        "Which controls worked?",
        "What is the practical impact?",
        "What should be fixed first?",
        "How can recurrence be prevented?",
      ],
    },
  ],
  relatedTechnology: [
    {
      product: "SCOPE",
      body: "SCOPE provides continuous external attack-surface intelligence and can help identify exposures that warrant deeper offensive testing.",
    },
    {
      product: "RANGE",
      body: "RANGE provides controlled environments for adversary simulation, purple teaming, detection validation and realistic cyber exercises.",
    },
  ],
  relevantFor: [
    "Internet-facing organisations",
    "Financial services",
    "Government and defence",
    "Technology companies",
    "SaaS platforms",
    "Cloud-native organisations",
    "Critical infrastructure",
    "Organisations with mature security controls that need validation",
  ],
  closing: {
    heading: "Do not ask whether the control exists. Find out whether it holds.",
    paragraphs: ["Challenge the environment before a real attacker does."],
    cta: "Test Your Defences",
  },
};
