import { loadYaml } from "@/lib/content/yaml";
import MediaImage from "@/components/media-image";

export const metadata = { title: "Genesis" };

type GenesisSection = {
  title?: string;
  image?: string;
  caption?: string;
  text?: string;
};

type AboutYaml = {
  genesis: GenesisSection[];
};

export default function GenesisPage() {
  const about = loadYaml<AboutYaml[]>("about.yaml")[0];
  const sections = about.genesis ?? [];

  return (
    <div className="container">
      <h2 className="mb-2 text-center">Genesis</h2>

      {sections.map((section, ind) => (
        <div key={`sections_${ind}`}>
          {section.title && (
            <h3 className="text-center mb-2">{section.title}</h3>
          )}
          {section.image && (
            <figure className="w-100">
              <MediaImage
                src={section.image}
                alt={section.caption || "Genesis"}
                style={{ maxHeight: "600px", width: "100%", height: "auto", objectFit: "contain" }}
              />
              {section.caption && (
                <figcaption className="text-center">{section.caption}</figcaption>
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
