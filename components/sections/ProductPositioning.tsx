import type { ProductAccent } from "@/lib/types";

const accentText: Record<ProductAccent, string> = {
  flare: "text-flare",
  pulse: "text-pulse",
  solar: "text-solar",
  mint: "text-mint",
};

export function ProductPositioning({
  accent,
  notLabel,
  identityHeading,
  questions,
}: {
  accent: ProductAccent;
  notLabel: string;
  identityHeading: string;
  questions: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div>
        <p className="text-mono-label text-slate-650">Should not be marketed as</p>
        <p className="mt-3 text-lead text-slate-650/70 line-through decoration-1">{notLabel}</p>
        <p className="mt-8 text-mono-label text-slate-650">Its identity is</p>
        <h2 className={`mt-3 text-display ${accentText[accent]}`}>{identityHeading}</h2>
      </div>
      <div>
        <p className="text-mono-label text-slate-650">It exists to answer</p>
        <ul className="mt-3 flex flex-col gap-3">
          {questions.map((question) => (
            <li key={question} className="text-lead font-medium text-ink-950">
              {question}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
