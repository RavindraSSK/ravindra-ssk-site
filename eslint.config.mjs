import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", ".next-build/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
  {
    files: ["app/opengraph-image.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
