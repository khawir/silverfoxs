import Link from "next/link";
import type { ProductAccent, ProductId, RelatedTechnologyNote } from "@/lib/types";

const accentBorder: Record<ProductAccent, string> = {
  flare: "border-flare",
  pulse: "border-pulse",
  solar: "border-solar",
  mint: "border-mint",
};

const productAccent: Record<ProductId, ProductAccent> = {
  SCOPE: "flare",
  SIGNAL: "pulse",
  RANGE: "solar",
};

const productSlug: Record<ProductId, string> = {
  SCOPE: "scope",
  SIGNAL: "signal",
  RANGE: "range",
};

export function RelatedTechnologyBand({ notes }: { notes: RelatedTechnologyNote[] }) {
  return (
    <div className="flex flex-col divide-y divide-line-light border-y border-line-light">
      {notes.map((note) => (
        <Link
          key={note.product}
          href={`/technologies/${productSlug[note.product]}`}
          className={`group flex flex-col gap-2 border-l-4 py-6 pl-6 transition-colors duration-fast ease-out-crisp hover:bg-paper-100/60 sm:flex-row sm:items-baseline sm:gap-8 ${accentBorder[productAccent[note.product]]}`}
        >
          <span className="w-24 shrink-0 text-mono-label text-ink-950">{note.product}</span>
          <span className="text-body text-slate-650 group-hover:text-ink-950">{note.body}</span>
        </Link>
      ))}
    </div>
  );
}
