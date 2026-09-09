import type { ApproachStep, ContentBlock } from "@/lib/types";

export const engineeringContent = {
  hero: {
    heading: "When the right solution does not exist, build it.",
    paragraphs: [
      "Cybersecurity increasingly depends on software, automation, data and specialised engineering.",
      "Not every requirement can be solved by configuring an existing security platform.",
      "SilverFox Engineering & Applied R&D supports projects where organisations need a capability designed around their environment, constraints or operational requirements.",
      "This is not a separate software-development business.",
      "It is an extension of our cybersecurity capability.",
    ],
    primaryCta: "Discuss a Technical Challenge",
  },
  intro: {
    id: "beyond-configuration",
    heading: "Security engineering beyond configuration.",
    paragraphs: ["Modern security problems often span:"],
    groups: [
      {
        items: [
          "applications",
          "cloud",
          "identity",
          "data",
          "automation",
          "sensors",
          "networks",
          "edge devices",
          "security telemetry",
          "specialised operational environments",
        ],
      },
    ],
    footnote: [
      "Solving them may require more than advisory or integration.",
      "Sometimes the right answer needs to be engineered.",
    ],
  } satisfies ContentBlock,
  sections: [
    {
      id: "secure-software-engineering",
      heading: "Secure Software Engineering",
      subheading: "Build security into the system itself.",
      paragraphs: [
        "SilverFox can design and develop specialised software where security, control and deployment requirements demand more than an off-the-shelf solution.",
      ],
      groups: [
        {
          heading: "Capabilities",
          items: [
            "Secure bespoke applications",
            "Cybersecurity platforms",
            "Security dashboards",
            "Security automation",
            "Investigation tools",
            "Intelligence platforms",
            "Data platforms",
            "Command and control systems",
            "Workflow systems",
            "Internal security tools",
            "API and systems integration",
            "On-premise applications",
            "Restricted-network applications",
            "Edge applications",
          ],
        },
      ],
      footnote: ["Security considerations can be incorporated throughout:"],
      sequence: ["Architecture", "Development", "Testing", "Deployment", "Validation"],
    },
    {
      id: "indigenous-technology-development",
      heading: "Indigenous Technology Development",
      subheading: "Control the capability you depend on.",
      paragraphs: [
        "Some organisations require technology that can be operated, maintained and extended without dependence on external SaaS platforms or foreign-controlled infrastructure.",
        "SilverFox can support the development of indigenous or locally controlled technology for requirements such as:",
      ],
      groups: [
        {
          items: [
            "cybersecurity operations",
            "sensitive environments",
            "government systems",
            "critical infrastructure",
            "research environments",
            "specialised enterprise workflows",
            "locally hosted intelligence systems",
          ],
        },
      ],
      footnote: [
        "The objective is not to rebuild technology merely because it exists elsewhere.",
        "Indigenous development should be used where control, sovereignty, integration or specialised requirements justify it.",
      ],
    },
    {
      id: "cybersecurity-product-engineering",
      heading: "Cybersecurity Product Engineering",
      paragraphs: ["SilverFox engineering can support the development of security capabilities including:"],
      groups: [
        {
          items: [
            "exposure-management systems",
            "detection tooling",
            "security orchestration",
            "security-data platforms",
            "attack simulation",
            "security testing",
            "investigation tooling",
            "threat-intelligence systems",
            "asset discovery",
            "security visualisation",
            "specialised monitoring",
          ],
        },
      ],
      footnote: ["Our own SCOPE, SIGNAL and RANGE platforms emerge from the same engineering philosophy."],
    },
    {
      id: "security-automation",
      heading: "Security Automation",
      subheading: "Automate repetition, not judgement.",
      paragraphs: ["Security teams lose time performing work that machines can do consistently.", "Automation can support:"],
      groups: [
        {
          items: [
            "alert enrichment",
            "IOC processing",
            "evidence collection",
            "ticket routing",
            "case creation",
            "vulnerability workflows",
            "reporting",
            "asset processing",
            "security testing",
            "configuration validation",
            "response workflows",
            "integration between security systems",
          ],
        },
      ],
      footnote: ["Automation should increase analyst capacity without obscuring critical decisions."],
    },
    {
      id: "ai-machine-learning",
      heading: "AI & Machine Learning",
      subheading: "Applied where it improves the security outcome.",
      paragraphs: ["SilverFox can apply machine learning and AI where the problem justifies it.", "Potential applications include:"],
      groups: [
        {
          items: [
            "anomaly detection",
            "behavioural analytics",
            "malware classification",
            "threat prioritisation",
            "security-event analysis",
            "intelligent automation",
            "pattern discovery",
            "decision support",
            "document and intelligence analysis",
            "security investigation assistance",
          ],
        },
      ],
      footnote: [
        "Where sensitive information or operational requirements demand greater control, private or locally deployed AI architectures may be considered.",
        "AI remains a tool.",
        "The security problem remains the focus.",
      ],
    },
    {
      id: "computer-vision",
      heading: "Computer Vision",
      subheading: "Visual intelligence where cyber meets the physical environment.",
      paragraphs: [
        "Computer vision can support specialised security and operational use cases, particularly in critical, industrial and edge environments.",
        "Potential applications include:",
      ],
      groups: [
        {
          items: [
            "perimeter monitoring",
            "object detection",
            "tracking",
            "restricted-zone detection",
            "vehicle analytics",
            "UAV video analysis",
            "infrastructure inspection",
            "industrial safety",
            "thermal imaging analysis",
            "multispectral processing",
          ],
        },
      ],
      footnote: ["Computer vision is treated as an engineering capability rather than a separate SilverFox product line."],
    },
    {
      id: "edge-embedded-systems",
      heading: "Edge & Embedded Systems",
      paragraphs: ["Some environments require processing close to the sensor or device.", "Potential capabilities include:"],
      groups: [
        {
          items: [
            "edge inference",
            "embedded software",
            "secure device integration",
            "sensor processing",
            "offline analytics",
            "real-time processing",
            "constrained-network operation",
            "local data processing",
            "hardware/software integration",
          ],
        },
      ],
      footnote: [
        "These capabilities can support industrial, critical-infrastructure and specialised security requirements.",
      ],
    },
    {
      id: "applied-security-research",
      heading: "Applied Security Research",
      subheading: "Investigate before engineering.",
      paragraphs: [
        "Where the technical problem is not yet well understood, SilverFox can use applied research to determine what is possible.",
        "Areas may include:",
      ],
      groups: [
        {
          items: [
            "vulnerability research",
            "security architecture research",
            "attack techniques",
            "security analytics",
            "AI security",
            "malware analysis",
            "detection methods",
            "cyber simulation",
            "computer vision",
            "secure systems",
            "threat modelling",
            "novel security tooling",
          ],
        },
        {
          heading: "Research should have a destination, such as",
          items: [
            "a prototype",
            "a validated approach",
            "an algorithm",
            "a product capability",
            "a technical recommendation",
            "a deployable system",
          ],
        },
      ],
    },
    {
      id: "rapid-prototyping",
      heading: "Rapid Prototyping",
      subheading: "Move from idea to evidence.",
      paragraphs: ["Before committing to full-scale development, SilverFox can build prototypes to test:"],
      groups: [
        {
          items: [
            "technical feasibility",
            "architecture",
            "algorithms",
            "integrations",
            "workflow",
            "performance",
            "deployment constraints",
            "security assumptions",
          ],
        },
      ],
      footnote: ["The objective is to answer the important technical questions early."],
    },
    {
      id: "technology-evaluation",
      heading: "Technology Evaluation",
      paragraphs: [
        "Sometimes building is not the answer.",
        "SilverFox can also evaluate whether existing technologies satisfy a requirement.",
        "Assessment may consider:",
      ],
      groups: [
        {
          items: [
            "capability",
            "security",
            "integration",
            "deployment",
            "data ownership",
            "scalability",
            "operational complexity",
            "vendor dependency",
            "suitability for sensitive environments",
          ],
        },
      ],
      footnote: ["The decision should be:"],
      sequence: ["Buy where appropriate", "Integrate where practical", "Build where necessary"],
    },
  ] satisfies ContentBlock[],
  connections: [
    { heading: "Offensive Security", href: "/services/offensive-security", body: "Custom testing, attack simulation and security research." },
    {
      heading: "Cloud & Infrastructure",
      href: "/services/cloud-application-infrastructure",
      body: "Secure platforms, integrations and automation.",
    },
    { heading: "Identity & Data", href: "/services/identity-data-security", body: "Identity tooling, data workflows and security controls." },
    { heading: "Cyber Defence", href: "/services/cyber-defence", body: "Detection tooling, telemetry platforms and investigation automation." },
    {
      heading: "Incident Response",
      href: "/services/incident-response",
      body: "Forensic utilities, malware-analysis tooling and investigation workflows.",
    },
    { heading: "SilverFox Technologies", href: "/technologies", body: "SCOPE, SIGNAL and RANGE product engineering." },
  ],
  approach: [
    { step: "01", title: "Define the problem", body: "Understand the operational requirement before selecting the technology." },
    { step: "02", title: "Investigate", body: "Determine constraints, existing options and technical uncertainty." },
    { step: "03", title: "Architect", body: "Design the system, security boundaries and deployment model." },
    { step: "04", title: "Prototype", body: "Validate important assumptions early." },
    { step: "05", title: "Engineer", body: "Develop the capability using appropriate technologies." },
    { step: "06", title: "Test", body: "Challenge functionality, security and operational behaviour." },
    { step: "07", title: "Deploy", body: "Integrate with the target environment." },
    { step: "08", title: "Improve", body: "Use operational evidence to refine the system." },
  ] satisfies ApproachStep[],
  closing: {
    heading: "Research when necessary. Engineer when possible. Build when it matters.",
    body: "Bring SilverFox a difficult technical problem.",
    cta: "Discuss a Technical Challenge",
  },
};
