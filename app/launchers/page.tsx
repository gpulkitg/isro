import Link from "next/link";
import { loadYaml } from "@/lib/content/yaml";
import { isValidRoute } from "@/lib/content/routes";
import { getAllLaunchersShowcase } from "@/lib/content/collections/launchers-showcase";
import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";

export const metadata = { title: "Launchers" };

type LaunchersJumbotron = {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  button?: string;
  link?: string;
};

type LaunchersSplitSection = {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  button?: string;
  link?: string;
  textPosition?: string;
  objectFit?: string;
};

type LaunchersList = {
  title?: string;
  content: { link: string; text: string }[];
};

type LaunchersData = {
  seo?: { title?: string };
  jumbotronImg?: LaunchersJumbotron[];
  textContent1?: { title?: string; text?: string };
  splitSection?: LaunchersSplitSection[];
  listLaunchers?: LaunchersList[];
  figure?: { image?: string; caption?: string };
  textContent2?: { title?: string; text?: string };
};

function LinkItem({ link, text }: { link: string; text: string }) {
  const isExternal = /^https?:\/\//.test(link);
  const className =
    "list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent";
  const inner = (
    <>
      {text}
      <span aria-hidden="true">&rsaquo;</span>
    </>
  );
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer external" className={className}>
        {inner}
      </a>
    );
  }
  if (!isValidRoute(link)) {
    return <span className={`${className} text-muted`}>{inner}</span>;
  }
  return (
    <Link href={link} className={className}>
      {inner}
    </Link>
  );
}

export default function LaunchersPage() {
  const launchers = loadYaml<LaunchersData[]>("launchers.yaml")[0];
  const {
    jumbotronImg,
    textContent1,
    splitSection,
    listLaunchers,
    figure,
    textContent2,
  } = launchers;

  // The Gatsby split-section listed the launcher families; we surface the
  // available showcase pages too so the landing page stays in sync with the
  // launchers-showcase collection.
  const showcases = getAllLaunchersShowcase();
  const hero = jumbotronImg?.[0];

  return (
    <>
      {/* Hero (static equivalent of the JumbotronImg: image + overlaid copy). */}
      {hero?.image && (
        <div className="jumbotron-container w-100">
          <MediaImage
            src={hero.image}
            alt={hero.title || "Launchers"}
            style={{ opacity: 0.6, objectFit: "cover" }}
            sizes="100vw"
            priority
          />
          <div
            className="text-center"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
            }}
          >
            {hero.title && <h1 className="display-4">{hero.title}</h1>}
            {hero.subtitle && <p className="lead">{hero.subtitle}</p>}
          </div>
        </div>
      )}

      {/* Intro copy. */}
      {textContent1 && (
        <div className="container mt-3">
          {textContent1.title && (
            <h2 className="text-center mb-2">{textContent1.title}</h2>
          )}
          {textContent1.text && (
            <div
              className="markdown-content text-justify mb-2"
              dangerouslySetInnerHTML={{ __html: textContent1.text }}
            />
          )}
        </div>
      )}

      {/* Launcher families (static equivalent of the SplitSection list). */}
      {splitSection && splitSection.length > 0 && (
        <div className="container">
          {splitSection.map((item, ind) => {
            const textLeft = item.textPosition === "left";
            return (
              <div
                key={`splitSection_${ind}`}
                className="row align-items-center my-3"
              >
                <div
                  className={`col-md d-flex flex-column justify-content-center text-center py-2 ${
                    textLeft ? "order-md-1" : "order-md-2"
                  }`}
                >
                  {item.title && <h2 className="mb-2">{item.title}</h2>}
                  {item.subtitle && <h5 className="text-muted mb-2">{item.subtitle}</h5>}
                  {item.description && <p className="mb-2">{item.description}</p>}
                  {item.button && item.link && (
                    <div>
                      <Link
                        href={item.link}
                        className="btn btn-outline-light"
                      >
                        {item.button}
                      </Link>
                    </div>
                  )}
                </div>
                {item.image && (
                  <div
                    className={`col-md py-2 ${
                      textLeft ? "order-md-2" : "order-md-1"
                    }`}
                  >
                    <MediaImage
                      src={item.image}
                      alt={item.title || "Launcher"}
                      className="img-fluid w-100"
                      style={{
                        objectFit:
                          (item.objectFit as React.CSSProperties["objectFit"]) ||
                          "cover",
                        maxHeight: "400px",
                        width: "100%",
                        height: "auto",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Full index of launcher families, grouped (Historic / Operational / Future). */}
      {listLaunchers && listLaunchers.length > 0 && (
        <div className="container">
          <Separator title="All Launchers" />
          <div className="row">
            {listLaunchers.map((set, ind) => (
              <div key={ind} className="col-sm">
                <div className="py-1">
                  {set.title && <h3 className="mb-2">{set.title}</h3>}
                  <div className="list-group list-group-flush">
                    {set.content.map((item, i) => (
                      <LinkItem key={i} link={item.link} text={item.text} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed showcase pages available in the collection. */}
      {showcases.length > 0 && (
        <div className="container">
          <Separator title="Launcher Showcases" />
          <div className="row">
            {showcases.map((s) => {
              const card = s.jumbotronImg?.[0];
              const title = s.seo?.title || card?.title || s.slug;
              return (
                <div key={s.slug} className="col-md-4 mb-3">
                  <Link
                    href={s.slug}
                    className="card bg-dark text-light h-100 text-decoration-none"
                  >
                    {card?.image && (
                      <MediaImage
                        src={card.image}
                        alt={title}
                        className="card-img-top"
                        style={{
                          objectFit: "cover",
                          maxHeight: "220px",
                          width: "100%",
                          height: "auto",
                        }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title mb-1">{title}</h5>
                      {card?.subtitle && (
                        <p className="card-text text-muted mb-0">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Indian carrier rockets figure. */}
      {figure?.image && (
        <div className="container my-3">
          <figure className="figure w-100 text-center d-block">
            <MediaImage
              src={figure.image}
              alt={figure.caption || "Indian carrier rockets"}
              className="figure-img img-fluid mx-auto d-block"
              style={{
                opacity: 0.85,
                objectFit: "contain",
                maxHeight: "600px",
                width: "100%",
                height: "auto",
              }}
              sizes="100vw"
            />
            {figure.caption && (
              <figcaption className="figure-caption text-center">
                {figure.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {/* Launch facilities copy. */}
      {textContent2 && (
        <div className="container mb-3">
          {textContent2.title && (
            <h2 className="text-center mb-2">{textContent2.title}</h2>
          )}
          {textContent2.text && (
            <div
              className="markdown-content text-justify mb-2"
              dangerouslySetInnerHTML={{ __html: textContent2.text }}
            />
          )}
        </div>
      )}

      {/* List-of-all-launches CTA (preserved from the Gatsby page). */}
      <div className="container text-center my-3">
        <Link
          href="/launches-sdsc-shar-sriharikota-india"
          className="btn btn-outline-light"
        >
          LIST OF ALL LAUNCHES
        </Link>
      </div>
    </>
  );
}
