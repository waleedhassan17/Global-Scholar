import Link from "next/link";
import { CountryCode } from "@/data/types";
import { COUNTRY_META } from "@/lib/utils";

export default function CountryBadge({ code, linked = true }: { code: CountryCode; linked?: boolean }) {
  const m = COUNTRY_META[code];
  const inner = (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper2 px-3 py-1.5 text-[0.78rem] font-medium text-ink transition-all duration-200">
      <span aria-hidden>{m.flag}</span>
      {m.name}
    </span>
  );
  if (!linked) return inner;
  return (
    <Link href={`/country/${code}`} className="transition-opacity duration-200 hover:opacity-80">
      {inner}
    </Link>
  );
}
