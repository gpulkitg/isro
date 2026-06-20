import Image from "next/image";
import type { CSSProperties } from "react";
import { assetUrl, imageMeta } from "@/lib/content/assets";

type Props = {
  /** Raw YAML media reference, e.g. "../../images/foo.jpg". */
  src?: string | null;
  alt: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
};

// Wraps next/image for R2-hosted media. Uses intrinsic dimensions from the
// build-time manifest; falls back to a plain <img> for assets without dims
// (e.g. SVGs) so the build never fails on a missing size.
export default function MediaImage({ src, alt, className, style, sizes, priority }: Props) {
  const url = assetUrl(src);
  if (!url) return null;

  const meta = imageMeta(src);
  if (!meta) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt={alt} className={className} style={style} />;
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={meta.width}
      height={meta.height}
      className={className}
      style={style}
      sizes={sizes}
      priority={priority}
    />
  );
}
