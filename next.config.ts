import type { NextConfig } from "next";

// Media (images, videos, PDFs) is served from Cloudflare R2 via the public base
// URL in NEXT_PUBLIC_ASSET_BASE_URL. Deriving the host here keeps next/image's
// allow-list in sync with the env var, and lets us swap r2.dev for a custom
// domain later by changing one value.
const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE_URL;
const assetHost = assetBase ? new URL(assetBase).hostname : undefined;

const nextConfig: NextConfig = {
  sassOptions: {
    // Bootstrap 5 still ships @import partials; silence Dart Sass deprecation noise.
    quietDeps: true,
  },
  images: {
    remotePatterns: assetHost
      ? [{ protocol: "https", hostname: assetHost }]
      : [],
  },
};

export default nextConfig;
