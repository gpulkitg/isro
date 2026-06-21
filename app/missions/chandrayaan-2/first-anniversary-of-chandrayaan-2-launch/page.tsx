import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = {
  title: "First anniversary of Chandrayaan-2 launch",
};

type Section = {
  title?: string;
  caption?: string;
  text?: string;
  image?: string;
};

type PageData = {
  title: string;
  sections: Section[];
};

export default function FirstAnniversaryOfChandrayaan2Launch() {
  const data = loadYaml<PageData[]>(
    "chandrayaan-2/first-anniversary-of-chandrayaan-2-launch.yaml",
  )[0];

  const { title, sections } = data;

  return (
    <div className="container">
      <Separator title={title} />

      {sections.map((section, ind) => (
        <div key={`sections_${ind}`} className="mb-4">
          {section.text && (
            <div className="mb-2">
              <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            </div>
          )}
          {section.image && (
            <figure className="figure w-100 mb-2">
              <MediaImage
                src={section.image}
                alt={section.caption || title}
                className="figure-img img-fluid"
                style={{
                  maxHeight: "600px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                sizes="100vw"
              />
              {section.caption && (
                <figcaption className="figure-caption text-center">
                  {section.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      ))}
    </div>
  );
}
