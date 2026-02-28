import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 新配色方案 */
        "bg-primary": "#0a0d14",
        "bg-secondary": "#11131a",
        "bg-tertiary": "#1a1d26",
        "accent-primary": "#38bdf8",
        "accent-secondary": "#fbbf24",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",

        /* 向后兼容的霓虹色 */
        "neon-blue": "#38bdf8",
        "neon-purple": "#a855f7",
        "neon-pink": "#ec4899",

        /* 向后兼容的旧色名 */
        "dark-bg": "#0a0d14",
        "dark-card": "#11131a",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
