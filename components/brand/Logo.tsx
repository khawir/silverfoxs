import Link from "next/link";
import { Mark } from "./Mark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Mark className="h-7 w-7 shrink-0 transition-transform duration-fast ease-out-crisp group-hover:scale-105" />
      <span className="text-[1.05rem] font-semibold uppercase tracking-[0.06em]">
        SilverFox
      </span>
    </Link>
  );
}
