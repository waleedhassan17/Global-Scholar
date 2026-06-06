import Link from "next/link";
import { University } from "@/data/types";
import { COUNTRY_META } from "@/lib/utils";

export default function UniversityCard({ uni }: { uni: University }) {
  const m = COUNTRY_META[uni.country];
  const curated = !!uni.curated;

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-slate-500">
          <span className="text-[0.95rem]" aria-hidden>{m.flag}</span>
          {uni.city || m.name}
        </span>
        {uni.type ? (
          <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-accent-dark">
            {uni.type}
          </span>
        ) : !curated ? (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-slate-400">
            Index
          </span>
        ) : null}
      </div>

      <h3 className="mt-3.5 font-serif text-[1.25rem] font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-accent-dark">
        {uni.name}
      </h3>

      {uni.blurb ? (
        <p className="mt-2 line-clamp-2 text-[0.88rem] leading-relaxed text-slate-500">{uni.blurb}</p>
      ) : (
        <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-400">{m.name} · official directory listing</p>
      )}

      {uni.popularFields.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {uni.popularFields.slice(0, 3).map((f) => (
            <span key={f} className="rounded-md bg-slate-100 px-2.5 py-1 text-[0.7rem] font-medium text-slate-600">
              {f}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-[0.74rem] text-slate-400">
          {uni.globalRankBand ?? (curated ? "Full profile" : "Directory")}
        </span>
        <span className="inline-flex items-center gap-1 text-[0.76rem] font-semibold text-accent">
          {curated ? "View details" : "Visit site"}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </>
  );

  const className = "elev-card hover-lift group flex h-full flex-col rounded-2xl p-6 pt-5";

  if (curated) {
    return (
      <Link href={`/university/${uni.slug}`} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={uni.website} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  );
}
