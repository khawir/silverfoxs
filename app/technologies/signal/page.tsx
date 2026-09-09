import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { ClosingStatement } from "@/components/sections/ClosingStatement";
import { ContentBlockSection } from "@/components/sections/ContentBlockSection";
import { ProductConnections } from "@/components/sections/ProductConnections";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductLanguageBlock } from "@/components/sections/ProductLanguageBlock";
import { ProductPositioning } from "@/components/sections/ProductPositioning";
import { ProductQuestion } from "@/components/sections/ProductQuestion";
import { ServiceConnectionsBand } from "@/components/sections/ServiceConnectionsBand";
import { UseCaseIndex } from "@/components/sections/UseCaseIndex";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { signal as content } from "@/content/technologies/signal";

export const metadata: Metadata = {
  title: `SIGNAL: ${content.headline}`,
  description: content.subheadline,
  alternates: { canonical: `/technologies/${content.slug}` },
};

const LANES = ["Endpoint", "Network", "Identity", "Cloud", "Threat Intelligence"];

function SignalLanesVisual() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-2.5">
      {LANES.map((lane, index) => (
        <div key={lane} className="flex items-center gap-3">
          <span className="w-32 shrink-0 text-small text-line-light">{lane}</span>
          <span
            className={`h-1.5 flex-1 bg-pulse ${index % 2 === 0 ? "opacity-70" : "opacity-40"}`}
          />
        </div>
      ))}
      <div className="mt-2 flex items-center gap-3 border-t border-line-dark pt-3">
        <span className="w-32 shrink-0 text-mono-label text-bone-050">Timeline</span>
        <span className="h-1.5 flex-1 bg-bone-050" />
      </div>
    </div>
  );
}

export default function SignalPage() {
  const chapters = content.capabilityModel.chapters.map((c) => ({
    id: c.id,
    label: c.heading ?? c.id,
  }));

  return (
    <>
      <Section surface="ink" spacing="chapter">
        <ProductHero
          accent={content.accent}
          category={content.category}
          headline={content.headline}
          subheadline={content.subheadline}
          paragraphs={content.hero.paragraphs}
          primaryCta={content.hero.primaryCta}
          primaryHref={contactHref("signal")}
          secondaryCta={content.hero.secondaryCta}
          secondaryHref="/services/cyber-defence"
          dark
          visual={<SignalLanesVisual />}
        />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContentBlockSection block={content.problem} />
          </div>
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <ProductQuestion
          heading={content.question}
          intro={content.questionSection.intro}
          notQuestion={content.questionSection.notQuestion}
          questions={content.questionSection.questions}
        />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-slate-650">{content.capabilityModel.heading}</h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ChapterRail chapters={chapters} />
          </div>
          <div className="lg:col-span-9">
            {content.capabilityModel.chapters.map((block) => (
              <ContentBlockSection key={block.id} block={block} />
            ))}
          </div>
        </div>
      </Section>

      <Section surface="graphite" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-line-light">{content.architecture.heading}</h2>
        <ArchitectureDiagram tiers={content.architecture.tiers} />
      </Section>

      {content.productConnections && (
        <Section surface="bone" spacing="standard" border="top">
          <h2 className="mb-6 text-mono-label text-slate-650">Product Connections</h2>
          <ProductConnections items={content.productConnections} />
        </Section>
      )}

      {content.deployment && (
        <Section surface="paper" spacing="standard" border="top">
          <ContentBlockSection block={content.deployment} />
        </Section>
      )}

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-6 text-mono-label text-slate-650">SIGNAL + SilverFox Services</h2>
        <ServiceConnectionsBand accent={content.accent} items={content.connections} />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-8 text-mono-label text-slate-650">Use Cases</h2>
        <UseCaseIndex items={content.useCases} />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <ProductPositioning
          accent={content.accent}
          notLabel={content.positioning.notLabel}
          identityHeading={content.positioning.identityHeading}
          questions={content.positioning.questions}
        />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <ProductLanguageBlock {...content.productLanguage} />
      </Section>

      <Section surface="ink" spacing="chapter">
        <ClosingStatement
          heading={content.finalCta.heading}
          paragraphs={[content.finalCta.body]}
          cta={content.finalCta.primaryCta}
          ctaHref={contactHref("signal")}
          secondaryCta={content.finalCta.secondaryCta}
          secondaryHref="/services/cyber-defence"
          dark
        />
      </Section>
    </>
  );
}
