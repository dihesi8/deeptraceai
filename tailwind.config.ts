import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030305",
        "bg-soft": "#07070b",
        card: "rgba(255,255,255,0.035)",
        "card-hover": "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.09)",
        "border-bright": "rgba(255,255,255,0.16)",
        text: "#f5f5f7",
        "text-soft": "#a5a5ae",
        "text-muted": "#686871",
        accent: "#a855f7",
        "accent-light": "#c084fc",
        "accent-dark": "#6d28d9",
        green: "#65ffb2",
        rose: "#f87171",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        bounceChevron: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        waveMove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorSpin: {
          "0%": { transform: "translate(-50%,-50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.6s linear infinite",
        floatY: "floatY 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        bounceChevron: "bounceChevron 1.8s ease-in-out infinite",
        waveMove: "waveMove 12s linear infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        cursorSpin: "cursorSpin 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
