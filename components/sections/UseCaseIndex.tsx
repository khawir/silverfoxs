export function UseCaseIndex({ items }: { items: { heading: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.heading} className="border-t border-line-light pt-4">
          <h3 className="text-[1.05rem] font-medium text-ink-950">{item.heading}</h3>
          <p className="mt-1.5 text-body text-slate-650">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
