/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        "bg-2": "hsl(var(--bg-2) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-card": "hsl(var(--surface-card) / <alpha-value>)",
        "surface-soft": "hsl(var(--surface-soft) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-strong": "hsl(var(--accent-strong) / <alpha-value>)",
        success: "hsl(var(--success) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      },
      maxWidth: {
        content: "1200px"
      },
      spacing: {
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        48: "var(--space-48)",
        64: "var(--space-64)",
        96: "var(--space-96)",
        120: "var(--space-120)"
      },
      fontSize: {
        hero: ["var(--type-hero)", { lineHeight: "1.03", fontWeight: "600", letterSpacing: "-0.03em" }],
        section: ["var(--type-section)", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.02em" }],
        sub: ["var(--type-sub)", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["var(--type-body)", { lineHeight: "1.7" }],
        label: ["var(--type-label)", { lineHeight: "1.4", letterSpacing: "0.12em" }]
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        "card-glow": "var(--shadow-card-hover)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

module.exports = config;
