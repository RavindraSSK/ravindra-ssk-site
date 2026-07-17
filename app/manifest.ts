import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravindra SSK",
    short_name: "Ravindra SSK",
    description:
      "Ravindra SSK is an ML & AI Engineer building and evaluating production machine learning systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1023",
    theme_color: "#1B2D5F",
    icons: [
      { src: "/branding/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/branding/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
