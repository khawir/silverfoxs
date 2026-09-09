export function RelevantForList({ items }: { items: string[] }) {
  return (
    <div>
      <h2 className="text-mono-label text-slate-650">Particularly Relevant For</h2>
      <ul className="mt-5 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <li key={item} className="bullet-tick mb-3 break-inside-avoid text-body text-slate-650">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
