import { notFound } from "next/navigation";
import Link from "next/link";
import { getUniversity, curatedUniversities } from "@/data/universities";
import { getCountry } from "@/data/countries";
import { COUNTRY_META } from "@/lib/utils";
import IndicativeBadge from "@/components/Disclaimer";
import PageHeader from "@/components/PageHeader";

export const dynamicParams = false;

export function generateStaticParams() {
  // Only curated records carry full detail and get an in-app page.
  return curatedUniversities.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const u = getUniversity(params.slug);
  if (!u) return { title: "University not found" };
  return {
    title: `${u.name} — admissions, fees & scholarships | Global Scholar Navigator`,
    description: `${u.name} in ${u.city}: intakes, entry criteria, tuition, scholarships and how Pakistani students apply.`,
  };
}

function Section({ title, children, kicker }: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-200/80 pt-9 first:border-t-0 first:pt-0">
      {kicker && <span className="mono mb-2 block text-accent">{kicker}</span>}
      <h2 className="mb-6 font-serif text-[1.55rem] font-medium text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5">
      <dt className="text-[0.82rem] text-slate-500">{label}</dt>
      <dd className="max-w-[60%] text-right text-[0.86rem] font-medium text-slate-800">{value}</dd>
    </div>
  );
}

export default function UniversityPage({ params }: { params: { slug: string } }) {
  const u = getUniversity(params.slug);
  if (!u) notFound();
  const c = getCountry(u.country)!;
  const m = COUNTRY_META[u.country];

  return (
    <article className="relative px-8 py-14">
      <div className="relative mx-auto max-w-content">
        {/* Breadcrumb */}
        <nav className="mono flex flex-wrap items-center gap-2 text-inkfaint">
          <Link href="/universities" className="transition-colors duration-200 hover:text-accent">Universities</Link>
          <span className="text-line">/</span>
          <Link href={`/country/${u.country}`} className="transition-colors duration-200 hover:text-accent">{m.flag} {m.name}</Link>
          <span className="text-line">/</span>
          <span className="text-inksoft">{u.name}</span>
        </nav>

        {/* Header */}
        <PageHeader image="/campus.jpg" className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.78rem] text-slate-200">
              {m.flag} {u.city}
            </span>
            <span className="mono rounded-full border border-sky-400/30 bg-sky-400/15 px-3 py-1 text-[0.6rem] text-sky-200">{u.type}</span>
            <span className="mono rounded-full border border-white/10 px-3 py-1 text-[0.6rem] text-slate-200">{u.globalRankBand}</span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-white">{u.name}</h1>
          <p className="mt-4 max-w-[58ch] text-[1.1rem] leading-relaxed text-slate-200">{u.blurb}</p>
        </PageHeader>

        {/* Two-column body */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          {/* Main content */}
          <div>
            {/* Admissions */}
            <Section kicker="When to apply" title="Admissions schedule">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(u.intakes ?? []).map((it, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <h3 className="font-serif text-[1.15rem] font-medium text-accent">{it.name}</h3>
                <p className="mt-2.5 text-[0.88rem] text-inksoft"><span className="mono text-inkfaint">Apply: </span>{it.applyWindow}</p>
                <p className="mt-1 text-[0.88rem] text-inksoft"><span className="mono text-inkfaint">Deadline: </span>{it.deadline}</p>
              </div>
            ))}
          </div>
          <IndicativeBadge className="mt-4" />
        </Section>

        {/* Entry criteria */}
        <Section kicker="Will you qualify" title="Entry criteria">
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-[0.9rem]">
              <tbody>
                {[
                  ["Academic / GPA", u.criteria?.gpa],
                  ["IELTS", u.criteria?.ielts],
                  ["TOEFL", u.criteria?.toefl],
                  ["Other tests", u.criteria?.otherTests],
                  ["Notes", u.criteria?.notes],
                ]
                  .filter(([, v]) => v)
                  .map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-paper2/30" : "bg-paper3/40"}>
                      <th className="w-40 border-r border-line px-5 py-3.5 align-top text-[0.84rem] font-medium text-inksoft">{k}</th>
                      <td className="px-5 py-3.5 text-ink">{v}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Fees */}
        <Section kicker="What it costs" title="Fee structure (international students)">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {u.tuition?.undergrad && (
              <div className="glass-card rounded-2xl p-5">
                <span className="mono text-[0.66rem] text-accent">Undergraduate</span>
                <p className="mt-1.5 font-serif text-[1.45rem] text-ink">{u.tuition.undergrad}</p>
              </div>
            )}
            {u.tuition?.postgrad && (
              <div className="glass-card rounded-2xl p-5">
                <span className="mono text-[0.66rem] text-accent">Postgraduate</span>
                <p className="mt-1.5 font-serif text-[1.45rem] text-ink">{u.tuition.postgrad}</p>
              </div>
            )}
          </div>
          {u.tuition?.note && <p className="mt-3 text-[0.88rem] text-inksoft">{u.tuition.note}</p>}
          <IndicativeBadge className="mt-3" />
        </Section>

        {/* Scholarships */}
        <Section kicker="How to fund it" title="Scholarships at this university">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(u.scholarships ?? []).map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-serif text-[1.12rem] font-medium text-ink">{s.name}</h3>
                  <span className="badge-gold mono rounded-full px-2.5 py-0.5 text-[0.56rem]">{s.type}</span>
                </div>
                <p className="text-[0.88rem] leading-snug text-inksoft">{s.detail}</p>
                {s.link && <a href={s.link} target="_blank" rel="noreferrer" className="mono mt-3 inline-block text-accent transition-colors duration-200 hover:text-accent-deep">Official site →</a>}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[0.88rem] text-inksoft">
            Also explore national scholarships open to Pakistani students on the{" "}
            <Link href={`/country/${u.country}`} className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors duration-200 hover:text-accent-deep">{m.name} guide</Link>{" "}
            (e.g. {c.nationalScholarships[0]?.name}).
          </p>
            </Section>
          </div>

          {/* Sidebar — At a glance */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="elev-card rounded-2xl p-6">
              <h2 className="font-serif text-[1.2rem] font-semibold text-slate-900">At a glance</h2>
              <dl className="mt-4 divide-y divide-slate-100">
                <Fact label="Country" value={<span className="inline-flex items-center gap-1.5">{m.flag} {m.name}</span>} />
                <Fact label="City" value={u.city} />
                <Fact label="Type" value={u.type} />
                <Fact label="Global rank" value={u.globalRankBand} />
                <Fact label="Levels" value={u.levels.join(" · ")} />
                {u.tuition?.undergrad && <Fact label="Tuition (UG)" value={u.tuition.undergrad} />}
                {u.tuition?.postgrad && <Fact label="Tuition (PG)" value={u.tuition.postgrad} />}
              </dl>
              <div className="mt-5 flex flex-col gap-2.5">
                <a href={u.admissionsUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-accent px-5 py-3 text-center text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow">
                  Official admissions →
                </a>
                <a href={u.website} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-[0.9rem] font-semibold text-slate-700 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
                  University website
                </a>
              </div>
              <IndicativeBadge className="mt-4" />
            </div>

            {u.popularFields.length > 0 && (
              <div className="elev-card rounded-2xl p-6">
                <h3 className="mono mb-3 text-slate-500">Popular fields</h3>
                <div className="flex flex-wrap gap-1.5">
                  {u.popularFields.map((f) => (
                    <span key={f} className="rounded-md bg-slate-100 px-2.5 py-1 text-[0.72rem] font-medium text-slate-600">{f}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Pakistani path — dark band */}
        <section className="relative my-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 text-slate-100 shadow-[0_30px_70px_-40px_rgba(2,6,23,0.7)] md:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full bg-accent/20 blur-[120px]" aria-hidden />
          <div className="relative">
            <span className="mono mb-2 block text-sky-300">From Pakistan</span>
            <h2 className="mb-6 font-serif text-[1.55rem] font-medium text-white">How a Pakistani student applies here</h2>
            {(u.pakistaniStudentNotes?.length ?? 0) > 0 && (
              <ul className="mb-7 space-y-2.5">
                {(u.pakistaniStudentNotes ?? []).map((n, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-[0.92rem] text-slate-100">
                    <span className="mt-0.5 text-sky-300">★</span>{n}
                  </li>
                ))}
              </ul>
            )}
            <p className="mono mb-4 text-sky-300">The {m.name} route, step by step</p>
            <ol className="space-y-2.5">
              {c.applicationPath.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mono flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent text-[0.62rem] font-semibold text-white ring-1 ring-white/20">
                    {i + 1}
                  </span>
                  <span className="text-[0.92rem] leading-snug text-slate-200">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mono mb-2 text-sky-300">{c.visa.name} · financial requirement</p>
              <p className="text-[0.94rem] leading-relaxed text-slate-200">{c.visa.financialRequirement}</p>
              <Link href={`/country/${u.country}`} className="mono mt-4 inline-block text-sky-300 transition-colors duration-200 hover:text-sky-200">
                Full {m.name} visa &amp; finance guide →
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider" />
        <div className="pt-8">
          <Link href={`/country/${u.country}`} className="mono text-accent transition-colors duration-200 hover:text-accent-deep">
            ← More universities in {m.name}
          </Link>
        </div>
      </div>
    </article>
  );
}
