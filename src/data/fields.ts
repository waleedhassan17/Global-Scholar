/**
 * The main study fields a student picks from in the eligibility matcher.
 * Curated universities are tagged with these via `eligibility.ts`.
 */
export const MAIN_FIELDS = [
  "Computer Science",
  "Data Science & AI",
  "Engineering",
  "Business & Management",
  "Economics & Finance",
  "Medicine & Health",
  "Law",
  "Natural Sciences",
  "Social Sciences & Humanities",
  "Architecture & Design",
] as const;

export type MainField = (typeof MAIN_FIELDS)[number];
