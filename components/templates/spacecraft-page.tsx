import Separator from "../separator";
import MediaImage from "../media-image";
import TableVersatile from "../table-versatile";
import RelatedSection from "../related-section";
import type {
  SpacecraftPage,
  MasterListItem,
  ImageGallery,
  VideoGallery,
  Update,
  OtherLink,
} from "@/lib/content/types";

type Props = {
  page: SpacecraftPage;
  master?: MasterListItem;
  galleriesImage: ImageGallery[];
  galleriesVideo: VideoGallery[];
  updates: Update[];
};

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function SpacecraftPageView({
  page,
  master,
  galleriesImage,
  galleriesVideo,
  updates,
}: Props) {
  const launchDate = formatDate(master?.launchDate);

  const otherLinks: OtherLink[] = [];
  if (master?.launcherLink) {
    otherLinks.push({ link: master.launcherLink, text: master.launcherName });
  }
  if (master?.otherLinks) otherLinks.push(...master.otherLinks);

  return (
    <>
      <Separator />
      <div className="container">
        {launchDate && <h5 className="text-muted mb-2">{launchDate}</h5>}
        {master?.spacecraftName && <h2 className="mb-2">{master.spacecraftName}</h2>}
        <div className="mb-2" style={{ borderBottom: "1px solid gray" }} />

        {page.sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <h5 className="mb-2">
                <em>{section.title}</em>
              </h5>
            )}
            <div className="row d-flex align-items-center">
              {section.text && (
                <div className="col-md">
                  <div className="mb-2">
                    <div
                      className="markdown-content"
                      dangerouslySetInnerHTML={{ __html: section.text }}
                    />
                  </div>
                </div>
              )}
              {section.image && (
                <div className="col-md">
                  <figure className="figure w-100 mb-2">
                    <MediaImage
                      src={section.image}
                      alt={section.caption || master?.spacecraftName || "ISRO"}
                      className="figure-img img-fluid"
                      style={{
                        maxHeight: "400px",
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {section.caption && (
                      <figcaption className="figure-caption text-center">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                </div>
              )}
            </div>

            {section.table && (
              <div className="container">
                <div className="mb-2">
                  {section.table.title && (
                    <h4 className="text-center mb-1">{section.table.title}</h4>
                  )}
                  <TableVersatile data={section.table} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <RelatedSection
        otherLinks={otherLinks}
        docs={master?.docs}
        galleriesImage={galleriesImage}
        galleriesVideo={galleriesVideo}
        updates={updates}
      />
    </>
  );
}
