import { loadYaml } from "@/lib/content/yaml";
import { assetUrl } from "@/lib/content/assets";
import type { ImageGallery } from "@/lib/content/types";
import ImageGalleriesClient from "./image-galleries-client";

export const metadata = { title: "Image Galleries" };

export default function ImageGalleriesPage() {
  const galleries = loadYaml<ImageGallery[]>("galleries/image.yaml");

  // Sort by dateAdded descending (matches the Gatsby query sort order).
  const sorted = [...galleries].sort((a, b) =>
    (b.dateAdded ?? "").localeCompare(a.dateAdded ?? "")
  );

  // Resolve image URLs server-side so the client child stays serializable.
  const items = sorted.map((g) => ({
    title: g.title,
    slug: g.slug,
    imageUrl: assetUrl(g.image),
  }));

  return <ImageGalleriesClient items={items} />;
}
