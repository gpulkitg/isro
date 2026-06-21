import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import LinkVersatile from "@/components/link-versatile";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Capacity Building" };

type SectionImage = {
  image: string;
  link: string;
  text: string;
};

type Section = {
  title?: string;
  text?: string;
  images?: SectionImage[] | null;
};

type CapacityBuilding = {
  title: string;
  sections: Section[];
};

export default function CapacityBuildingPage() {
  const data = loadYaml<CapacityBuilding[]>("capacity-building.yaml")[0];
  const { title, sections } = data;

  return (
    <>
      <Separator />

      <div className="container">
        <h2 className="mb-2">{title}</h2>

        <div className="mb-2" style={{ borderBottom: "1px solid gray" }} />

        {sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            {section.title && (
              <h4 className="text-center mb-2">{section.title}</h4>
            )}

            {section.images && (
              <div className="row">
                {section.images.map((item) => (
                  <div key={item.image} className="col-md-4 mb-2">
                    <div className="card card-brighten text-white h-100">
                      <MediaImage
                        src={item.image}
                        alt={item.text}
                        className="card-brighten-img card-img-top"
                        style={{ objectFit: "cover", width: "100%" }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.text}</h5>
                        <LinkVersatile
                          url={item.link}
                          className="stretched-link"
                        >
                          <span className="visually-hidden">{item.text}</span>
                        </LinkVersatile>
                      </div>
                    </div>
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
