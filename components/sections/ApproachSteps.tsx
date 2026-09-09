import type { ApproachStep } from "@/lib/types";

export function ApproachSteps({ steps }: { steps: ApproachStep[] }) {
  return (
    <ol className="relative flex flex-col">
      <span aria-hidden="true" className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-line-light" />
      {steps.map((step) => (
        <li key={step.step} className="relative flex gap-6 py-5">
          <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center border border-line-dark/15 bg-bone-050 text-mono-label text-ink-950">
            {step.step}
          </span>
          <div className="pt-1.5">
            <h3 className="text-[1.35rem] font-semibold leading-snug">{step.title}</h3>
            <p className="mt-2 max-w-[56ch] text-body text-slate-650">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
