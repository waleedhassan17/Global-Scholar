import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/70 bg-slate-950 px-8 pb-10 pt-14">
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="font-serif text-[1.02rem] font-semibold text-slate-50">
              Global Scholar
            </Link>
            <p className="mt-4 text-[0.86rem] leading-relaxed text-slate-300">
              University admissions, criteria, fees and scholarships across the USA, UK, Germany and Australia —
              with a clear path for students applying from Pakistan.
            </p>
          </div>
          <div className="mono leading-loose text-slate-400">
            <p className="mb-2 text-[0.68rem] font-semibold text-slate-200">DESTINATIONS</p>
            <Link href="/country/usa" className="block transition-colors duration-200 hover:text-white">United States</Link>
            <Link href="/country/uk" className="block transition-colors duration-200 hover:text-white">United Kingdom</Link>
            <Link href="/country/germany" className="block transition-colors duration-200 hover:text-white">Germany</Link>
            <Link href="/country/australia" className="block transition-colors duration-200 hover:text-white">Australia</Link>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-slate-700/80" />
        <p className="mt-5 max-w-4xl text-[0.76rem] leading-relaxed text-slate-400">
          <strong className="text-slate-200">Disclaimer:</strong> This platform is an information and planning aid, not a licensed immigration or
          financial advisor. Tuition, deadlines, entry criteria, visa rules and exchange rates change frequently and
          vary by program. All figures shown are indicative and based on publicly available 2025–2026 guidance — always
          confirm critical details on the official university or embassy website before acting.
        </p>
      </div>
    </footer>
  );
}
