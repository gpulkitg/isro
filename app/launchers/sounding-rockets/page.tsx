import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import TableVersatile from "@/components/table-versatile";
import { loadYaml } from "@/lib/content/yaml";
import type { SeoMeta, PageSection } from "@/lib/content/types";

interface SoundingRockets {
  seo: SeoMeta;
  sections: PageSection[];
}

const data = loadYaml<SoundingRockets[]>("sounding-rockets.yaml")[0];

export const metadata = { title: data.seo.title };

export default function SoundingRocketsPage() {
  const { seo, sections } = data;

  return (
    <div className="container">
      <Separator />

      <h2 className="mb-2 text-center">{seo.title}</h2>

      {sections.map((section, i) => (
        <div key={i}>
          {section.title && (
            <h3 className="mb-2 text-center">{section.title}</h3>
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
                    alt={section.caption || seo.title}
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
  );
}
