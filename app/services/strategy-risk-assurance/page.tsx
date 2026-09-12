import type { Metadata } from "next";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { ClosingStatement } from "@/components/sections/ClosingStatement";
import { ContentBlockSection } from "@/components/sections/ContentBlockSection";
import { RelatedTechnologyBand } from "@/components/sections/RelatedTechnologyBand";
import { RelevantForList } from "@/components/sections/RelevantForList";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { strategyRiskAssurance as content } from "@/content/services/strategy-risk-assurance";
import type { ContentBlock } from "@/lib/types";

export const metadata: Metadata = {
  title: content.name,
  description: content.menuDescriptor,
  alternates: { canonical: `/services/${content.slug}` },
};

const RISK_AXES = [
  { label: "Criticality", detail: "How much the business depends on the asset, system or process." },
  { label: "Exposure", detail: "How reachable the asset is to an attacker, internally or externally." },
  { label: "Consequence", detail: "What happens to the organisation if the risk is realised." },
];

function RiskAxesDiagram() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line-light bg-line-light sm:grid-cols-3">
      {RISK_AXES.map((axis) => (
        <div key={axis.label} className="bg-bone-050 p-6">
          <p className="text-mono-label text-flare">{axis.label}</p>
          <p className="mt-3 text-body text-slate-650">{axis.detail}</p>
        </div>
      ))}
      <p className="col-span-full bg-paper-100 p-5 text-small text-slate-650">
        These three factors combine to separate material security issues from background noise -
        the same distinction that shapes every Cyber Risk capability above.
      </p>
    </div>
  );
}

// Each pair is kept short and parallel in length ("Internal X" / "External
// X") deliberately - long enough to be clear, short enough that the two
// steps sit on one line per card instead of wrapping.
const CERTIFICATION_AUDITS = [
  {
    name: "ISO/IEC 27001",
    body: "Information Security Management",
    steps: ["Internal audit", "External audit"],
  },
  {
    name: "ISO 9001",
    body: "Quality Management",
    steps: ["Internal audit", "External audit"],
  },
  {
    name: "SWIFT CSP",
    body: "Customer Security Programme",
    steps: ["Internal assessment", "External assessment"],
  },
  {
    name: "CMMC",
    body: "Cybersecurity Maturity Model Certification",
    steps: ["Readiness assessment", "Certified assessment"],
  },
];

// Individual practitioner certifications, not organisational audits - no
// internal/external steps, so they don't belong in the grid above. Echoes
// the badge treatment used for the homepage certifications strip, adapted
// to this page's light surface.
const PRACTITIONER_CERTIFICATIONS = [
  { name: "OSCP", body: "Offensive Security Certified Professional" },
  { name: "CREST", body: "Certified security testing" },
  { name: "CISSP", body: "Certified Information Systems Security Professional" },
];

/**
 * A fully bespoke replacement for ContentBlockSection on this one block -
 * not just a supplementary diagram bolted on after it (that produced a
 * disconnected gap, with the footnote sentence stranded above an empty
 * section and the grid floating below it with no heading of its own). This
 * owns heading through footnote itself, in one continuous flow, the same
 * outer wrapper/spacing as ContentBlockSection so it still sits correctly
 * in the page's rhythm and the ChapterRail's scroll-to-anchor behaviour.
 *
 * The shared ContentBlockSection group heading (small, low-opacity caps) is
 * correct for the dozens of routine bullet lists across every service page,
 * but this is the page's flagship new capability and earns more weight.
 * Reuses two patterns already proven elsewhere on this exact page:
 * RiskAxesDiagram's 1px-gap card grid and the "sequence" arrow-chip pattern
 * from the Security Audit & Assurance block just above it.
 */
function CertificationAuditsSection({ block }: { block: ContentBlock }) {
  return (
    <div id={block.id} className="scroll-mt-28 border-t border-line-light py-14 first:border-t-0 first:pt-0">
      {block.heading && <h2 className="text-h3">{block.heading}</h2>}
      {block.subheading && (
        <p className="reading-measure mt-4 text-lead font-medium text-ink-950">{block.subheading}</p>
      )}
      {block.paragraphs?.map((paragraph, index) => (
        <p key={index} className="reading-measure mt-4 text-body text-slate-650">
          {paragraph}
        </p>
      ))}

      <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line-light bg-line-light sm:grid-cols-2">
        {CERTIFICATION_AUDITS.map((cert) => (
          <div key={cert.name} className="border-l-4 border-flare bg-bone-050 p-6 lg:p-8">
            <p className="text-h3">{cert.name}</p>
            <p className="mt-2 text-body text-slate-650">{cert.body}</p>
            <div className="mt-5 flex flex-nowrap items-center gap-2 text-mono-label text-ink-950">
              {cert.steps.map((step, index) => (
                <span key={step} className="flex shrink-0 items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-flare">
                      →
                    </span>
                  )}
                  <span className="whitespace-nowrap border border-line-dark/20 bg-paper-100 px-2.5 py-1.5">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {block.footnote?.map((line, index) => (
        <p key={index} className="reading-measure mt-6 text-body font-medium text-ink-950">
          {line}
        </p>
      ))}

      <div className="mt-10 border-t border-line-light pt-8">
        <p className="text-mono-label text-slate-650">Individual practitioner certifications include</p>
        <div className="mt-5 flex flex-wrap gap-x-10 gap-y-5">
          {PRACTITIONER_CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="border-l-2 border-flare py-1 pl-4">
              <p className="text-[1.05rem] font-semibold text-ink-950">{cert.name}</p>
              <p className="mt-1 text-body text-slate-650">{cert.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskDecisionAssurance() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-6 border-l border-line-light pl-6">
      {["Risk", "Decision", "Assurance"].map((term) => (
        <div key={term} className="flex items-center gap-3">
          <span
            className={`h-2.5 w-2.5 shrink-0 ${term === "Decision" ? "bg-flare" : "bg-line-light"}`}
          />
          <span
            className={`text-h3 ${term === "Decision" ? "text-ink-950" : "text-slate-650"}`}
          >
            {term}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function StrategyRiskAssurancePage() {
  const chapters = content.sections.map((s) => ({ id: s.id, label: s.heading ?? s.id }));

  return (
    <>
      <Section surface="bone" spacing="chapter">
        <ServiceHero
          number={content.number}
          name={content.name}
          paragraphs={content.hero.paragraphs}
          primaryCta={content.primaryCta}
          primaryHref={contactHref(content.slug)}
          secondaryCta={content.secondaryCta}
          secondaryHref="/contact"
          visual={<RiskDecisionAssurance />}
        />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ChapterRail chapters={chapters} />
          </div>
          <div className="lg:col-span-9">
            {content.sections.map((block) => (
              <div key={block.id}>
                {block.id === "certification-audits" ? (
                  <CertificationAuditsSection block={block} />
                ) : (
                  <ContentBlockSection block={block} />
                )}
                {block.id === "cyber-risk" && <RiskAxesDiagram />}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="text-mono-label text-slate-650">Our Approach</h2>
        <div className="mt-8 max-w-3xl">
          <ApproachSteps steps={content.approach} />
        </div>
      </Section>

      {content.extra?.map((block) => (
        <Section key={block.id} surface="bone" spacing="standard" border="top">
          <ContentBlockSection block={block} />
        </Section>
      ))}

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-6 text-mono-label text-slate-650">Related SilverFox Technology</h2>
        <RelatedTechnologyBand notes={content.relatedTechnology} />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <RelevantForList items={content.relevantFor} />
      </Section>

      <Section surface="ink" spacing="chapter">
        <ClosingStatement
          heading={content.closing.heading}
          paragraphs={content.closing.paragraphs}
          cta={content.closing.cta}
          ctaHref={contactHref(content.slug)}
          dark
        />
      </Section>
    </>
  );
}
