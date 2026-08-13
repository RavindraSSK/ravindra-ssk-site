import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", ".next-build/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
  {
    files: ["app/opengraph-image.tsx", "app/ssk-ai/opengraph-image.tsx", "app/ssk-ai/[slug]/opengraph-image.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
