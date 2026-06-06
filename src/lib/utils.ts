import { CountryCode } from "@/data/types";

export const COUNTRY_META: Record<CountryCode, { name: string; flag: string; accent: string }> = {
  usa: { name: "United States", flag: "🇺🇸", accent: "#2563eb" },
  uk: { name: "United Kingdom", flag: "🇬🇧", accent: "#64748b" },
  germany: { name: "Germany", flag: "🇩🇪", accent: "#475569" },
  australia: { name: "Australia", flag: "🇦🇺", accent: "#0f766e" },
};

export function countryName(code: CountryCode) {
  return COUNTRY_META[code]?.name ?? code;
}
