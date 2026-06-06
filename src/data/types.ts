import { MainField } from "./fields";

export type CountryCode = "usa" | "uk" | "germany" | "australia";

export type Level = "Undergraduate" | "Master's" | "PhD";

export interface Intake {
  /** e.g. "Fall (September)" */
  name: string;
  /** Typical application window, indicative */
  applyWindow: string;
  /** Typical hard deadline, indicative */
  deadline: string;
}

export interface Scholarship {
  name: string;
  /** Short description of who it's for / what it covers */
  detail: string;
  /** "Full" | "Partial" | "Merit" | "Need-based" etc. */
  type: string;
  link?: string;
}

export interface Criteria {
  /** Minimum GPA / grade expectation, indicative */
  gpa?: string;
  ielts?: string;
  toefl?: string;
  /** Standardised tests where relevant (SAT/GRE/GMAT) */
  otherTests?: string;
  /** Free-form notes on academic requirements */
  notes?: string;
}

export interface University {
  slug: string;
  name: string;
  country: CountryCode;
  city: string;
  type?: "Public" | "Private";
  /** Approximate global standing band, indicative only */
  globalRankBand?: string;
  website: string;
  admissionsUrl?: string;
  /** Short one-line positioning */
  blurb?: string;
  levels: Level[];
  popularFields: string[];
  intakes?: Intake[];
  criteria?: Criteria;
  /** Indicative annual tuition for international students */
  tuition?: {
    undergrad?: string;
    postgrad?: string;
    note?: string;
  };
  scholarships?: Scholarship[];
  /** University-specific notes for applicants from Pakistan */
  pakistaniStudentNotes?: string[];
  /** Main study fields this university is mapped to (used by search + matcher). */
  disciplines?: MainField[];
  /**
   * True for the hand-curated records that carry full admissions / fees /
   * scholarship detail and get their own in-app detail page. Lightweight
   * generated records (the full country index) link straight to the official site.
   */
  curated?: boolean;
}

export interface CountryGuide {
  code: CountryCode;
  name: string;
  flag: string;
  /** One-line summary */
  summary: string;
  /** Why Pakistani students pick it */
  whyStudyHere: string[];
  visa: {
    name: string;
    financialRequirement: string;
    keyDocuments: string[];
    notes: string[];
  };
  /** Ordered steps a Pakistani student takes, country-specific */
  applicationPath: string[];
  /** Country-level scholarships open to Pakistani students */
  nationalScholarships: Scholarship[];
  /** Anything Pakistan-specific (e.g. APS for Germany) */
  pakistanSpecific: string[];
}
