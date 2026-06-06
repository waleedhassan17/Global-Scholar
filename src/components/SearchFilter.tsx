"use client";

import { useEffect, useMemo, useState } from "react";
import { University, CountryCode, Level } from "@/data/types";
import { MAIN_FIELDS } from "@/data/fields";
import UniversityCard from "./UniversityCard";

const COUNTRIES: { code: CountryCode | "all"; label: string }[] = [
  { code: "all", label: "All countries" },
  { code: "usa", label: "🇺🇸 USA" },
  { code: "uk", label: "🇬🇧 UK" },
  { code: "germany", label: "🇩🇪 Germany" },
  { code: "australia", label: "🇦🇺 Australia" },
];

const LEVELS: (Level | "all")[] = ["all", "Undergraduate", "Master's", "PhD"];

const PAGE_SIZE = 48;

export default function SearchFilter({
  data,
  lockedCountry,
}: {
  data: University[];
  /** When set, the country selector is hidden and results are fixed to this country. */
  lockedCountry?: CountryCode;
}) {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState<CountryCode | "all">(lockedCountry ?? "all");
  const [level, setLevel] = useState<Level | "all">("all");
  const [curatedFirst, setCuratedFirst] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const fields = useMemo(() => ["all", ...MAIN_FIELDS], []);
  const [field, setField] = useState("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return data.filter((u) => {
      if (country !== "all" && u.country !== country) return false;
      if (level !== "all" && !u.levels.includes(level)) return false;
      if (field !== "all" && !(u.disciplines ?? []).includes(field as (typeof MAIN_FIELDS)[number])) return false;
      if (curatedFirst && !u.curated) return false;
      if (needle) {
        const hay = `${u.name} ${u.city} ${u.popularFields.join(" ")} ${u.blurb ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [data, q, country, level, field, curatedFirst]);

  // Reset paging whenever the result set changes.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [q, country, level, field, curatedFirst]);

  const shown = filtered.slice(0, visible);

  const selectClass =
    "rounded-xl border border-line bg-paper2 px-3.5 py-2.5 text-[0.88rem] text-ink outline-none transition-all duration-200 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 hover:border-accent/20 cursor-pointer";

  return (
    <div>
      {/* Filter panel */}
      <div className="elev-card mb-9 rounded-2xl p-6">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-inkfaint"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search universities, cities or fields…"
            className="mb-4 w-full rounded-xl border border-line bg-paper px-4 py-3.5 pl-12 text-[0.95rem] text-ink outline-none transition-all duration-200 placeholder:text-inkfaint focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {!lockedCountry && (
            <select
              className={selectClass}
              value={country}
              onChange={(e) => setCountry(e.target.value as CountryCode | "all")}
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          )}
          <select className={selectClass} value={level} onChange={(e) => setLevel(e.target.value as Level | "all")}>
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l === "all" ? "All levels" : l}
              </option>
            ))}
          </select>
          <select className={selectClass} value={field} onChange={(e) => setField(e.target.value)}>
            {fields.map((f) => (
              <option key={f} value={f}>
                {f === "all" ? "All fields" : f}
              </option>
            ))}
          </select>
          <label className="ml-auto inline-flex cursor-pointer select-none items-center gap-2 rounded-xl border border-line bg-paper2 px-3.5 py-2.5 text-[0.84rem] font-medium text-inksoft transition-colors hover:border-accent/20 hover:text-ink">
            <input
              type="checkbox"
              checked={curatedFirst}
              onChange={(e) => setCuratedFirst(e.target.checked)}
              className="h-4 w-4 accent-[#2563eb]"
            />
            Detailed guides only
          </label>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <p className="mono text-inksoft">
          {filtered.length.toLocaleString()} {filtered.length === 1 ? "university" : "universities"}
          {!curatedFirst && (
            <span className="ml-2 text-inkfaint">· {shown.length.toLocaleString()} shown</span>
          )}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="elev-card rounded-2xl p-14 text-center">
          <p className="text-[1.05rem] text-inksoft">No matches found.</p>
          <p className="mt-1 text-[0.88rem] text-inkfaint">Try clearing a filter or searching a broader term.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((u) => (
              <UniversityCard key={u.slug} uni={u} />
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-10 flex flex-col items-center gap-3">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-xl bg-accent px-7 py-3.5 text-[0.92rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow"
              >
                Load more universities
              </button>
              <span className="mono text-[0.7rem] text-inkfaint">
                Showing {shown.length.toLocaleString()} of {filtered.length.toLocaleString()}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
