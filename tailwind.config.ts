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
        ink: "#2a1714",
        petal: "#f1ded4",
        berry: "#7b4b40",
        accent: "#b77763",
        moss: "#6f7d62",
        cream: "#fbf7f3",
        line: "#e8d8cf",
      },
      boxShadow: {
        soft: "0 28px 70px rgba(72, 45, 36, 0.10)",
        panel: "0 18px 45px rgba(95, 63, 53, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
