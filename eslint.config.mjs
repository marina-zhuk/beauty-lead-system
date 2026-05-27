import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".next-dev-logs/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",
      ".vercel/**",
      ".tools/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
