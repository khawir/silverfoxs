import type { ServiceContent } from "@/lib/types";

export const cyberDefence: ServiceContent = {
  slug: "cyber-defence",
  number: "05",
  name: "Cyber Defence & Managed Security",
  category: "Cyber Defence",
  menuDescriptor: "SOC, MDR, detection engineering, threat hunting and continuous defence.",
  signature: "Find the signal in the noise.",
  homepage: {
    descriptor:
      "Security teams do not need more alerts. They need to know which ones matter. SilverFox combines security monitoring, detection engineering, threat hunting and managed defence to identify meaningful activity and accelerate action.",
    capabilities: [
      "SOC design and implementation",
      "Managed SOC",
      "SOC modernisation",
      "Managed Detection and Response",
      "24/7 security monitoring",
      "SIEM engineering",
      "SOAR",
      "Detection engineering",
      "Security automation",
      "Endpoint detection and response",
      "Network detection and response",
      "Cloud detection and response",
      "Identity threat detection",
      "Proactive threat hunting",
      "Managed attack-surface monitoring",
      "Managed vulnerability management",
    ],
  },
  primaryCta: "Strengthen Your Cyber Defence",
  secondaryCta: "Discuss Managed Detection & Response",
  overviewCta: "Explore Cyber Defence & Managed Security",
  hero: {
    paragraphs: [
      "Security operations should do more than produce alerts.",
      "SilverFox combines continuous monitoring, detection engineering, threat hunting and security automation to identify meaningful activity and accelerate defensive action.",
      "The objective is not more telemetry.",
      "It is better security decisions.",
    ],
  },
  sections: [
    {
      id: "more-alerts",
      heading: "More alerts are not more security.",
      paragraphs: [
        "Modern environments generate security data across endpoints, identities, networks, applications and cloud platforms.",
        "Without context, ownership and disciplined investigation, important activity can disappear inside that volume.",
        "Effective cyber defence requires teams to answer:",
      ],
      questions: [
        "What is happening?",
        "Which activity matters?",
        "What does the evidence show?",
        "How far has the activity progressed?",
        "What should happen next?",
        "Did the response contain the threat?",
      ],
    },
    {
      id: "security-operations",
      heading: "Security Operations",
      subheading: "Build operations around decisions, not dashboards.",
      paragraphs: ["SilverFox can design, implement and improve security operations capabilities."],
      groups: [
        {
          items: [
            "SOC strategy and operating model",
            "SOC design and implementation",
            "SOC modernisation",
            "Managed SOC",
            "SOC as a Service",
            "Security monitoring architecture",
            "SIEM engineering",
            "SOAR",
            "Use-case development",
            "Case-management workflows",
            "Analyst processes",
            "Metrics and reporting",
            "Escalation and response integration",
          ],
        },
      ],
    },
    {
      id: "mdr",
      heading: "Managed Detection & Response",
      subheading: "Continuous defence across the environment.",
      paragraphs: [
        "SilverFox MDR can bring together monitoring, investigation and coordinated response across:",
      ],
      groups: [
        {
          heading: "Coverage",
          items: [
            "endpoints",
            "networks",
            "identities",
            "cloud platforms",
            "applications",
            "security infrastructure",
          ],
        },
        {
          heading: "Capabilities",
          items: [
            "24/7 security monitoring",
            "Alert triage",
            "Investigation",
            "Endpoint Detection and Response",
            "Network Detection and Response",
            "Cloud Detection and Response",
            "Identity threat detection",
            "Threat-intelligence enrichment",
            "Analyst escalation",
            "Coordinated containment",
            "Incident handover",
            "Operational reporting",
          ],
        },
      ],
      footnote: [
        "Any public promise of continuous or 24/7 service must match the service model available at launch.",
      ],
    },
    {
      id: "detection-engineering",
      heading: "Detection Engineering",
      subheading: "Detect behaviour that matters in the customer's environment.",
      paragraphs: [
        "Detection engineering connects threats, telemetry and defensive controls.",
        "SilverFox can support:",
      ],
      groups: [
        {
          items: [
            "threat-informed detection design",
            "SIEM detection rules",
            "EDR detections",
            "identity detections",
            "cloud detections",
            "network detections",
            "behavioural analytics",
            "MITRE ATT&CK mapping",
            "detection testing",
            "false-positive reduction",
            "detection lifecycle management",
            "coverage assessment",
          ],
        },
      ],
    },
    {
      id: "threat-hunting",
      heading: "Threat Hunting",
      subheading: "Ask questions the existing rules did not.",
      paragraphs: ["Proactive hunting can focus on:"],
      groups: [
        {
          items: [
            "endpoint activity",
            "network behaviour",
            "cloud activity",
            "suspicious authentication",
            "identity abuse",
            "persistence",
            "privilege escalation",
            "lateral movement",
            "command and control",
            "data access",
            "intelligence-led hypotheses",
          ],
        },
      ],
      footnote: [
        "Hunting should produce more than a search result. It should improve detections, investigations and future response.",
      ],
    },
    {
      id: "managed-security",
      heading: "Managed Security",
      paragraphs: ["SilverFox can operate or support selected security capabilities, including:"],
      groups: [
        {
          items: [
            "Managed SIEM",
            "Managed EDR/XDR",
            "Managed vulnerability management",
            "Managed attack-surface monitoring",
            "Managed cloud security",
            "Managed identity security",
            "Security-platform administration",
            "Security-control health monitoring",
            "Exposure and remediation workflows",
          ],
        },
      ],
      footnote: [
        "The service should be scoped around measurable operational outcomes rather than generic tool management.",
      ],
    },
    {
      id: "security-automation",
      heading: "Security Automation",
      subheading: "Automate repetition, preserve judgement.",
      paragraphs: ["Automation can improve speed and consistency across:"],
      groups: [
        {
          items: [
            "alert enrichment",
            "IOC processing",
            "case creation",
            "ticket routing",
            "evidence collection",
            "response playbooks",
            "containment requests",
            "vulnerability workflows",
            "notification",
            "reporting",
          ],
        },
      ],
      footnote: [
        "Automation should support analysts without hiding decisions that require human accountability.",
      ],
    },
  ],
  approach: [
    {
      step: "01",
      title: "Observe",
      body: "Collect relevant telemetry from endpoints, identity, network, cloud and applications.",
    },
    {
      step: "02",
      title: "Detect",
      body: "Identify suspicious behaviour using rules, analytics, intelligence and environmental context.",
    },
    {
      step: "03",
      title: "Investigate",
      body: "Connect alerts, entities and evidence into a coherent understanding of activity.",
    },
    {
      step: "04",
      title: "Contain",
      body: "Coordinate proportionate defensive action when malicious activity is confirmed.",
    },
    {
      step: "05",
      title: "Hunt",
      body: "Look for activity that predefined detections may have missed.",
    },
    {
      step: "06",
      title: "Improve",
      body: "Turn incidents, exercises and hunting results into stronger detections and processes.",
    },
  ],
  extra: [
    {
      id: "offensive-defensive-loop",
      heading: "The Offensive and Defensive Loop",
      paragraphs: [
        "Defence improves when it is challenged.",
        "SilverFox red-team and purple-team exercises can test whether activity is:",
      ],
      groups: [
        {
          items: ["visible", "detected", "enriched", "investigated", "escalated", "contained"],
        },
      ],
      footnote: ["The resulting evidence improves telemetry, detections and response workflows."],
    },
  ],
  relatedTechnology: [
    {
      product: "SIGNAL",
      body: "SIGNAL brings together security telemetry, detections, investigations and threat intelligence to support operational decisions.",
    },
    {
      product: "SCOPE",
      body: "SCOPE adds external exposure and attack-surface context to defensive prioritisation.",
    },
    {
      product: "RANGE",
      body: "RANGE provides controlled environments for SOC training, purple teaming, detection validation and incident-response exercises.",
    },
  ],
  relevantFor: [
    "Organisations building or modernising a SOC",
    "Teams with fragmented security tooling",
    "Cloud and hybrid enterprises",
    "Organisations requiring continuous monitoring",
    "Regulated businesses",
    "Security teams seeking better detection coverage",
    "Organisations without sufficient in-house analyst capacity",
    "Enterprises preparing for more advanced threats",
  ],
  closing: {
    heading: "More telemetry is not the answer. Better decisions are.",
    paragraphs: ["Turn security data into detection, investigation and action."],
    cta: "Strengthen Your Cyber Defence",
  },
};
