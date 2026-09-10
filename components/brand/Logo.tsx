import Link from "next/link";
import { Mark } from "./Mark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Mark className="h-7 w-7 shrink-0 transition-transform duration-fast ease-out-crisp group-hover:scale-105 lg:h-8 lg:w-8" />
      <span className="whitespace-nowrap text-[0.92rem] font-semibold uppercase tracking-[0.04em] lg:text-[1.1rem] lg:tracking-[0.05em]">
        Silver Fox Consulting
      </span>
    </Link>
  );
}
