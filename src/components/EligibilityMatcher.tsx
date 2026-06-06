"use client";

import { useEffect, useMemo, useState } from "react";
import { universities } from "@/data/universities";
import { eligibility } from "@/data/eligibility";
import { CountryCode, Level } from "@/data/types";
import UniversityCard from "./UniversityCard";

const CS = "Computer Science";
const PAGE_SIZE = 48;

const LEVELS: { value: Level; label: string }[] = [
  { value: "Master's", label: "Master's" },
  { value: "Undergraduate", label: "Bachelor's (Undergraduate)" },
  { value: "PhD", label: "PhD" },
];

const COUNTRIES: { code: CountryCode | "all"; label: string }[] = [
  { code: "all", label: "All countries" },
  { code: "usa", label: "🇺🇸 USA" },
  { code: "uk", label: "🇬🇧 UK" },
  { code: "germany", label: "🇩🇪 Germany" },
  { code: "australia", label: "🇦🇺 Australia" },
];

export default function EligibilityMatcher() {
  const [level, setLevel] = useState<Level>("Master's");
  const [gpa, setGpa] = useState("2.8");
  const [country, setCountry] = useState<CountryCode | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const gpaNum = gpa === "" ? null : Number(gpa);
  const gpaValid = gpaNum !== null && !Number.isNaN(gpaNum) && gpaNum >= 0 && gpaNum <= 4;

  // All Computer Science universities the student can apply to.
  const pool = useMemo(() => {
    const list = universities.filter((u) => {
      if (!(u.disciplines ?? []).includes(CS)) return false;
      if (!u.levels.includes(level)) return false;
      if (country !== "all" && u.country !== country) return false;
      // Flagship records publish a GPA bar — gate on it. The broader index has no
      // published bar, so it stays as an open option to verify on the official site.
      if (gpaValid && gpaNum !== null) {
        const e = eligibility[u.slug];
        if (e && gpaNum < e.minGpa) return false;
      }
      return true;
    });
    // Curated (with published criteria) first, most selective first; then the rest A–Z.
    return list.sort((a, b) => {
      const ea = eligibility[a.slug];
      const eb = eligibility[b.slug];
      if (ea && eb) return eb.minGpa - ea.minGpa;
      if (ea) return -1;
      if (eb) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [level, country, gpaNum, gpaValid]);

  useEffect(() => setVisible(PAGE_SIZE), [level, country, gpaNum, gpaValid]);

  const shown = pool.slice(0, visible);
  const flagshipCount = pool.filter((u) => eligibility[u.slug]).length;

  const selectClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[0.92rem] text-slate-800 outline-none transition-all duration-200 focus:border-accent/50 focus:ring-2 focus:ring-accent/15 hover:border-accent/30 cursor-pointer";

  return (
    <div>
      {/* Controls */}
      <div className="elev-card rounded-2xl p-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mono mb-2 block text-slate-500">Field of study</span>
            <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-[0.92rem] font-semibold text-accent-dark">
              <span aria-hidden>💻</span> Computer Science
            </div>
          </div>
          <label className="block">
            <span className="mono mb-2 block text-slate-500">Degree level</span>
            <select className={selectClass} value={level} onChange={(e) => setLevel(e.target.value as Level)}>
              {LEVELS.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mono mb-2 block text-slate-500">Your CGPA (4.0 scale)</span>
            <input
              type="number"
              min={0}
              max={4}
              step={0.1}
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              placeholder="e.g. 2.8"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[0.92rem] text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-accent/50 focus:ring-2 focus:ring-accent/15"
            />
          </label>
          <label className="block">
            <span className="mono mb-2 block text-slate-500">Country</span>
            <select className={selectClass} value={country} onChange={(e) => setCountry(e.target.value as CountryCode | "all")}>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </label>
        </div>
        {gpa !== "" && !gpaValid && (
          <p className="mt-3 text-[0.8rem] font-medium text-coral">Enter a CGPA between 0.0 and 4.0.</p>
        )}
        <p className="mt-4 text-[0.82rem] leading-relaxed text-slate-500">
          Showing every <strong className="text-slate-700">Computer Science</strong> university you can apply to. The{" "}
          <strong className="text-slate-700">{flagshipCount}</strong> flagship records publish a GPA bar and are gated on
          your CGPA{gpaValid && <> ({gpa}+)</>}; the rest are official directory listings — confirm exact entry
          requirements on each university&rsquo;s site.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 mt-9 flex flex-wrap items-baseline gap-2">
        <span className="font-serif text-[1.7rem] font-semibold text-accent">{pool.length.toLocaleString()}</span>
        <span className="text-[0.95rem] text-slate-600">
          Computer Science {pool.length === 1 ? "university" : "universities"} accept a {level} applicant
          {gpaValid && <> with a {gpa}+ CGPA</>}
          <span className="ml-2 text-slate-400">· {shown.length.toLocaleString()} shown</span>
        </span>
      </div>

      {pool.length === 0 ? (
        <div className="elev-card rounded-2xl p-12 text-center">
          <p className="text-[1.05rem] text-slate-700">No matches at this combination.</p>
          <p className="mt-2 text-[0.88rem] text-slate-500">Try a different country or level.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((u) => (
              <UniversityCard key={u.slug} uni={u} />
            ))}
          </div>
          {visible < pool.length && (
            <div className="mt-10 flex flex-col items-center gap-3">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-xl bg-accent px-7 py-3.5 text-[0.92rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow"
              >
                Load more universities
              </button>
              <span className="mono text-[0.7rem] text-slate-400">
                Showing {shown.length.toLocaleString()} of {pool.length.toLocaleString()}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
