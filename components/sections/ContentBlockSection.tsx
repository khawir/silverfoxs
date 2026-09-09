import type { ContentBlock } from "@/lib/types";

function CapabilityGroups({ groups }: { groups: NonNullable<ContentBlock["groups"]> }) {
  if (groups.length === 1 && !groups[0].heading) {
    return (
      <ul className="mt-6 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
        {groups[0].items.map((item) => (
          <li key={item} className="bullet-tick mb-3 break-inside-avoid text-body text-slate-650">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.heading ?? group.items[0]}>
          {group.heading && (
            <p className="text-mono-label text-current opacity-70">{group.heading}</p>
          )}
          {group.intro && (
            <p className="mt-2 text-small text-slate-650">{group.intro}</p>
          )}
          <ul className="mt-3 flex flex-col gap-2.5">
            {group.items.map((item) => (
              <li key={item} className="bullet-tick text-body text-slate-650">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ContentBlockSection({ block }: { block: ContentBlock }) {
  return (
    <div id={block.id} className="scroll-mt-28 border-t border-line-light py-14 first:border-t-0 first:pt-0">
      {block.kicker && <p className="text-mono-label text-slate-650">{block.kicker}</p>}
      {block.heading && (
        <h2 className={`text-h3 ${block.kicker ? "mt-3" : ""}`}>{block.heading}</h2>
      )}
      {block.subheading && (
        <p className="reading-measure mt-4 text-lead font-medium text-ink-950">
          {block.subheading}
        </p>
      )}
      {block.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className={`reading-measure text-body text-slate-650 ${index === 0 && (block.heading || block.subheading) ? "mt-4" : "mt-3"}`}
        >
          {paragraph}
        </p>
      ))}

      {block.groups && <CapabilityGroups groups={block.groups} />}

      {block.questions && (
        <ul className="mt-6 flex flex-col gap-3 border-l-2 border-line-light pl-5">
          {block.questions.map((question) => (
            <li key={question} className="text-lead italic text-ink-950">
              {question}
            </li>
          ))}
        </ul>
      )}

      {block.sequence && (
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-mono-label text-ink-950">
          {block.sequence.map((step, index) => (
            <span key={step} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="text-flare">
                  →
                </span>
              )}
              <span className="border border-line-dark/20 bg-paper-100 px-3 py-1.5">{step}</span>
            </span>
          ))}
        </div>
      )}

      {block.footnote?.map((line, index) => (
        <p key={index} className="reading-measure mt-6 text-body font-medium text-ink-950">
          {line}
        </p>
      ))}
    </div>
  );
}
