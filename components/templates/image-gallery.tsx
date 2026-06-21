import Separator from "../separator";
import GalleryLightbox from "../gallery-lightbox";
import { getGalleryPhotos, type ImageGalleryDoc } from "@/lib/content/collections/galleries";

export default function ImageGalleryTemplate({ gallery }: { gallery: ImageGalleryDoc }) {
  const photos = getGalleryPhotos(gallery.imagesDir).map((p, i) => ({
    ...p,
    alt: `${gallery.title} ${i + 1}`,
  }));

  return (
    <div className="container">
      <Separator />
      <h2 className="text-center mb-2">{gallery.title}</h2>
      <GalleryLightbox photos={photos} />
    </div>
  );
}
