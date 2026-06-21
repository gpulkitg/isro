import type { MetadataRoute } from "next";

// PWA manifest (parity with the old gatsby-plugin-manifest). Next emits the
// <link rel="manifest"> automatically and serves this at /manifest.webmanifest.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Indian Space Research Organisation",
    short_name: "ISRO",
    description: "Indian Space Research Organisation, Government of India",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
