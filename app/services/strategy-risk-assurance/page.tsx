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
                <ContentBlockSection block={block} />
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
