import type { Metadata } from "next";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { ClosingStatement } from "@/components/sections/ClosingStatement";
import { ContentBlockSection } from "@/components/sections/ContentBlockSection";
import { ServiceConnectionsBand } from "@/components/sections/ServiceConnectionsBand";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { engineeringContent as content } from "@/content/engineering";

export const metadata: Metadata = {
  title: "Engineering & Applied R&D",
  description: content.hero.heading,
  alternates: { canonical: "/engineering" },
};

function RequirementToSystemVisual() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      {["Requirement", "Rough architecture", "Tested system"].map((stage, index) => (
        <div key={stage} className="flex items-center gap-3">
          <span className="text-mono-label text-slate-650">0{index + 1}</span>
          <span
            className={`flex-1 border px-4 py-3 text-small ${
              index === 2 ? "border-mint text-ink-950" : "border-line-light text-slate-650"
            }`}
          >
            {stage}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function EngineeringPage() {
  const chapters = content.sections.map((s) => ({ id: s.id, label: s.heading ?? s.id }));

  return (
    <>
      <Section surface="bone" spacing="chapter">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-mono-label text-mint">Engineering &amp; Applied R&amp;D</p>
            <h1 className="mt-4 text-h1">{content.hero.heading}</h1>
            <div className="mt-6 flex flex-col gap-3">
              {content.hero.paragraphs.map((p, i) => (
                <p key={i} className={`reading-measure ${i === 0 ? "text-lead" : "text-body"} text-slate-650`}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <CtaLink href={contactHref("engineering")} variant="primary">
                {content.hero.primaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <RequirementToSystemVisual />
          </div>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <ContentBlockSection block={content.intro} />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ChapterRail chapters={chapters} />
          </div>
          <div className="lg:col-span-9">
            {content.sections.map((block) => (
              <ContentBlockSection key={block.id} block={block} />
            ))}
          </div>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-6 text-mono-label text-slate-650">How Engineering Connects to Cybersecurity</h2>
        <ServiceConnectionsBand accent="mint" items={content.connections} />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-8 text-mono-label text-slate-650">Our Engineering Approach</h2>
        <div className="max-w-3xl">
          <ApproachSteps steps={content.approach} />
        </div>
      </Section>

      <Section surface="ink" spacing="chapter">
        <ClosingStatement
          heading={content.closing.heading}
          paragraphs={[content.closing.body]}
          cta={content.closing.cta}
          ctaHref={contactHref("engineering")}
          dark
        />
      </Section>
    </>
  );
}
