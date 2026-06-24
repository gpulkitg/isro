import Link from "next/link";
import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import TableVersatile from "@/components/table-versatile";
import LinkVersatile from "@/components/link-versatile";
import { isValidRoute } from "@/lib/content/routes";
import { assetUrl } from "@/lib/content/assets";
import {
  getShowcaseLaunches,
  type LaunchersShowcase,
} from "@/lib/content/collections/launchers-showcase";

// Server-rendered port of the Gatsby launcher-showcase template. The original
// used gatsby-background-image for the fixed banner and a react-bootstrap
// Carousel; here the banner becomes a CSS background via assetUrl and the
// carousel becomes stacked split sections. Every content image goes through
// MediaImage (R2 + next/image).

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function LaunchersShowcaseTemplate({
  page,
}: {
  page: LaunchersShowcase;
}) {
  const {
    jumbotronImg,
    fixBgSection,
    splitSection,
    textContent1,
    carouselSections,
    jumbotronVideo,
    textContent2,
    figure,
  } = page;

  const launches = getShowcaseLaunches(page.launcherTypeKeyword);

  return (
    <>
      {/* Hero image jumbotron(s) */}
      {jumbotronImg?.map((item, i) => (
        <div key={`jumbotronImg_${i}`} className="jumbotron-container text-white">
          <MediaImage
            src={item.image}
            alt={item.title || "ISRO launcher"}
            style={{ objectFit: "cover", opacity: 0.7 }}
            sizes="100vw"
            priority={i === 0}
          />
          <div className="container d-flex flex-column justify-content-center text-center py-5" style={{ minHeight: "100svh" }}>
            {item.title && <h1 className="display-4">{item.title}</h1>}
            {item.subtitle && <h2>{item.subtitle}</h2>}
            {item.description && <p className="lead">{item.description}</p>}
            {item.button && item.link && (
              <div>
                <LinkVersatile url={item.link} className="btn btn-outline-light">
                  {item.button}
                </LinkVersatile>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Fixed-background stats banner */}
      {fixBgSection && (
        <div
          className="text-white fix-bg"
          style={{ backgroundImage: `url(${assetUrl(fixBgSection.image)})` }}
        >
          <div className="container-fluid py-5">
            <div className="row">
              {fixBgSection.contents.map((content, i) => (
                <div
                  key={`fixBgSection_${i}`}
                  className="col-md d-flex flex-column justify-content-center text-center py-2"
                >
                  <h1>{content.title}</h1>
                  {content.subtitles?.map((s, j) => (
                    <h3 key={`subtitle_${j}`}>{s.line}</h3>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Split spec section(s) */}
      {splitSection?.map((item, i) => {
        const textRight = item.textPosition === "right";
        return (
          <div className="container my-4" key={`splitSection_${i}`}>
            <div className="row align-items-center">
              <div className={`col-md d-flex py-4 ${textRight ? "order-md-0" : "order-md-1"}`}>
                <figure className="figure w-100 mb-0">
                  <MediaImage
                    src={item.image}
                    alt={item.title || "ISRO launcher"}
                    className="figure-img img-fluid w-100"
                    style={{
                      objectFit:
                        (item.objectFit as React.CSSProperties["objectFit"]) ||
                        "contain",
                      maxHeight: "500px",
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
              </div>
              <div className={`col-md d-flex flex-column justify-content-center ${textRight ? "order-md-1" : "order-md-0"}`}>
                {item.title && <h1 className="mb-2 text-center">{item.title}</h1>}
                {item.subtitle && <h3 className="mb-2 text-center">{item.subtitle}</h3>}
                {item.description && <p>{item.description}</p>}
                {item.table && (
                  <div className="mb-2">
                    <TableVersatile data={item.table} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Intro copy */}
      {textContent1 && (
        <div className="container my-4">
          {textContent1.title && (
            <Separator title={textContent1.title} />
          )}
          {textContent1.text && (
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: textContent1.text }}
            />
          )}
        </div>
      )}

      {/* Stage sections (was a carousel; rendered as stacked split rows) */}
      {carouselSections?.map((section, i) => (
        <div className="container my-4" key={`carouselSections_${i}`}>
          <div className="row align-items-center">
            <div className="col-md py-2">
              <figure className="figure w-100 mb-0">
                <MediaImage
                  src={section.image}
                  alt={section.title || "ISRO launcher stage"}
                  className="figure-img img-fluid w-100"
                  style={{ objectFit: "contain", maxHeight: "500px", opacity: 0.9 }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
            </div>
            <div className="col-md d-flex flex-column justify-content-center text-center">
              {section.title && <h2 className="mb-2">{section.title}</h2>}
              {section.description && <p>{section.description}</p>}
              {section.table && (
                <div className="text-start">
                  <TableVersatile data={section.table} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Hero video jumbotron */}
      {jumbotronVideo && (jumbotronVideo.videoClip || jumbotronVideo.title || jumbotronVideo.video) && (
        <div className="jumbotron-container text-white">
          {jumbotronVideo.videoClip ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              poster={jumbotronVideo.poster ? assetUrl(jumbotronVideo.poster) : undefined}
            >
              <source src={assetUrl(jumbotronVideo.videoClip)} type="video/mp4" />
            </video>
          ) : jumbotronVideo.poster ? (
            <MediaImage
              src={jumbotronVideo.poster}
              alt={jumbotronVideo.title || "ISRO launch"}
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          ) : null}
          <div className="container d-flex flex-column justify-content-center text-center py-5" style={{ minHeight: "100svh" }}>
            {jumbotronVideo.title && (
              <h1 className="mb-2 display-4">{jumbotronVideo.title}</h1>
            )}
            {jumbotronVideo.video && (
              <div>
                <a
                  href={assetUrl(jumbotronVideo.video)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  WATCH FULL VIDEO
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Closing copy + master-list launches table */}
      <div className="container my-4">
        {textContent2?.title && <Separator title={textContent2.title} />}
        {textContent2?.text && (
          <div
            className="markdown-content mb-2"
            dangerouslySetInnerHTML={{ __html: textContent2.text }}
          />
        )}

        {launches.length > 0 && (
          <div className="table-responsive">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Launch Date</th>
                  <th>Launcher Type</th>
                  <th>Orbit Type</th>
                  <th>Payload</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {launches.map((node, i) => (
                  <tr key={`${node.launcherName}_${i}`}>
                    <td>{launches.length - i}</td>
                    <td>
                      {node.launcherLink && isValidRoute(node.launcherLink) ? (
                        <Link href={node.launcherLink} className="no-underline">
                          {node.launcherName}
                        </Link>
                      ) : (
                        node.launcherName
                      )}
                    </td>
                    <td>{formatDate(node.launchDate)}</td>
                    <td>{node.launcherType}</td>
                    <td>{node.orbitType}</td>
                    <td>
                      {node.spacecraftLink && isValidRoute(node.spacecraftLink) ? (
                        <Link href={node.spacecraftLink} className="no-underline">
                          {node.spacecraftName}
                        </Link>
                      ) : (
                        node.spacecraftName
                      )}
                    </td>
                    <td>{node.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Closing figure */}
      {figure && (
        <figure className="figure w-100 mb-4">
          <MediaImage
            src={figure.image}
            alt={figure.caption || "ISRO launcher"}
            className="figure-img img-fluid w-100"
            style={{ objectFit: "contain", maxHeight: "80vh", opacity: 0.9 }}
            sizes="100vw"
          />
          {figure.caption && (
            <figcaption className="figure-caption text-center">
              {figure.caption}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
}
