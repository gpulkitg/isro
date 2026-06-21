import MediaImage from "@/components/media-image";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Sponsored Research" };

type SponsoredResearchSection = {
  title?: string;
  image?: string;
  caption?: string;
  text?: string;
};

type AboutYaml = {
  sponsoredResearch: SponsoredResearchSection[];
};

export default function SponsoredResearchRespondPage() {
  const about = loadYaml<AboutYaml>("about.yaml");
  const sections = about.sponsoredResearch ?? [];

  return (
    <div className="container">
      <h2 className="mb-2 text-center">Sponsored Research</h2>

      {sections.map((section, ind) => (
        <div key={`sections_${ind}`}>
          {section.title && (
            <h3 className="text-center mb-2">{section.title}</h3>
          )}
          {section.image && (
            <figure className="figure w-100">
              <MediaImage
                src={section.image}
                alt={section.title || "Sponsored Research"}
                className="figure-img img-fluid w-100"
                style={{ maxHeight: "600px", objectFit: "contain" }}
              />
              {section.caption && (
                <figcaption className="figure-caption text-center">
                  {section.caption}
                </figcaption>
              )}
            </figure>
          )}
          {section.text && (
            <div className="mb-2">
              <div
                dangerouslySetInnerHTML={{ __html: section.text }}
                className="markdown-content"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
