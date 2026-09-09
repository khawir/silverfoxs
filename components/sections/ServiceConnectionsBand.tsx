import Link from "next/link";
import type { ProductAccent } from "@/lib/types";

const accentBorder: Record<ProductAccent, string> = {
  flare: "border-flare",
  pulse: "border-pulse",
  solar: "border-solar",
  mint: "border-mint",
};

export function ServiceConnectionsBand({
  accent,
  items,
}: {
  accent: ProductAccent;
  items: { heading: string; body: string; href: string; sequence?: string[] }[];
}) {
  return (
    <div className={`flex flex-col divide-y divide-line-light border-y border-line-light`}>
      {items.map((item) => (
        <Link
          key={item.heading}
          href={item.href}
          className={`group flex flex-col gap-2 border-l-4 py-6 pl-6 transition-colors duration-fast ease-out-crisp hover:bg-paper-100/60 ${accentBorder[accent]}`}
        >
          <h3 className="text-[1.05rem] font-medium text-ink-950">{item.heading}</h3>
          <span className="max-w-[64ch] text-body text-slate-650">{item.body}</span>
          {item.sequence && (
            <span className="mt-1 flex flex-wrap items-center gap-2 text-mono-label text-ink-950">
              {item.sequence.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-current opacity-40">
                      →
                    </span>
                  )}
                  {step}
                </span>
              ))}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
