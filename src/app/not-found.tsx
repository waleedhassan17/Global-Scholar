import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <section className="relative px-8 py-32">
      <div className="relative mx-auto max-w-content">
        <PageHeader image="/campus.jpg" align="center" className="mx-auto max-w-3xl">
          <span className="mono text-sky-300">404</span>
          <h1 className="mt-3 font-serif text-[clamp(2rem,5vw,3.4rem)] font-medium text-white">We couldn&rsquo;t find that page.</h1>
          <p className="mx-auto mt-4 max-w-md text-[1.05rem] text-slate-200">
            The university or country you&rsquo;re looking for isn&rsquo;t in the catalogue yet.
          </p>
          <Link href="/universities" className="mt-9 inline-block rounded-xl bg-accent px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow">
            Browse all universities →
          </Link>
        </PageHeader>
      </div>
    </section>
  );
}
