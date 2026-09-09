export function ProductQuestion({
  heading,
  intro,
  notQuestion,
  questions,
}: {
  heading: string;
  intro?: string;
  notQuestion: string;
  questions: string[];
}) {
  return (
    <div>
      <h2 className="text-display">{heading}</h2>
      {intro && <p className="reading-measure mt-6 text-lead text-slate-650">{intro}</p>}
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-lead text-slate-650/60 line-through decoration-1">{notQuestion}</p>
        <p className="text-mono-label text-slate-650">but</p>
        <ul className="flex flex-col gap-3">
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
