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
        ink: "#1f211f",
        petal: "#efe7e1",
        berry: "#9f3154",
        accent: "#7b4d5b",
        moss: "#58745c",
        cream: "#f7f7f3",
      },
      boxShadow: {
        soft: "0 22px 55px rgba(31, 33, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
