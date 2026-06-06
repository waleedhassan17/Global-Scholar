import Link from "next/link";
import { countryList } from "@/data/countries";
import { universities, universitiesByCountry } from "@/data/universities";
import UniversityCard from "@/components/UniversityCard";

const featured = ["mit", "oxford", "tum", "melbourne", "carnegie-mellon", "cambridge"]
  .map((s) => universities.find((u) => u.slug === s)!)
  .filter(Boolean);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Photo background */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" aria-hidden />
        {/* Left-weighted overlay: dark behind the text, photo stays visible on the right */}
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(105deg, rgba(2,6,23,0.90) 0%, rgba(15,23,42,0.64) 46%, rgba(15,23,42,0.20) 100%)",
          }}
        />
        {/* Soft fade into the page below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper" aria-hidden />

        <div className="relative mx-auto max-w-content px-8 pb-28 pt-28">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[0.78rem] font-medium text-slate-100 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            For students applying from Pakistan
          </div>

          <h1 className="max-w-[16ch] font-serif text-[clamp(2.8rem,6.5vw,5.2rem)] font-medium leading-[1.03] tracking-tight text-white">
            Every university. One{" "}
            <span className="text-sky-300">reliable</span>{" "}
            place to compare.
          </h1>

          <p className="mt-7 max-w-[54ch] text-[1.15rem] leading-[1.7] text-slate-200">
            Browse universities across the <span className="font-semibold text-white">USA, UK, Germany and Australia</span> — with each one&rsquo;s
            admissions schedule, entry criteria, fee structure, scholarships, and a clear step-by-step path for how a
            Pakistani student actually applies and proceeds.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/universities"
              className="group rounded-xl bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow"
            >
              Browse all universities
              <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/match"
              className="rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
            >
              Find CS universities
            </Link>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-content grid-cols-2 md:grid-cols-4">
          {[
            { n: `${universities.length}`, l: "Universities catalogued", sub: "and growing" },
            { n: "4", l: "Destination countries", sub: "covered" },
            { n: "115k+", l: "Pakistani students", sub: "studying abroad" },
            { n: "100%", l: "Official links", sub: "to admissions pages" },
          ].map((s, i) => (
            <div key={i} className="group relative border-slate-200 px-7 py-8 [&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b md:[&:nth-child(2)]:border-b-0">
              <div className="stat-value font-serif text-[2.2rem] leading-none text-accent">{s.n}</div>
              <div className="mt-2.5 text-[0.82rem] font-medium text-slate-800">{s.l}</div>
              <div className="text-[0.76rem] text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COUNTRIES */}
      <section id="countries" className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <div className="mb-12">
            <span className="mono mb-3 block text-slate-500">Choose your destination</span>
            <h2 className="max-w-[20ch] font-serif text-[clamp(2rem,4.2vw,3.2rem)] font-medium leading-tight text-ink">
              Four countries. Four very different application playbooks.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {countryList.map((c) => {
              const count = universitiesByCountry(c.code).length;
              return (
                <Link
                  key={c.code}
                  href={`/country/${c.code}`}
                  className="elev-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover-lift"
                >
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="text-[2.6rem]" aria-hidden>{c.flag}</span>
                      <span className="badge-accent mono rounded-full px-3 py-1 text-[0.62rem]">
                        {count} universities
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-[1.55rem] font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-[0.94rem] leading-snug text-inksoft">{c.summary}</p>
                    <div className="mono mt-5 flex items-center gap-2 text-[0.66rem] text-accent">
                      {c.visa.name}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — dark feature band */}
      <section className="px-8 pb-24">
        <div className="relative mx-auto max-w-content overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-10 text-slate-100 shadow-[0_30px_70px_-40px_rgba(2,6,23,0.7)] md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]" aria-hidden />
          <div className="relative">
            <span className="mono mb-4 block text-sky-300">For every single university</span>
            <h2 className="max-w-[22ch] font-serif text-[clamp(1.9rem,3.8vw,2.9rem)] font-medium leading-tight text-white">
              Not just a name and a ranking — the things you actually need to decide.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "📅", t: "Admissions schedule", d: "Intakes, application windows and deadlines so you never miss a cycle." },
                { icon: "📋", t: "Entry criteria", d: "GPA, IELTS/TOEFL and any SAT/GRE/GMAT expectations, by program." },
                { icon: "💰", t: "Fee structure", d: "Indicative international tuition — and which countries are tuition-free." },
                { icon: "🎓", t: "Scholarships", d: "University and national funding open to Pakistani students." },
              ].map((x) => (
                <div key={x.t} className="group">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg ring-1 ring-white/15">
                    {x.icon}
                  </div>
                  <h4 className="font-serif text-[1.2rem] font-medium text-white">{x.t}</h4>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate-300">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 h-px bg-white/10" />
            <p className="mt-6 text-[0.94rem] text-slate-300">
              …plus a <strong className="font-semibold text-sky-300">Pakistan-specific application path</strong> — from APS certificates
              for Germany to the UK&rsquo;s TB test and 28-day funds rule.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-content">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="mono mb-3 block text-slate-500">A few to start with</span>
              <h2 className="font-serif text-[clamp(1.9rem,3.8vw,2.8rem)] font-medium text-ink">Featured universities</h2>
            </div>
            <Link href="/universities" className="mono text-accent transition-all duration-200 hover:text-accent-deep">
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((u) => (
              <UniversityCard key={u.slug} uni={u} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark closing band */}
      <section className="px-8 pb-28">
        <div className="relative mx-auto max-w-content overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-8 py-16 text-center shadow-[0_30px_70px_-40px_rgba(2,6,23,0.7)] md:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(1.8rem,3.6vw,2.7rem)] font-medium leading-tight text-white">
              Your path abroad starts with the right shortlist.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[1rem] leading-relaxed text-slate-300">
              Compare {universities.length.toLocaleString()} universities across four countries — admissions, fees,
              scholarships and a clear route from Pakistan.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/universities" className="rounded-xl bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow">
                Browse all universities →
              </Link>
              <Link href="/match" className="rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10">
                Find CS universities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
