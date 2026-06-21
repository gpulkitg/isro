import { loadYaml } from "@/lib/content/yaml";
import MediaImage from "@/components/media-image";

export const metadata = { title: "Organisation Structure" };

type Section = {
  title?: string;
  image?: string;
  caption?: string;
};

type About = {
  organisationStructure?: Section[];
};

export default function OrganisationStructurePage() {
  const about = loadYaml<About>("about.yaml");
  const sections = about.organisationStructure ?? [];

  return (
    <div className="container">
      <h2 className="mb-2 text-center">Organisation Structure</h2>

      {sections.map((section, ind) => (
        <div key={`sections_${ind}`}>
          {section.title && (
            <h3 className="text-center mb-2">{section.title}</h3>
          )}
          {section.image && (
            <figure className="w-100 figure">
              <MediaImage
                src={section.image}
                alt={section.image}
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
        </div>
      ))}
    </div>
  );
}
