import EligibilityMatcher from "@/components/EligibilityMatcher";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Computer Science universities you can apply to — Global Scholar Navigator",
  description:
    "Enter your degree level and CGPA to see every Computer Science university you can apply to across the USA, UK, Germany and Australia.",
};

export default function MatchPage() {
  return (
    <section className="relative px-8 py-18">
      <div className="relative mx-auto max-w-content pt-8">
        <PageHeader image="/campus.jpg">
          <span className="mono mb-3 block text-sky-300">Computer Science matcher</span>
          <h1 className="max-w-[22ch] font-serif text-[clamp(2.2rem,4.8vw,3.6rem)] font-medium leading-tight tracking-tight text-white">
            Every Computer Science university you can apply to.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[1.08rem] leading-relaxed text-slate-200">
            Choose your degree level and enter your CGPA — we&rsquo;ll list all the Computer Science universities open to
            you across the USA, UK, Germany and Australia, flagship records gated on your GPA.
          </p>
        </PageHeader>

        <div className="mt-8">
          <EligibilityMatcher />
        </div>
      </div>
    </section>
  );
}
