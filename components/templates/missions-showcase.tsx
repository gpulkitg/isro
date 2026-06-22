import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";
import RelatedSection from "@/components/related-section";
import LinkVersatile from "@/components/link-versatile";
import type {
  MissionShowcase,
  MissionShowcaseRelated,
  ShowcaseJumbotron,
  ShowcaseSplitSection,
  ShowcaseTextContent,
  ShowcaseCard,
} from "@/lib/content/collections/missions-showcase";

export type MissionsShowcaseProps = {
  page: MissionShowcase;
  related: MissionShowcaseRelated;
};

// Map the YAML position strings onto flexbox utility classes.
function alignItems(vertical?: string): string {
  if (vertical === "top") return "align-items-start";
  if (vertical === "bottom") return "align-items-end";
  return "align-items-center";
}
function justifyContent(horizontal?: string): string {
  if (horizontal === "left") return "justify-content-start";
  if (horizontal === "right") return "justify-content-end";
  return "justify-content-center";
}
function textAlign(alignment?: string): string {
  if (alignment === "right") return "text-end";
  if (alignment === "center") return "text-center";
  return "text-start";
}

function Jumbotron({ item }: { item: ShowcaseJumbotron }) {
  return (
    <div className="jumbotron-container text-white">
      <MediaImage
        src={item.image}
        alt={item.title || "ISRO"}
        style={{ objectFit: "cover", opacity: 0.7 }}
        sizes="100vw"
        priority
      />
      <div
        className={`d-flex flex-column ${alignItems(
          item.verticalPosition,
        )} ${justifyContent(item.horizontalPosition)}`}
        style={{ minHeight: "100svh" }}
      >
        <div className={`p-3 ${textAlign(item.textAlignment)}`} style={{ maxWidth: "640px" }}>
          {item.title && <h1 className="mb-2">{item.title}</h1>}
          {item.subtitle && <h4 className="mb-2 text-info">{item.subtitle}</h4>}
          {item.description && <p className="mb-3">{item.description}</p>}
          {item.button && item.link && (
            <LinkVersatile url={item.link} className="btn btn-outline-light">
              {item.button}
            </LinkVersatile>
          )}
        </div>
      </div>
    </div>
  );
}

function SplitSection({ item, index }: { item: ShowcaseSplitSection; index: number }) {
  // Alternate image/text ordering by index, like the Gatsby split-section.
  const textRight = item.textPosition === "right";
  return (
    <div className="row g-0 align-items-stretch">
      <div className={`col-md d-flex ${textRight ? "order-md-0" : "order-md-1"}`}>
        <figure className="w-100 h-100 m-0">
          <MediaImage
            src={item.image}
            alt={item.title || "ISRO"}
            className="w-100 h-100"
            style={{
              objectFit: (item.objectFit as "cover" | "contain") || "cover",
              maxHeight: "70vh",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </figure>
      </div>
      <div
        className={`col-md d-flex flex-column justify-content-center p-4 ${textAlign(
          item.textAlignment,
        )} ${textRight ? "order-md-1" : "order-md-0"}`}
      >
        {item.title && <h2 className="mb-2">{item.title}</h2>}
        {item.subtitle && <h5 className="mb-2 text-info">{item.subtitle}</h5>}
        {item.description && <p className="mb-3">{item.description}</p>}
        {item.button && item.link && (
          <div>
            <LinkVersatile url={item.link} className="btn btn-outline-light">
              {item.button}
            </LinkVersatile>
          </div>
        )}
      </div>
      {/* keep index referenced so ordering is deterministic per row */}
      <span className="d-none" data-split-index={index} />
    </div>
  );
}

function TextContentBlock({ content }: { content: ShowcaseTextContent }) {
  return (
    <div className="container py-3 text-center">
      {content.title && <h2 className="mb-3">{content.title}</h2>}
      {content.text && (
        <div
          className="markdown-content mb-2 text-start"
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
      {content.image && (
        <figure className="figure w-100 mb-2">
          <MediaImage
            src={content.image}
            alt={content.caption || content.title || "ISRO"}
            className="figure-img img-fluid"
            style={{ maxHeight: "400px", width: "100%", height: "auto", objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {content.caption && (
            <figcaption className="figure-caption text-center">{content.caption}</figcaption>
          )}
        </figure>
      )}
    </div>
  );
}

function CardGrowItem({ card }: { card: ShowcaseCard }) {
  const body = (
    <div className="card bg-dark text-white border-0 h-100">
      {card.image && (
        <MediaImage
          src={card.image}
          alt={card.title || "ISRO"}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      )}
      <div className="card-body">
        {card.title && <h5 className="card-title">{card.title}</h5>}
        {card.subtitle && <h6 className="card-subtitle mb-2 text-info">{card.subtitle}</h6>}
        {card.text && <p className="card-text">{card.text}</p>}
      </div>
    </div>
  );
  return card.link ? (
    <LinkVersatile url={card.link} className="no-underline text-reset">
      {body}
    </LinkVersatile>
  ) : (
    body
  );
}

export default function MissionsShowcase({ page, related }: MissionsShowcaseProps) {
  const {
    jumbotronImg,
    splitSection,
    textContent1,
    cardSection,
    gallery,
    cardSection2,
    verticalTimeline,
    textContent2,
  } = page;

  const timelineEvents = verticalTimeline?.events ?? [];

  return (
    <>
      {jumbotronImg?.map((item, i) => (
        <Jumbotron key={`jumbo-${i}`} item={item} />
      ))}

      {splitSection?.map((item, i) => (
        <SplitSection key={`split-${i}`} item={item} index={i} />
      ))}

      {textContent1 && <TextContentBlock content={textContent1} />}

      {cardSection && cardSection.length > 0 && (
        <>
          <Separator title="Mission Components" />
          <div className="container">
            <div className="row">
              {cardSection.map((card, i) => (
                <div key={`card-${i}`} className="col-lg-3 col-md-6 mb-2">
                  <CardGrowItem card={card} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {gallery && gallery.photos.length > 0 && (
        <>
          <Separator title="Image Gallery" />
          <div className="container">
            <div className="row">
              {gallery.photos.map((photo, i) => (
                <div key={`gal-${i}`} className="col-md-6 mb-2">
                  <figure className="figure w-100 m-0">
                    <MediaImage
                      src={photo.image}
                      alt={photo.caption || "ISRO"}
                      className="figure-img img-fluid w-100"
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {photo.caption && (
                      <figcaption className="figure-caption text-center">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                </div>
              ))}
            </div>
            {gallery.link && (
              <div className="my-2 text-center">
                <LinkVersatile url={gallery.link} className="btn btn-outline-light">
                  More Images
                </LinkVersatile>
              </div>
            )}
          </div>
        </>
      )}

      {cardSection2 && cardSection2.cards.length > 0 && (
        <>
          <Separator title="Payloads" />
          <div className="container">
            <div className="row">
              {cardSection2.cards.map((card, i) => (
                <div key={`card2-${i}`} className="col-lg-3 col-md-6 mb-2">
                  <div className="card bg-dark text-white border-0 h-100">
                    {card.image && (
                      <MediaImage
                        src={card.image}
                        alt={card.title || "ISRO"}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover", opacity: 0.7 }}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    )}
                    <div className="card-body">
                      {card.title && <h6 className="card-subtitle">{card.title}</h6>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cardSection2.link && (
              <div className="mb-2 text-center">
                <LinkVersatile url={cardSection2.link} className="btn btn-outline-light">
                  More details
                </LinkVersatile>
              </div>
            )}
          </div>
        </>
      )}

      {timelineEvents.length > 0 && (
        <>
          <Separator title={verticalTimeline?.title || "Mission Timeline"} />
          <div className="container">
            <ul className="list-group list-group-flush">
              {timelineEvents.map((event, i) => (
                <li
                  key={`event-${i}`}
                  className="list-group-item bg-dark text-white border-secondary"
                >
                  {event.date && <span className="text-info me-2">{event.date}</span>}
                  {event.title && <strong>{event.title}</strong>}
                  {event.subtitle && <p className="mb-0 text-muted">{event.subtitle}</p>}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {textContent2 && <TextContentBlock content={textContent2} />}

      <RelatedSection
        otherLinks={related.otherLinks}
        docs={related.docs}
        galleriesImage={related.galleriesImage}
        galleriesVideo={related.galleriesVideo}
        updates={related.updates}
      />
    </>
  );
}
