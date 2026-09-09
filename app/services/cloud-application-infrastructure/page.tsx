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
import { cloudApplicationInfrastructure as content } from "@/content/services/cloud-application-infrastructure";

export const metadata: Metadata = {
  title: content.name,
  description: content.menuDescriptor,
  alternates: { canonical: `/services/${content.slug}` },
};

const STACK_LAYERS = [
  { label: "Application", offset: "ml-0" },
  { label: "API", offset: "ml-4" },
  { label: "Identity", offset: "ml-8" },
  { label: "Cloud", offset: "ml-3" },
  { label: "Container", offset: "ml-10" },
  { label: "Network", offset: "ml-5" },
  { label: "Endpoint", offset: "ml-1" },
];

function ExplodedStackVisual() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-2">
      {STACK_LAYERS.map((layer) => (
        <div
          key={layer.label}
          className={`w-fit border border-line-light bg-bone-050 px-4 py-2.5 text-mono-label text-slate-650 ${layer.offset}`}
        >
          {layer.label}
        </div>
      ))}
    </div>
  );
}

export default function CloudApplicationInfrastructurePage() {
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
          visual={<ExplodedStackVisual />}
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
