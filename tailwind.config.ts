import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--c-bg"),
        surface: withAlpha("--c-surface"),
        "surface-hover": withAlpha("--c-surface-hover"),
        border: withAlpha("--c-border"),
        ink: withAlpha("--c-ink"),
        muted: withAlpha("--c-muted"),
        faint: withAlpha("--c-faint"),
        accent: {
          DEFAULT: withAlpha("--c-accent"),
          hover: withAlpha("--c-accent-hover"),
          soft: withAlpha("--c-accent-soft"),
        },
        success: withAlpha("--c-accent"),
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
        wide: "1280px",
        prose: "680px",
        readable: "620px",
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 6.2vw, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        display: ["clamp(2.25rem, 4.6vw, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.012em" }],
        heading: ["clamp(1.9rem, 3.2vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
