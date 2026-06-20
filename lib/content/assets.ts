import manifest from "./image-manifest.json";

// Media lives on Cloudflare R2; the base URL comes from the environment so the
// provider/domain can change without touching content.
const BASE = process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "";

/**
 * Normalize a YAML media reference to its R2 object key.
 * "../../images/x.jpg" -> "images/x.jpg"; "../docs/y.pdf" -> "docs/y.pdf".
 */
export function assetKey(rawPath: string): string {
  return rawPath.replace(/^(?:\.\.\/)+/, "").replace(/^\/+/, "");
}

/** Full public URL for a media reference (passes through absolute http URLs). */
export function assetUrl(rawPath: string | undefined | null): string {
  if (!rawPath) return "";
  if (/^https?:\/\//.test(rawPath)) return rawPath;
  return `${BASE}/${assetKey(rawPath)}`;
}

export type ImageMeta = { width: number; height: number };

const imageManifest = manifest as Record<string, ImageMeta>;

/** Intrinsic dimensions for a local image (from the build-time manifest). */
export function imageMeta(rawPath: string | undefined | null): ImageMeta | undefined {
  if (!rawPath) return undefined;
  return imageManifest[assetKey(rawPath)];
}
