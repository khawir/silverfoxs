import type { Metadata } from "next";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { Section } from "@/components/ui/Section";
import { placeholders } from "@/content/site";
import { privacySections } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SilverFox collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const chapters = [
    ...privacySections.map((s) => ({ id: s.id, label: `${s.number}. ${s.title}` })),
    { id: "contact", label: "14. Contact" },
  ];

  return (
    <Section surface="bone" spacing="chapter">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-3 no-print">
          <ChapterRail chapters={chapters} />
        </div>

        <div className="reading-measure lg:col-span-8 lg:col-start-5">
          <h1 className="text-h1">Privacy Policy</h1>
          <p className="mt-3 text-small text-slate-650">
            Last updated: {placeholders.privacyPolicyDate}
          </p>
          <p className="mt-6 text-body text-slate-650">
            SilverFox respects the privacy of visitors to this website and individuals who
            contact us through it.
          </p>
          <p className="mt-3 text-body text-slate-650">
            This Privacy Policy explains what information we may collect, why we collect it and
            how it may be used.
          </p>
          <p className="mt-3 border-l-2 border-flare pl-4 text-small text-slate-650">
            This draft should be reviewed against the company&rsquo;s actual jurisdiction,
            hosting, analytics, CRM and contact-form setup before publication.
          </p>

          <div className="mt-14 flex flex-col gap-14">
            {privacySections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-h3">
                  {section.number}. {section.title}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 text-body text-slate-650">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {section.list.map((item) => (
                      <li key={item} className="bullet-tick text-body text-slate-650">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footnote?.map((p, i) => (
                  <p key={i} className="mt-3 text-body text-slate-650">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div id="contact" className="scroll-mt-28">
              <h2 className="text-h3">14. Contact</h2>
              <p className="mt-3 text-body text-slate-650">
                Questions about this Privacy Policy or requests relating to personal information
                may be sent to:
              </p>
              <p className="mt-4 text-body text-ink-950">
                {placeholders.legalEntityName}
                <br />
                Email:{" "}
                <a href={`mailto:${placeholders.privacyEmail}`} className="underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare">
                  {placeholders.privacyEmail}
                </a>
                <br />
                Address: {placeholders.registeredAddress}
              </p>
              <p className="mt-4 text-small text-slate-650">
                Replace all placeholders and confirm the responsible legal entity before
                publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
