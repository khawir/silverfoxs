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
import { offensiveSecurity as content } from "@/content/services/offensive-security";

export const metadata: Metadata = {
  title: content.name,
  description: content.menuDescriptor,
  alternates: { canonical: `/services/${content.slug}` },
};

const ATTACK_PATH_NODES = [
  { cy: 24, opacity: "1" },
  { cy: 92, opacity: "0.75" },
  { cy: 160, opacity: "0.5" },
  { cy: 228, opacity: "0.28" },
];

function AttackPathVisual() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 260"
      className="mx-auto h-auto w-full max-w-[140px] text-flare lg:mx-0"
    >
      <line
        x1="60"
        y1="0"
        x2="60"
        y2="248"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.6"
      />
      {ATTACK_PATH_NODES.map((node) => (
        <circle key={node.cy} cx="60" cy={node.cy} r="6" fill="currentColor" opacity={node.opacity} />
      ))}
      <line
        x1="60"
        y1="248"
        x2="60"
        y2="260"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1 6"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  );
}

function ControlsHoldDiagram() {
  const labels = ["Configured", "Deployed", "Enabled", "Reported"];
  return (
    <div
      aria-hidden="true"
      className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-l-2 border-line-light pl-6"
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {labels.map((label) => (
          <span key={label} className="text-mono-label text-slate-650">
            {label}
          </span>
        ))}
      </div>
      <p className="text-h3 text-flare">Does it hold?</p>
    </div>
  );
}

export default function OffensiveSecurityPage() {
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
          visual={<AttackPathVisual />}
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
                {block.id === "control-should-survive" && <ControlsHoldDiagram />}
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
