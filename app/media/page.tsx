import Link from "next/link";
import { loadYaml, listYamlFiles } from "@/lib/content/yaml";
import { assetUrl } from "@/lib/content/assets";
import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";
import type { ImageGallery, VideoGallery } from "@/lib/content/types";

export const metadata = { title: "Media" };

type PublicationPage = {
  slug: string;
  title: string;
  cover?: { image?: string };
};

// A "see all" card matching the legacy SeeAllCard.
function SeeAllCard({ link }: { link: string }) {
  return (
    <div className="card card-brighten h-100">
      <div className="card-body h-100 d-flex flex-column align-items-center justify-content-center">
        <h4 className="mb-0">SEE ALL</h4>
      </div>
      <Link href={link} className="stretched-link" aria-label="See all" />
    </div>
  );
}

// Card that links somewhere internal and shows an image + title (CardBrighten).
function LinkCard({
  title,
  link,
  image,
}: {
  title: string;
  link: string;
  image?: string;
}) {
  return (
    <div className="card card-brighten h-100">
      {image && (
        <MediaImage
          src={image}
          alt={title}
          className="card-brighten-img card-img-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <Link href={link} className="stretched-link" aria-label={title} />
      </div>
    </div>
  );
}

// Static equivalent of the legacy video modal: a card linking to the video file
// (the interactive in-page modal player is dropped per the migration rules).
function VideoCard({ video }: { video: VideoGallery }) {
  const href = assetUrl(video.video);
  return (
    <div className="card card-brighten h-100">
      <MediaImage
        src={video.poster}
        alt={video.title}
        className="card-brighten-img card-img-top"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "4rem",
          height: "4rem",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px 2px rgba(0,0,0,1)",
          borderRadius: "50%",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2rem",
          lineHeight: 1,
        }}
      >
        &#9658;
      </span>
      <div className="card-body text-center">
        <h5 className="card-title">{video.title}</h5>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="stretched-link"
            aria-label={video.title}
          />
        )}
      </div>
    </div>
  );
}

export default function MediaPage() {
  const imageGalleries = [...loadYaml<ImageGallery[]>("galleries/image.yaml")]
    .sort((a, b) => (b.dateAdded ?? "").localeCompare(a.dateAdded ?? ""))
    .slice(0, 5);

  const videoGalleries = loadYaml<VideoGallery[]>("galleries/video.yaml")
    .filter((v) => v && v.title)
    .slice(0, 5);

  // publications-pages/ holds one singleton YAML file per category; load up to 5
  // (matches the legacy allPublicationsPagesYaml limit:5).
  const publicationPages = listYamlFiles("publications-pages")
    .slice(0, 5)
    .map((f) => loadYaml<PublicationPage>(`publications-pages/${f}`));

  return (
    <div className="container">
      <Separator title="Image Galleries" />
      <div className="row">
        {imageGalleries.map((g) => (
          <div key={g.slug} className="col-lg-4 col-md-6 mb-2">
            <LinkCard title={g.title} link={g.slug} image={g.image} />
          </div>
        ))}
        <div className="col-lg-4 col-md-6 mb-2">
          <SeeAllCard link="/media/image-galleries" />
        </div>
      </div>

      <Separator title="Video Galleries" />
      <div className="row">
        {videoGalleries.map((v, i) => (
          <div key={`${v.title}-${i}`} className="col-lg-4 col-md-6 mb-2">
            <VideoCard video={v} />
          </div>
        ))}
        <div className="col-lg-4 col-md-6 mb-2">
          <SeeAllCard link="/media/video-galleries" />
        </div>
      </div>

      <Separator title="Publications" />
      <div className="row">
        {publicationPages.map((p) => (
          <div key={p.slug} className="col-lg-4 col-md-6 mb-2">
            <LinkCard title={p.title} link={p.slug} image={p.cover?.image} />
          </div>
        ))}
        <div className="col-lg-4 col-md-6 mb-2">
          <SeeAllCard link="/publications" />
        </div>
      </div>
    </div>
  );
}
