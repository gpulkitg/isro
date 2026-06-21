import Separator from "../separator";
import MediaImage from "../media-image";
import TableVersatile from "../table-versatile";
import RelatedSection from "../related-section";
import type {
  PageSection,
  OtherLink,
  DocLink,
  ImageGallery,
  VideoGallery,
  Update,
} from "@/lib/content/types";

// Shared template for master-list-backed pages (spacecraft + launchers):
// a heading + launch date, markdown/image/table sections, and a Related block.
export type MissionPageProps = {
  heading?: string;
  launchDate?: string; // ISO date string
  sections: PageSection[];
  otherLinks?: OtherLink[];
  docs?: DocLink[];
  galleriesImage?: ImageGallery[];
  galleriesVideo?: VideoGallery[];
  updates?: Update[];
};

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  // Format in UTC so the calendar date is stable across server/build timezones.
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function MissionPage({
  heading,
  launchDate,
  sections,
  otherLinks,
  docs,
  galleriesImage,
  galleriesVideo,
  updates,
}: MissionPageProps) {
  const date = formatDate(launchDate);
  const hasRelated = Boolean(
    otherLinks?.length ||
      docs?.length ||
      galleriesImage?.length ||
      galleriesVideo?.length ||
      updates?.length,
  );

  return (
    <>
      <Separator />
      <div className="container">
        {date && <h5 className="text-muted mb-2">{date}</h5>}
        {heading && <h2 className="mb-2">{heading}</h2>}
        <div className="mb-2" style={{ borderBottom: "1px solid gray" }} />

        {sections.map((section, i) => (
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
                      alt={section.caption || heading || "ISRO"}
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

      {hasRelated && (
        <RelatedSection
          otherLinks={otherLinks}
          docs={docs}
          galleriesImage={galleriesImage}
          galleriesVideo={galleriesVideo}
          updates={updates}
        />
      )}
    </>
  );
}
