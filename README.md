# 🧭 Global Scholar Navigator

A **Next.js** platform that catalogues universities across the **USA, UK, Germany and Australia** and, for each one, shows the four things a student actually needs to decide:

1. **Admissions schedule** — intakes, application windows, deadlines
2. **Entry criteria** — GPA, IELTS/TOEFL, SAT/GRE/GMAT where relevant
3. **Fee structure** — indicative international tuition (and which countries are tuition-free)
4. **Scholarships** — university + national funding open to Pakistani students

…plus a **Pakistan-specific application path** for every country (APS for Germany, the UK's TB test and 28‑day funds rule, the US I‑20/SEVIS flow, Australia's Subclass 500 Genuine Student requirement, and more).

---

## ✨ What's inside

| Page | Route | What it does |
|------|-------|--------------|
| Home | `/` | Hero, the four country playbooks, what you get per university, featured list |
| All universities | `/universities` | Live client-side **search + filter** by country, level and field |
| Country guide | `/country/[country]` | Why study here, visa + finances, step-by-step path, national scholarships, that country's universities |
| University detail | `/university/[slug]` | Full breakdown: schedule, criteria table, fees, scholarships, Pakistan route |

The catalogue lists **every university in all four countries** — ~2,900 institutions. It's a two-tier dataset:

- **23 curated flagship records** carry the full breakdown (admissions schedule, entry criteria, fees, scholarships, Pakistan path) and open to their own in-app detail page.
- **The complete country index** (`src/data/generated.ts`) is built from the open [Hipolabs university list](https://github.com/Hipo/university-domains-list) — name, location and official website for everything else. These cards link straight to the university's official site.

Both tiers appear together in search and on each country page (curated first), with **load-more pagination** so the full list stays fast. See **Extending the dataset** below to enrich more records.

---

## 🛠 Tech stack

- **Next.js 14** (App Router, React Server Components, static generation)
- **TypeScript** throughout
- **Tailwind CSS** with a custom editorial design system (deep emerald + saffron on warm paper)
- **Fraunces** (display) + **Hanken Grotesk** (body) via Google Fonts
- No database required — content is a typed, version-controlled dataset (`src/data`). This keeps the MVP fast, free to host, and easy to review. A DB/CMS can be added later (see roadmap).

---

## 🚀 Getting started

> Requires **Node.js 18.17+** (Node 20 recommended).

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev
# → open http://localhost:3000

# 3. build for production
npm run build
npm run start
```

That's it. The site is fully static and can be deployed to **Vercel** (one click), Netlify, Cloudflare Pages, or any Node host.

---

## 📁 Project structure

```
src/
├── app/
│   ├── layout.tsx              # root layout, fonts, navbar/footer
│   ├── globals.css             # Tailwind + base styles
│   ├── page.tsx                # home
│   ├── not-found.tsx           # 404
│   ├── universities/page.tsx   # searchable catalogue
│   ├── country/[country]/page.tsx
│   └── university/[slug]/page.tsx
├── components/
│   ├── Navbar.tsx  Footer.tsx
│   ├── UniversityCard.tsx
│   ├── SearchFilter.tsx        # "use client" — search + filter logic
│   ├── CountryBadge.tsx  Disclaimer.tsx
├── data/
│   ├── types.ts                # University / CountryGuide types
│   ├── countries.ts            # per-country visa, finance, Pakistani path
│   └── universities.ts         # the university catalogue
└── lib/utils.ts                # country metadata helpers
```

---

## ➕ Extending the dataset

**To add a university:** append one typed object to the array in `src/data/universities.ts`. TypeScript will tell you if a field is missing. The new university automatically appears in search, its country page, and gets its own static detail page on the next build.

**To add a country:** add an entry to `src/data/countries.ts` and the `COUNTRY_META` map in `src/lib/utils.ts`.

**To scale to *all* universities** (the long-term goal), you have two complementary sources:

- **Breadth (names/domains):** the open [Hipolabs university list](https://github.com/Hipo/university-domains-list) provides thousands of universities by country — good for a complete index.
- **Depth (admissions/fees/scholarships):** this is not available in any single open dataset and realistically needs curation or per-university scraping of official admissions pages. The recommended pattern is to keep the curated rich records (like this starter set) and progressively enrich the broader index.

A natural next step is to move `src/data` into a headless CMS (e.g. Sanity, Contentful) or a database (Postgres/Prisma) and fetch at build time, keeping the same `University` / `CountryGuide` types as the contract.

---

## ⚠️ Important: data accuracy & disclaimer

All tuition, deadlines, criteria, visa figures and scholarship details are **indicative**, based on publicly available 2025–2026 guidance, and are clearly marked with an "Indicative · verify on official site" badge in the UI. Every university links to its **official admissions page**.

This platform is an **information and planning aid, not a licensed immigration or financial advisor**. Rules and figures change frequently and vary by program — always confirm critical details on the official university or embassy website before acting or paying anything.

Country-level figures reflected in this build (confirm before relying on them):
- 🇩🇪 Germany blocked account: **€11,904** for 2026 (€992/month)
- 🇬🇧 UK maintenance: **£1,529/month** (London) / **£1,171/month** (outside) for up to 9 months + 28‑day rule
- 🇦🇺 Australia Subclass 500: **AUD 29,710/year** living costs (2026)
- 🇺🇸 USA F‑1: proof of funds equal to the cost stated on the I‑20 (no fixed figure)

---

## 🗺 Roadmap ideas

- Scholarship finder with eligibility matching (HEC, DAAD, Chevening, Fulbright)
- Live PKR cost conversion via an FX API
- SOP / personal-statement coach
- Per-application document checklist + deadline tracker
- Add Canada, Schengen states, and more
- Urdu / regional-language UI

---

Built as a starter foundation — clone it, expand the dataset, and ship.
# Global-Scholar
