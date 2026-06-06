import { notFound } from "next/navigation";
import Link from "next/link";
import { countries, getCountry } from "@/data/countries";
import { universitiesByCountry } from "@/data/universities";
import SearchFilter from "@/components/SearchFilter";
import IndicativeBadge from "@/components/Disclaimer";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return Object.keys(countries).map((country) => ({ country }));
}

export function generateMetadata({ params }: { params: { country: string } }) {
  const c = getCountry(params.country);
  if (!c) return { title: "Country not found" };
  return {
    title: `Study in ${c.name} from Pakistan — Global Scholar Navigator`,
    description: `${c.name}: visa, finances, application path and universities for Pakistani students.`,
  };
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const c = getCountry(params.country);
  if (!c) notFound();
  const unis = universitiesByCountry(c.code);

  return (
    <article className="relative px-8 py-14">
      <div className="relative mx-auto max-w-content">
        <Link href="/" className="mono text-inkfaint transition-colors duration-200 hover:text-accent">← All destinations</Link>

        {/* Header */}
        <PageHeader image={`/${c.code}.jpg`} className="mt-8">
          <div className="flex items-center gap-5">
            <span className="text-[3.2rem] drop-shadow" aria-hidden>{c.flag}</span>
            <div>
              <h1 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-none tracking-tight text-white">
                Study in {c.name}
              </h1>
              <p className="mono mt-2.5 text-sky-300">From Pakistan · {unis.length} universities listed</p>
            </div>
          </div>
          <p className="mt-7 max-w-[60ch] text-[1.12rem] leading-relaxed text-slate-200">{c.summary}</p>
        </PageHeader>

        {/* Why study here */}
        <section className="mt-16">
          <h2 className="font-serif text-[1.65rem] font-medium text-ink">Why Pakistani students choose {c.name}</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {c.whyStudyHere.map((w, i) => (
              <li key={i} className="glass-card flex gap-3 rounded-xl p-5 text-[0.92rem] text-ink">
                <span className="mt-0.5 text-gold">◆</span>
                <span className="leading-snug">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Visa + finances */}
        <section className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-7">
            <h2 className="mb-1 font-serif text-[1.45rem] font-medium text-ink">The visa: {c.visa.name}</h2>
            <div className="mt-5">
              <h3 className="mono mb-2 text-accent">Financial requirement</h3>
              <p className="mb-3 text-[0.94rem] leading-relaxed text-ink">{c.visa.financialRequirement}</p>
              <IndicativeBadge className="mb-6" />
            </div>
            <h3 className="mono mb-2.5 text-accent">Key documents</h3>
            <ul className="space-y-2">
              {c.visa.keyDocuments.map((d, i) => (
                <li key={i} className="flex gap-3 text-[0.9rem] text-inksoft">
                  <span className="text-gold">•</span><span className="leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h2 className="mb-5 font-serif text-[1.45rem] font-medium text-ink">Good to know</h2>
            <ul className="space-y-3">
              {c.visa.notes.map((n, i) => (
                <li key={i} className="flex gap-3 text-[0.92rem] leading-snug text-ink">
                  <span className="mt-0.5 text-coral">!</span><span>{n}</span>
                </li>
              ))}
            </ul>
            <div className="section-divider my-5" />
            <h3 className="mono mb-2.5 text-accent">Pakistan-specific</h3>
            <ul className="space-y-2">
              {c.pakistanSpecific.map((p, i) => (
                <li key={i} className="flex gap-3 text-[0.9rem] leading-snug text-inksoft">
                  <span className="text-gold">★</span><span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application path — dark band */}
        <section className="relative mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 text-slate-100 shadow-[0_30px_70px_-40px_rgba(2,6,23,0.7)] md:p-10">
          <div className="pointer-events-none absolute -left-16 -top-16 h-[280px] w-[280px] rounded-full bg-accent/20 blur-[120px]" aria-hidden />
          <div className="relative">
            <span className="mono mb-3 block text-sky-300">Step by step</span>
            <h2 className="font-serif text-[1.65rem] font-medium text-white">How a Pakistani student applies</h2>
            <ol className="mt-7 space-y-3">
              {c.applicationPath.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <span className="mono flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent text-[0.72rem] font-bold text-white ring-1 ring-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.94rem] leading-snug text-slate-200">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* National scholarships */}
        <section className="mt-16">
          <h2 className="font-serif text-[1.65rem] font-medium text-ink">National scholarships open to Pakistani students</h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
            {c.nationalScholarships.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-[1.2rem] font-medium text-ink">{s.name}</h3>
                  <span className="badge-gold mono rounded-full px-2.5 py-1 text-[0.56rem]">{s.type}</span>
                </div>
                <p className="text-[0.92rem] leading-snug text-inksoft">{s.detail}</p>
                {s.link && (
                  <a href={s.link} target="_blank" rel="noreferrer" className="mono mt-3 inline-block text-accent transition-colors duration-200 hover:text-accent-deep">
                    Official site →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Universities */}
        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-[1.85rem] font-medium text-ink">All universities in {c.name}</h2>
              <p className="mono mt-2 text-inksoft">{unis.length.toLocaleString()} institutions · search the full directory below</p>
            </div>
            <Link href="/universities" className="mono whitespace-nowrap text-accent transition-colors duration-200 hover:text-accent-deep">All countries →</Link>
          </div>
          <SearchFilter data={unis} lockedCountry={c.code} />
        </section>
      </div>
    </article>
  );
}
