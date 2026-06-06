import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Refined surface system — clean light editorial base
        paper: "#ffffff",
        paper2: "#f8fafc",
        paper3: "#eef2f7",
        surface: "#e2e8f0",
        // Text hierarchy
        ink: "#0f172a",
        inksoft: "#475569",
        inkfaint: "#94a3b8",
        // Primary — enterprise blue
        accent: { DEFAULT: "#2563eb", deep: "#1d4ed8", dark: "#1e40af", glow: "rgba(37,99,235,0.14)" },
        // Supporting neutrals
        gold: { DEFAULT: "#64748b", deep: "#475569", soft: "rgba(100,116,139,0.12)" },
        mint: { DEFAULT: "#64748b", deep: "#475569" },
        // Danger / attention
        coral: "#dc2626",
        // Borders
        line: "rgba(148,163,184,0.22)",
        linesoft: "rgba(148,163,184,0.12)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { content: "1500px" },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.22,.68,.36,1) forwards",
        "fade-in": "fade-in .6s ease forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
      boxShadow: {
        glow: "0 0 28px -10px rgba(37,99,235,0.22)",
        "glow-lg": "0 0 56px -16px rgba(37,99,235,0.18)",
        "glow-gold": "0 0 24px -10px rgba(100,116,139,0.14)",
        card: "0 12px 30px -18px rgba(15,23,42,0.18), 0 0 0 1px rgba(148,163,184,0.08)",
        "card-hover": "0 18px 42px -18px rgba(37,99,235,0.16), 0 0 0 1px rgba(37,99,235,0.12)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.85)",
      },
    },
  },
  plugins: [],
};
export default config;
