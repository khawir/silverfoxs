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
import { identityDataSecurity as content } from "@/content/services/identity-data-security";

export const metadata: Metadata = {
  title: content.name,
  description: content.menuDescriptor,
  alternates: { canonical: `/services/${content.slug}` },
};

const ACCESS_PATHS = [
  { label: "Exploit Path", width: "w-2/5" },
  { label: "Valid-Identity Path", width: "w-4/5" },
];

function AccessPathsVisual() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-7">
      {ACCESS_PATHS.map((path) => (
        <div key={path.label}>
          <p className="text-mono-label text-slate-650">{path.label}</p>
          <div className="mt-3 h-2 w-full bg-line-light">
            <div className={`h-2 bg-flare ${path.width}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function IdentityDataSecurityPage() {
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
          visual={<AccessPathsVisual />}
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
