/**
 * Canonical site origin, used for metadataBase, sitemap, and robots.
 * Override with NEXT_PUBLIC_SITE_URL to point at a custom domain later
 * (no code change needed — just set the env var in Vercel + .env.local).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://isro-orpin.vercel.app";
