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
        ink: "#24211f",
        petal: "#f4ece2",
        berry: "#9f3154",
        accent: "#8b5e34",
        moss: "#58745c",
        cream: "#fbf7f1",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(36, 33, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
