import type { NextConfig } from "next";
import path from "node:path";

// Media (images, videos, PDFs) is served from Cloudflare R2 via the public base
// URL in NEXT_PUBLIC_ASSET_BASE_URL. Deriving the host here keeps next/image's
// allow-list in sync with the env var, and lets us swap r2.dev for a custom
// domain later by changing one value.
const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE_URL;
const assetHost = assetBase ? new URL(assetBase).hostname : undefined;
const assetOrigin = assetBase ? new URL(assetBase).origin : "";

// Content-Security-Policy tuned to what the site actually loads: same-origin
// assets, R2 media, inline styles (React style props + Bootstrap), and Vercel
// Analytics/Speed Insights (script served same-origin on Vercel; vitals beacon
// to *.vercel-insights.com). 'unsafe-inline' on script-src covers Next's inline
// hydration scripts (no nonce middleware in use).
const csp = [
  "default-src 'self'",
  `img-src 'self' data: ${assetOrigin}`.trim(),
  `media-src 'self' ${assetOrigin}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  `connect-src 'self' ${assetOrigin} https://*.vercel-insights.com`.trim(),
  "font-src 'self' data:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  sassOptions: {
    // Resolve `@import "bootstrap/scss/..."` and quiet Dart Sass deprecation
    // noise from Bootstrap's still-@import-based stylesheets.
    loadPaths: [path.join(process.cwd(), "node_modules")],
    quietDeps: true,
    silenceDeprecations: ["import", "global-builtin", "color-functions", "mixed-decls"],
  },
  images: {
    remotePatterns: assetHost
      ? [{ protocol: "https", hostname: assetHost }]
      : [],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
