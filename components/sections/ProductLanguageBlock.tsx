export function ProductLanguageBlock({
  primary,
  secondary,
  supporting,
}: {
  primary: string;
  secondary: string;
  supporting: string[];
}) {
  return (
    <div>
      <p className="text-display-xl">{primary}</p>
      <p className="mt-3 text-h3 text-slate-650">{secondary}</p>
      <ul className="mt-10 flex flex-col gap-4 border-t border-line-light pt-8">
        {supporting.map((line) => (
          <li key={line} className="text-lead text-slate-650">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
