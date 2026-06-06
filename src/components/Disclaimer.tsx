export default function IndicativeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`badge-gold mono inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6rem] ${className}`}
      title="Figures are indicative — always confirm on the official website."
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      </svg>
      Indicative · verify on official site
    </span>
  );
}
