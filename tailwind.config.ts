import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1982d2",
          dark: "#1267a6",
          light: "#3d9ee0",
          tint: "#e8f3fb",
        },
        ink: "#121518",
        muted: "#606161",
        haze: "#ecedf3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(18, 21, 24, 0.12)",
        soft: "0 4px 20px -8px rgba(18, 21, 24, 0.10)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
