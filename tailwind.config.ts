import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1512",
        charcoal: "#241c18",
        cream: "#f9f2e7",
        sand: "#f2e8db",
        clay: "#3a2e25",
        latte: "#7a6654",
        terracotta: "#c9956a",
        terracottaDark: "#a97748",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
