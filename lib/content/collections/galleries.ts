import { loadYaml } from "@/lib/content/yaml";
import { assetUrl } from "@/lib/content/assets";
import manifest from "@/lib/content/image-manifest.json";

export interface ImageGalleryDoc {
  title: string;
  image: string;
  slug: string;
  imagesDir: string;
  dateAdded?: string;
  tag?: string;
}

export interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
}

const imageManifest = manifest as Record<string, { width: number; height: number }>;

export function getAllImageGalleries(): ImageGalleryDoc[] {
  return loadYaml<ImageGalleryDoc[]>("galleries/image.yaml");
}

export function getImageGallery(slug: string): ImageGalleryDoc | undefined {
  return getAllImageGalleries().find((g) => g.slug === slug);
}

// A gallery's photos are every manifest image under images/media/<imagesDir>/.
// The manifest carries intrinsic dimensions, which the photo album/lightbox need.
export function getGalleryPhotos(imagesDir: string): GalleryPhoto[] {
  const prefix = `images/media/${imagesDir}/`;
  return Object.keys(imageManifest)
    .filter((k) => k.startsWith(prefix))
    .sort()
    .map((k) => ({
      src: assetUrl(k),
      width: imageManifest[k].width,
      height: imageManifest[k].height,
    }));
}
