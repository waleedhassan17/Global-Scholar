import Link from "next/link";

const navLinks = [
  { href: "/universities", label: "All Universities", className: "sm:block" },
  { href: "/match", label: "CS matcher", className: "sm:block" },
  { href: "/country/usa", label: "USA", className: "lg:block" },
  { href: "/country/uk", label: "UK", className: "lg:block" },
  { href: "/country/germany", label: "Germany", className: "lg:block" },
  { href: "/country/australia", label: "Australia", className: "lg:block" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-content items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2.5 font-serif text-[1.1rem] font-semibold tracking-tight text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-sans text-[0.95rem] font-bold text-white shadow-sm">
            G
          </span>
          Global Scholar
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hidden rounded-lg px-3.5 py-2 text-[0.88rem] font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 ${l.className}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-3 h-5 w-px bg-slate-200" />
          <Link
            href="/universities"
            className="ml-3 rounded-xl bg-accent px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-glow"
          >
            Browse →
          </Link>
        </div>
      </div>
    </nav>
  );
}
