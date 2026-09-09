export function ProductConnections({
  items,
}: {
  items: { heading: string; body: string; sequence?: string[] }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.heading} className="border-t border-line-light pt-5">
          <h3 className="text-[1.4rem] font-semibold leading-snug">{item.heading}</h3>
          <p className="mt-3 max-w-[48ch] text-body text-slate-650">{item.body}</p>
          {item.sequence && (
            <p className="mt-4 flex flex-wrap items-center gap-2 text-mono-label text-ink-950">
              {item.sequence.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="opacity-40">
                      →
                    </span>
                  )}
                  {step}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
