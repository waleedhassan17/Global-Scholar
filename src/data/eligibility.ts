import { MainField } from "./fields";

/**
 * Structured eligibility data for the curated flagship universities — the set
 * that carries full admission criteria. `minGpa` is an INDICATIVE minimum on a
 * 4.0 scale (typical competitive bar for an international applicant); `disciplines`
 * are the main fields each university is mapped to for the matcher.
 *
 * The broader generated index has no published criteria, so the matcher operates
 * on these curated records where the data is reliable.
 */
export interface Eligibility {
  /** Indicative minimum CGPA on a 4.0 scale. */
  minGpa: number;
  disciplines: MainField[];
}

export const eligibility: Record<string, Eligibility> = {
  // ── USA ──
  mit: { minGpa: 3.9, disciplines: ["Computer Science", "Data Science & AI", "Engineering", "Economics & Finance", "Natural Sciences"] },
  stanford: { minGpa: 3.9, disciplines: ["Computer Science", "Data Science & AI", "Engineering", "Business & Management", "Architecture & Design"] },
  "uc-berkeley": { minGpa: 3.8, disciplines: ["Computer Science", "Data Science & AI", "Engineering", "Business & Management", "Economics & Finance"] },
  "carnegie-mellon": { minGpa: 3.6, disciplines: ["Computer Science", "Data Science & AI", "Engineering", "Business & Management", "Economics & Finance"] },
  uiuc: { minGpa: 3.5, disciplines: ["Computer Science", "Engineering", "Business & Management", "Natural Sciences"] },
  "arizona-state": { minGpa: 3.0, disciplines: ["Engineering", "Business & Management", "Computer Science", "Natural Sciences", "Social Sciences & Humanities"] },

  // ── UK ──
  oxford: { minGpa: 3.7, disciplines: ["Social Sciences & Humanities", "Computer Science", "Medicine & Health", "Law", "Economics & Finance"] },
  cambridge: { minGpa: 3.7, disciplines: ["Natural Sciences", "Engineering", "Computer Science", "Economics & Finance"] },
  imperial: { minGpa: 3.5, disciplines: ["Engineering", "Computer Science", "Medicine & Health", "Business & Management", "Natural Sciences", "Data Science & AI"] },
  ucl: { minGpa: 3.3, disciplines: ["Computer Science", "Economics & Finance", "Architecture & Design", "Law", "Medicine & Health"] },
  manchester: { minGpa: 3.0, disciplines: ["Engineering", "Computer Science", "Business & Management", "Economics & Finance"] },
  edinburgh: { minGpa: 3.0, disciplines: ["Computer Science", "Data Science & AI", "Medicine & Health", "Business & Management"] },

  // ── Germany ──
  tum: { minGpa: 3.0, disciplines: ["Engineering", "Computer Science", "Business & Management", "Data Science & AI"] },
  "lmu-munich": { minGpa: 3.0, disciplines: ["Natural Sciences", "Economics & Finance", "Medicine & Health", "Law", "Data Science & AI"] },
  "rwth-aachen": { minGpa: 3.0, disciplines: ["Engineering", "Computer Science"] },
  "tu-berlin": { minGpa: 2.8, disciplines: ["Computer Science", "Engineering", "Architecture & Design", "Data Science & AI"] },
  heidelberg: { minGpa: 3.0, disciplines: ["Natural Sciences", "Medicine & Health", "Computer Science", "Data Science & AI"] },

  // ── Australia ──
  melbourne: { minGpa: 3.0, disciplines: ["Computer Science", "Business & Management", "Engineering", "Medicine & Health", "Data Science & AI"] },
  sydney: { minGpa: 3.0, disciplines: ["Engineering", "Business & Management", "Computer Science", "Architecture & Design", "Medicine & Health"] },
  anu: { minGpa: 3.0, disciplines: ["Computer Science", "Social Sciences & Humanities", "Natural Sciences", "Economics & Finance"] },
  unsw: { minGpa: 3.0, disciplines: ["Engineering", "Business & Management", "Computer Science", "Economics & Finance", "Architecture & Design"] },
  monash: { minGpa: 2.8, disciplines: ["Medicine & Health", "Engineering", "Computer Science", "Business & Management", "Data Science & AI"] },
  uq: { minGpa: 2.8, disciplines: ["Engineering", "Natural Sciences", "Business & Management", "Computer Science"] },
};
