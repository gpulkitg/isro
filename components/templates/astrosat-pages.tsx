import MediaImage from "@/components/media-image";
import type { AstrosatPage } from "@/lib/content/collections/astrosat-pages";

// Cover hero with overlaid title, then sections each rendering a plural
// images[] row above a markdown text body. Mirrors the Gatsby astrosat-page.js.
export default function AstrosatPageTemplate({ page }: { page: AstrosatPage }) {
  const { cover, title, sections } = page;

  return (
    <>
      <div className="jumbotron-container w-100">
        <MediaImage
          src={cover.image}
          alt={cover.title}
          className="animate-appear-fast"
          style={{ opacity: 0.5, objectFit: "cover" }}
          sizes="100vw"
          priority
        />
        <h1
          className="text-center display-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {cover.title}
        </h1>
      </div>

      <div className="container">
        <h2 className="my-2 text-center">{title}</h2>

        {sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <h3 className="text-center mb-2">{section.title}</h3>
            )}

            {section.images && section.images.length > 0 && (
              <div className="row d-flex align-items-end mb-2">
                {section.images.map((item, j) => (
                  <div className="col-md" key={j}>
                    <figure className="figure w-100">
                      <MediaImage
                        src={item.image}
                        alt={item.caption || section.title || title}
                        className="figure-img img-fluid"
                        style={{
                          maxHeight: "400px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {item.caption && (
                        <figcaption className="figure-caption text-center">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
              </div>
            )}

            {section.text && (
              <div className="mb-2">
                <div
                  className="markdown-content"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
