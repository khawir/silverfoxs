import type { ServiceContent } from "@/lib/types";

export const cloudApplicationInfrastructure: ServiceContent = {
  slug: "cloud-application-infrastructure",
  number: "03",
  name: "Cloud, Application & Infrastructure Security",
  category: "Cloud & Infrastructure",
  menuDescriptor:
    "Secure applications, cloud platforms, networks, endpoints and modern development environments.",
  signature: "Secure the stack, not just the perimeter.",
  homepage: {
    descriptor:
      "Modern systems are built across cloud platforms, APIs, containers, applications, endpoints and interconnected infrastructure. SilverFox helps organisations design, build and harden environments where security is part of the architecture rather than an afterthought.",
    capabilities: [
      "AWS, Azure and Google Cloud security",
      "Cloud architecture and posture assessments",
      "Kubernetes and container security",
      "Application and API security",
      "Secure SDLC",
      "DevSecOps",
      "CI/CD security",
      "Software supply-chain security",
      "Infrastructure-as-code security",
      "Network security architecture",
      "Segmentation and microsegmentation",
      "Zero Trust architecture",
      "Endpoint security",
      "EDR/XDR engineering",
      "Infrastructure hardening",
      "Security automation",
    ],
  },
  primaryCta: "Strengthen Your Architecture",
  secondaryCta: "Discuss a Security Engineering Requirement",
  overviewCta: "Explore Cloud, Application & Infrastructure Security",
  hero: {
    paragraphs: [
      "Modern organisations no longer have a single perimeter.",
      "Applications communicate through APIs.",
      "Users connect from anywhere.",
      "Workloads move across cloud platforms.",
      "Infrastructure is created through code.",
      "Containers appear and disappear.",
      "Security has to follow the architecture.",
      "SilverFox helps organisations design, review and strengthen the technology foundations their operations depend on.",
    ],
  },
  sections: [
    {
      id: "architecture-blast-radius",
      heading: "Security architecture determines how far an attacker can go.",
      paragraphs: [
        "A vulnerability rarely becomes a major incident because of one technical mistake.",
        "Impact grows when:",
      ],
      groups: [
        {
          items: [
            "networks are flat",
            "identities are overprivileged",
            "cloud permissions are excessive",
            "secrets are exposed",
            "APIs trust too much",
            "applications lack isolation",
            "infrastructure is poorly hardened",
            "security telemetry is incomplete",
          ],
        },
      ],
      footnote: ["Good engineering limits the blast radius."],
    },
    {
      id: "cloud-security",
      heading: "Cloud Security",
      subheading: "Build cloud security into the operating model.",
      paragraphs: ["SilverFox supports security across:"],
      groups: [
        {
          heading: "Environments",
          items: [
            "Amazon Web Services",
            "Microsoft Azure",
            "Google Cloud Platform",
            "hybrid environments",
            "multi-cloud architectures",
          ],
        },
        {
          heading: "Capabilities",
          items: [
            "Cloud-security architecture",
            "Cloud configuration assessments",
            "Cloud-security posture reviews",
            "Workload-security architecture",
            "Cloud network security",
            "Cloud logging and telemetry",
            "Cloud identity integration",
            "Cloud entitlement reviews",
            "Serverless-security assessments",
            "Storage-security reviews",
            "Cloud security hardening",
            "Cloud detection engineering",
          ],
        },
      ],
    },
    {
      id: "containers-kubernetes",
      heading: "Containers & Kubernetes",
      paragraphs: [
        "Containerised systems create different assumptions around workload lifecycle, identity and orchestration.",
        "SilverFox can assess and improve:",
      ],
      groups: [
        {
          items: [
            "Kubernetes architecture",
            "cluster configuration",
            "workload isolation",
            "container images",
            "registry security",
            "secrets management",
            "admission controls",
            "runtime security",
            "service-to-service communication",
            "container CI/CD security",
          ],
        },
      ],
    },
    {
      id: "application-security",
      heading: "Application Security",
      subheading: "Build security into how software is designed.",
      paragraphs: ["SilverFox supports application security from architecture through deployment."],
      groups: [
        {
          items: [
            "Secure architecture review",
            "Threat modelling",
            "Application-security assessments",
            "API security",
            "Secure coding guidance",
            "Secure SDLC",
            "Security requirements",
            "Code-review support",
            "Dependency security",
            "Software composition analysis",
            "Secrets detection",
            "Release-security controls",
          ],
        },
      ],
    },
    {
      id: "devsecops",
      heading: "DevSecOps",
      subheading: "Security should move at engineering speed.",
      paragraphs: [
        "DevSecOps is not simply adding scanners to CI/CD.",
        "It means integrating security into how software is built, tested, released and operated.",
      ],
      groups: [
        {
          items: [
            "DevSecOps architecture",
            "CI/CD security",
            "Pipeline hardening",
            "Source-control security",
            "Dependency controls",
            "Artifact-security controls",
            "Infrastructure-as-code security",
            "Container pipeline security",
            "Automated security testing",
            "Security gates",
            "Developer security workflows",
          ],
        },
      ],
    },
    {
      id: "network-infrastructure-security",
      heading: "Network & Infrastructure Security",
      subheading: "Reduce unnecessary trust.",
      paragraphs: ["SilverFox designs and reviews security controls across enterprise infrastructure."],
      groups: [
        {
          items: [
            "Enterprise security architecture",
            "Network-security architecture",
            "Segmentation",
            "Microsegmentation",
            "Firewall architecture",
            "Secure remote access",
            "Zero Trust architecture",
            "Network access control",
            "SASE and SSE architecture",
            "DNS security",
            "Email security",
            "Secure administrative access",
            "Infrastructure configuration reviews",
            "System hardening",
          ],
        },
      ],
    },
    {
      id: "endpoint-security",
      heading: "Endpoint Security",
      paragraphs: [
        "Endpoints remain one of the most important points of interaction between users and enterprise systems.",
      ],
      groups: [
        {
          items: [
            "Endpoint-security architecture",
            "EDR/XDR engineering",
            "Endpoint hardening",
            "Workstation-security baselines",
            "Server hardening",
            "Device-control architecture",
            "Endpoint telemetry design",
            "Administrative-access controls",
            "Security configuration management",
          ],
        },
      ],
    },
    {
      id: "architecture-reviews",
      heading: "Security Architecture Reviews",
      subheading: "See how the pieces interact.",
      paragraphs: [
        "SilverFox can assess complete architectures rather than isolated controls.",
        "Reviews may cover:",
      ],
      groups: [
        {
          items: [
            "trust boundaries",
            "attack paths",
            "identity flows",
            "data flows",
            "ingress and egress",
            "administrative pathways",
            "network segmentation",
            "security telemetry",
            "third-party connectivity",
            "resilience and recovery assumptions",
          ],
        },
      ],
    },
    {
      id: "engineering-remediation",
      heading: "Security Engineering & Remediation",
      paragraphs: [
        "Finding the issue is not enough.",
        "SilverFox can support implementation through:",
      ],
      groups: [
        {
          items: [
            "security architecture design",
            "remediation engineering",
            "control integration",
            "security-tool integration",
            "configuration improvement",
            "segmentation projects",
            "platform hardening",
            "telemetry improvement",
            "security automation",
            "secure systems integration",
          ],
        },
      ],
    },
  ],
  approach: [
    {
      step: "01",
      title: "Map",
      body: "Understand the architecture, workloads, users, dependencies and trust boundaries.",
    },
    {
      step: "02",
      title: "Analyse",
      body: "Identify weaknesses in design, configuration and control coverage.",
    },
    {
      step: "03",
      title: "Prioritise",
      body: "Determine which weaknesses materially increase attackability.",
    },
    {
      step: "04",
      title: "Engineer",
      body: "Design and implement stronger controls.",
    },
    {
      step: "05",
      title: "Validate",
      body: "Test whether the resulting architecture behaves as intended.",
    },
  ],
  extra: [
    {
      id: "connected-offensive-security",
      heading: "Connected to Offensive Security",
      paragraphs: [
        "Engineering becomes stronger when attackers test it.",
        "SilverFox offensive-security teams can validate:",
      ],
      groups: [
        {
          items: [
            "segmentation",
            "authentication",
            "application security",
            "cloud permissions",
            "EDR effectiveness",
            "lateral-movement controls",
            "secure administrative paths",
          ],
        },
      ],
      footnote: ["This creates a closed loop:"],
      sequence: ["Design", "Build", "Attack", "Improve"],
    },
  ],
  relatedTechnology: [
    {
      product: "SCOPE",
      body: "External exposure discovered by SCOPE can reveal infrastructure and cloud assets that require architectural remediation.",
    },
    {
      product: "SIGNAL",
      body: "SIGNAL can consume telemetry from the environment to support detection, investigation and response.",
    },
  ],
  relevantFor: [
    "Cloud-native organisations",
    "SaaS providers",
    "Financial services",
    "Government",
    "Telecommunications",
    "Enterprises undergoing cloud migration",
    "Organisations modernising legacy infrastructure",
    "Development-heavy organisations",
  ],
  closing: {
    heading: "Security is strongest when it is engineered in.",
    paragraphs: ["Build systems that remain secure when assumptions are challenged."],
    cta: "Strengthen Your Architecture",
  },
};
