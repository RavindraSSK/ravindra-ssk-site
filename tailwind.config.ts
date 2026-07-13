import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        "canvas-soft": "rgb(var(--canvas-soft) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
        "navy-soft": "rgb(var(--navy-soft) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        glass: "rgb(var(--glass) / <alpha-value>)",
        glow: "rgb(var(--glow) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glass:
          "0 20px 44px rgba(17, 40, 86, 0.1), 0 8px 20px rgba(17, 40, 86, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.86)",
        float:
          "0 28px 72px rgba(17, 40, 86, 0.14), 0 12px 30px rgba(17, 40, 86, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(242, 247, 255, 1), rgba(236, 243, 252, 0.98) 44%, rgba(247, 250, 255, 1) 100%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
