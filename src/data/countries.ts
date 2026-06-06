import { CountryGuide } from "./types";

/**
 * Country-level guidance for students applying from Pakistan.
 * Visa & financial figures are anchored to 2026 published guidance but are
 * INDICATIVE — always confirm on the official embassy / Home Affairs site
 * before acting. Sources noted inline; see README for the full list.
 */
export const countries: Record<string, CountryGuide> = {
  usa: {
    code: "usa",
    name: "United States",
    flag: "🇺🇸",
    summary:
      "The largest destination for global research and STEM, with the widest range of universities and assistantship funding.",
    whyStudyHere: [
      "Unmatched breadth: ~4,000 institutions across every field and budget level.",
      "Strong funding culture at PhD level — assistantships and tuition waivers are common.",
      "Optional Practical Training (OPT) gives up to 3 years of post-study work for STEM graduates.",
      "F-1 visa issuances to Pakistani students hit record highs in 2024–2025.",
    ],
    visa: {
      name: "F-1 Student Visa",
      financialRequirement:
        "Proof of funds for the first year of study (tuition + living costs as stated on the I-20). There is no single fixed figure — it equals the cost shown on your I-20, often US$35,000–75,000+ depending on the school.",
      keyDocuments: [
        "Form I-20 issued by the university (after admission + financial proof)",
        "SEVIS I-901 fee receipt (US$350)",
        "DS-160 confirmation page",
        "Valid passport, photo, admission letter",
        "Bank statements / sponsor affidavit covering first-year costs",
      ],
      notes: [
        "You apply for the I-20 only AFTER you are admitted and have shown financial proof to the university.",
        "Book the visa interview at the U.S. Embassy Islamabad or Consulate Karachi early — wait times vary.",
        "The interview focuses on genuine student intent and ties to Pakistan.",
      ],
    },
    applicationPath: [
      "Shortlist universities and check each program's GPA, TOEFL/IELTS and (for some) SAT/GRE/GMAT requirements.",
      "Sit required tests: TOEFL or IELTS for English; SAT/ACT for undergrad; GRE/GMAT for many grad programs.",
      "Prepare transcripts, SOP/personal statement, and 2–3 recommendation letters.",
      "Apply online (Common App for undergrad; program portals for grad). Pay application fees (~US$50–100 each).",
      "Receive admission + financial documentation, then request your I-20.",
      "Pay the SEVIS I-901 fee, complete the DS-160, and book the F-1 visa interview.",
      "Attend the interview with financial proof, then plan travel and SEVIS-compliant arrival.",
    ],
    nationalScholarships: [
      {
        name: "Fulbright Foreign Student Program (USEFP)",
        detail:
          "Fully funded Master's/PhD scholarships for Pakistani students, administered by the U.S. Educational Foundation in Pakistan.",
        type: "Full",
        link: "https://www.usefp.org/",
      },
      {
        name: "University assistantships (TA/RA)",
        detail:
          "Most funded PhD and many Master's offers include a tuition waiver plus a stipend in return for teaching/research.",
        type: "Full (funded)",
      },
    ],
    pakistanSpecific: [
      "Pakistani degrees (HEC-recognised) are widely accepted; some grad programs ask for a credential evaluation (WES/ECE).",
      "Get academic documents attested by HEC where required before submitting.",
      "F-1 interviews are conducted at the U.S. Mission in Islamabad and Karachi.",
    ],
  },

  uk: {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    summary:
      "One-year Master's degrees, globally ranked universities, and a streamlined visa — Pakistan is now a top-3 source of new UK students.",
    whyStudyHere: [
      "Master's degrees are typically just one year — faster and cheaper overall.",
      "Graduate Route lets you stay and work for up to 2 years after graduating.",
      "Pakistan rose to the UK's 3rd largest source of new international students in 2024.",
      "Clear, points-based Student visa with a predictable document checklist.",
    ],
    visa: {
      name: "Student Visa (formerly Tier 4)",
      financialRequirement:
        "Maintenance funds of £1,529/month for London or £1,171/month outside London (for up to 9 months), PLUS any unpaid first-year tuition. Funds must be held for 28 consecutive days (the '28-day rule').",
      keyDocuments: [
        "CAS (Confirmation of Acceptance for Studies) from the university",
        "Bank statements proving maintenance funds held 28 days",
        "Valid passport and TB test certificate (required for Pakistan)",
        "Approved English test (IELTS for UKVI / accepted alternatives)",
        "Immigration Health Surcharge (IHS) payment (~£1,035 per year)",
      ],
      notes: [
        "The 28-day rule is the most common reason for refusal — your balance must never dip below the required total during that window.",
        "A TB test from an IOM-approved clinic is mandatory for applicants from Pakistan.",
        "The Student visa application fee is around £558 (2026).",
      ],
    },
    applicationPath: [
      "Choose courses and check entry requirements (most Master's want a 2:1 equivalent / strong GPA + IELTS).",
      "Sit IELTS for UKVI (or an accepted English test) at the required band.",
      "Apply directly via each university's portal (no central system for postgrad; UCAS for undergrad).",
      "Accept your offer, pay any tuition deposit, and receive your CAS.",
      "Prepare 28 days of bank statements and take your TB test at an IOM-approved clinic.",
      "Pay the IHS and visa fee, complete the online Student visa application, and give biometrics.",
      "Receive your visa/eVisa and plan arrival before the course start date.",
    ],
    nationalScholarships: [
      {
        name: "Chevening Scholarships",
        detail:
          "UK government fully-funded Master's scholarships; Pakistan is one of the largest Chevening cohorts.",
        type: "Full",
        link: "https://www.chevening.org/",
      },
      {
        name: "Commonwealth Scholarships",
        detail:
          "Fully funded Master's/PhD for students from Commonwealth countries including Pakistan.",
        type: "Full",
        link: "https://cscuk.fcdo.gov.uk/",
      },
    ],
    pakistanSpecific: [
      "HEC-recognised Pakistani Bachelor's degrees are accepted; a 4-year BS is usually treated as equivalent to a UK Bachelor's (honours).",
      "TB testing is compulsory for Pakistani applicants — book early.",
      "Many universities have Pakistan-specific entry tables mapping your CGPA to UK classifications.",
    ],
  },

  germany: {
    code: "germany",
    name: "Germany",
    flag: "🇩🇪",
    summary:
      "Mostly tuition-free public universities and a strong engineering reputation — but Pakistani students must clear the APS certificate first.",
    whyStudyHere: [
      "Most public universities charge NO tuition fees, even for international students (only a small semester contribution).",
      "World-leading in engineering, automotive, and applied sciences.",
      "18-month post-study job-seeker residence permit after graduation.",
      "Strong, English-taught Master's offerings, especially in STEM.",
    ],
    visa: {
      name: "National (D) Student Visa",
      financialRequirement:
        "Proof of funds via a Blocked Account (Sperrkonto): €11,904 for 2026 (€992/month for 12 months). A full scholarship or sponsorship can substitute.",
      keyDocuments: [
        "APS Certificate (mandatory for Pakistani applicants — see below)",
        "University admission letter (Zulassungsbescheid)",
        "Blocked account confirmation (€11,904)",
        "Health insurance proof and valid passport",
        "Academic transcripts (often via uni-assist)",
      ],
      notes: [
        "Public universities are largely tuition-free; budget mainly for living costs and the blocked account.",
        "Apply for the visa at the German Embassy Islamabad / Consulate Karachi.",
        "Many applications are processed through the uni-assist portal.",
      ],
    },
    applicationPath: [
      "Obtain your APS Certificate (academic verification) — this is required BEFORE applying to German universities.",
      "Find programs (use DAAD's database) and check whether they need German or are English-taught.",
      "Prepare documents and apply via uni-assist or directly to the university.",
      "Receive admission, then open a Blocked Account (€11,904) with an approved provider.",
      "Arrange health insurance and gather visa documents (including the APS certificate).",
      "Apply for the National (D) visa at the German mission in Pakistan and attend the appointment.",
      "Travel, register your address (Anmeldung), and enrol at the university.",
    ],
    nationalScholarships: [
      {
        name: "DAAD Scholarships",
        detail:
          "The German Academic Exchange Service funds Master's/PhD study and research for Pakistani students across many programs.",
        type: "Full / Partial",
        link: "https://www.daad.de/en/",
      },
      {
        name: "Deutschlandstipendium",
        detail:
          "Merit-based monthly support (€300/month) co-funded by the government and private sponsors at participating universities.",
        type: "Merit",
      },
    ],
    pakistanSpecific: [
      "APS certification is MANDATORY for Pakistani students before a German university application or visa — start this early as it takes time.",
      "HEC attestation of documents is typically required as part of the APS process.",
      "A 4-year BS from an HEC-recognised university is generally accepted for Master's entry.",
    ],
  },

  australia: {
    code: "australia",
    name: "Australia",
    flag: "🇦🇺",
    summary:
      "High quality of life, strong post-study work rights, and a clear (if scrutiny-heavy) Subclass 500 visa.",
    whyStudyHere: [
      "Generous post-study work visa (Temporary Graduate visa) of 2+ years.",
      "8 of Australia's universities sit in the global top 100 bands.",
      "Strong support systems and large international student communities.",
      "Clear visa framework, though financial scrutiny rose sharply in 2025–2026.",
    ],
    visa: {
      name: "Student Visa (Subclass 500)",
      financialRequirement:
        "Evidence of access to at least AUD 29,710/year for living costs (2026), plus tuition and travel. Funds must be genuine and traceable.",
      keyDocuments: [
        "Confirmation of Enrolment (CoE) from a CRICOS-registered provider",
        "Genuine Student (GS) statement and supporting evidence",
        "Overseas Student Health Cover (OSHC) for the full visa duration",
        "Financial evidence (savings with deposit history / loan letter)",
        "English proficiency (IELTS 5.5+ typical) and valid passport",
      ],
      notes: [
        "The visa application charge rose sharply — budget around AUD 2,000 (2026); confirm the current figure.",
        "The Genuine Student (GS) requirement replaced the older GTE in 2024; a clear, honest narrative matters.",
        "Financial 'integrity checks' are strict — sudden unexplained deposits are a red flag.",
      ],
    },
    applicationPath: [
      "Pick a CRICOS-registered course and check entry requirements (academic + IELTS).",
      "Sit IELTS (or accepted English test) and prepare transcripts.",
      "Apply to the university; receive a Letter of Offer, accept it and pay the deposit.",
      "Receive your Confirmation of Enrolment (CoE).",
      "Arrange OSHC and prepare financial evidence (with at least ~3 months of deposit history).",
      "Write your Genuine Student (GS) statement and lodge the Subclass 500 application online.",
      "Complete health checks/biometrics as requested, then plan arrival.",
    ],
    nationalScholarships: [
      {
        name: "Australia Awards Scholarships",
        detail:
          "Australian government fully-funded scholarships for eligible developing-country students, including Pakistan.",
        type: "Full",
        link: "https://www.dfat.gov.au/people-to-people/australia-awards",
      },
      {
        name: "University international merit scholarships",
        detail:
          "Most Australian universities offer 10–50% tuition reductions for high-achieving international applicants.",
        type: "Merit / Partial",
      },
    ],
    pakistanSpecific: [
      "HEC-recognised Pakistani degrees are accepted; some institutions map your CGPA to their own entry scales.",
      "Get academic documents in order early — financial 'genuineness' checks are strict for South Asian applicants.",
      "Apply to the Department of Home Affairs online; there is no Australian visa interview in most cases.",
    ],
  },
};

export const countryList = Object.values(countries);

export function getCountry(code: string): CountryGuide | undefined {
  return countries[code];
}
