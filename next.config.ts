import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Bootstrap 5 still ships @import partials; silence Dart Sass deprecation noise.
    quietDeps: true,
  },

  images: {
    // R2/CDN host is added once the public asset base URL is provisioned
    // (NEXT_PUBLIC_ASSET_BASE_URL). Example:
    // remotePatterns: [{ protocol: "https", hostname: "pub-xxxx.r2.dev" }],
    remotePatterns: [],
  },
};

export default nextConfig;
