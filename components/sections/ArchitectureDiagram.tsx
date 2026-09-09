/**
 * A responsive, fully-HTML rendering of the layered conceptual architecture
 * diagrams in docs/SILVERFOX_WEBSITE_CANONICAL.md (SCOPE/SIGNAL/RANGE
 * architecture sections). Each tier is either a single system label or a
 * row of parallel components; tiers are connected with a plain arrow glyph
 * so the whole diagram stays real, selectable, accessible text rather than
 * an image or an unlabelled SVG.
 */
export function ArchitectureDiagram({ tiers }: { tiers: string[][] }) {
  return (
    <ol className="flex flex-col items-stretch gap-0">
      {tiers.map((tier, index) => (
        <li key={index} className="flex flex-col items-center">
          <div
            className={`flex w-full flex-wrap items-stretch justify-center gap-3 ${tier.length > 1 ? "" : ""}`}
          >
            {tier.map((node) => (
              <span
                key={node}
                className={`border px-4 py-3 text-center text-small font-medium ${
                  tier.length === 1
                    ? "flex-1 border-line-dark/30 bg-graphite-800 text-bone-050"
                    : "min-w-[9rem] flex-1 border-line-light bg-bone-050 text-ink-950"
                }`}
              >
                {node}
              </span>
            ))}
          </div>
          {index < tiers.length - 1 && (
            <span aria-hidden="true" className="py-2 text-slate-650">
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
