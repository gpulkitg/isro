import MediaImage from "@/components/media-image";
import TableVersatile from "@/components/table-versatile";
import type { MarsOrbiterMissionPage } from "@/lib/content/collections/mars-orbiter-mission-pages";

// Ported from src/templates/mars-orbiter-mission-page.js: a dimmed cover hero
// with an overlaid title, a centered page title, then sections that may render
// images, gifs, markdown text, and a table.
export default function MarsOrbiterMissionPages({
  page,
}: {
  page: MarsOrbiterMissionPage;
}) {
  const { cover, title, sections } = page;

  return (
    <>
      <div className="cover-img-wrapper w-100">
        <MediaImage
          src={cover.image}
          alt={cover.title}
          className="w-100 h-100 animate-appear-fast"
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
                  <div key={j} className="col-md">
                    <figure className="figure w-100">
                      <MediaImage
                        src={item.image}
                        alt={item.caption || cover.title}
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

            {section.gifs && section.gifs.length > 0 && (
              <div className="row d-flex align-items-end mb-2">
                {section.gifs.map((item, j) => (
                  <div key={j} className="col-md">
                    <figure className="figure w-100">
                      <MediaImage
                        src={item.gif}
                        alt={item.caption || cover.title}
                        className="figure-img img-fluid"
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

            {section.table && (
              <div className="mb-2">
                {section.table.title && (
                  <h4 className="text-center mb-1">{section.table.title}</h4>
                )}
                <TableVersatile data={section.table} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
