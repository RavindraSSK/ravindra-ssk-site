/**
 * SSK AI Hub absorbed the publication that used to sit under /explore, so every URL it
 * previously owned is redirected permanently rather than dropped:
 *
 *   /explore/blog                      -> /ssk-ai/tech-content
 *   /explore/<tech article>            -> /ssk-ai/tech-content/<tech article>
 *   /ssk-ai/<edition>                  -> /ssk-ai/tech-news/<edition>
 *
 * The article list is duplicated here as plain strings on purpose: next.config.js is
 * CommonJS and loads before the TypeScript path aliases exist, so it cannot import
 * lib/ssk-ai/tech-content.ts. A test in the build (`npm run lint` + the type checker)
 * will not catch drift, so add the slug in both places when a new article moves.
 */
const MIGRATED_TECH_CONTENT = [
  "us-ai-job-market-guide",
  "web-scraping-python",
  "spatial-context-geoai",
  "grad-cam-flood-detection",
  "civil-engineering-to-geoai",
];

const MIGRATED_EDITIONS = ["ai-technology-updates-august-12-2026"];

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/explore/blog", destination: "/ssk-ai/tech-content", permanent: true },
      ...MIGRATED_TECH_CONTENT.map((slug) => ({
        source: `/explore/${slug}`,
        destination: `/ssk-ai/tech-content/${slug}`,
        permanent: true,
      })),
      ...MIGRATED_EDITIONS.map((slug) => ({
        source: `/ssk-ai/${slug}`,
        destination: `/ssk-ai/tech-news/${slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
