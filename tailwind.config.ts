import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#201a1e",
        petal: "#f8eef1",
        berry: "#9f3154",
        moss: "#58745c",
        cream: "#fffaf6",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(37, 28, 33, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
