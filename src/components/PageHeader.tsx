import { ReactNode } from "react";

/**
 * Image-backed page header band — a consistent enterprise pattern used across
 * country, university, catalogue and error pages. A background photo sits under
 * a deep-navy gradient so white content stays readable.
 */
export default function PageHeader({
  image,
  children,
  className = "",
  align = "left",
}: {
  image: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={`relative overflow-hidden rounded-3xl border border-slate-800 shadow-[0_24px_60px_-38px_rgba(2,6,23,0.5)] ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      {/* Left-weighted overlay: dark behind the text, photo stays visible on the right */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(100deg, rgba(2,6,23,0.90) 0%, rgba(15,23,42,0.66) 48%, rgba(15,23,42,0.22) 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-accent" aria-hidden />
      <div
        className={`relative px-8 py-12 text-slate-100 md:px-10 ${align === "center" ? "text-center" : ""}`}
      >
        {children}
      </div>
    </header>
  );
}
