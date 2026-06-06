import { universities } from "@/data/universities";
import SearchFilter from "@/components/SearchFilter";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "All Universities — Global Scholar Navigator",
  description: "Search and filter universities across the USA, UK, Germany and Australia.",
};

export default function UniversitiesPage() {
  return (
    <section className="relative px-8 py-18">
      <div className="relative mx-auto max-w-content pt-8">
        <PageHeader image="/catalogue.jpg">
          <span className="mono mb-3 block text-sky-300">The catalogue</span>
          <h1 className="max-w-[18ch] font-serif text-[clamp(2.2rem,4.8vw,3.6rem)] font-medium leading-tight tracking-tight text-white">
            Find your university.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[1.08rem] leading-relaxed text-slate-200">
            Filter by country, study level or field. Every record opens to admissions schedules, criteria, fees,
            scholarships and a Pakistan-specific application path.
          </p>
        </PageHeader>
        <div className="mt-8">
          <SearchFilter data={universities} />
        </div>
      </div>
    </section>
  );
}
