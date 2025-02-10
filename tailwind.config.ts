import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",
        mustard: "var(--mustard)",
        orange: "var(--orange)",
        olive: "var(--olive)",
      },
    },
  },
  plugins: [],
} satisfies Config;
