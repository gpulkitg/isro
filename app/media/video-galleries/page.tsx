import { loadYaml } from "@/lib/content/yaml";
import { assetUrl } from "@/lib/content/assets";
import type { VideoGallery } from "@/lib/content/types";
import VideoGalleriesClient from "./video-galleries-client";

export const metadata = { title: "Video Galleries" };

export default function VideoGalleriesPage() {
  const galleries = loadYaml<VideoGallery[]>("galleries/video.yaml");

  // Resolve media URLs server-side so the client child stays serializable.
  const items = galleries.map((g, i) => ({
    id: `${i}-${g.tag ?? g.title}`,
    title: g.title,
    posterUrl: assetUrl(g.poster),
    videoUrl: assetUrl(g.video),
  }));

  return <VideoGalleriesClient items={items} />;
}
