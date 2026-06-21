import { loadYaml } from "@/lib/content/yaml";
import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import TableVersatile from "@/components/table-versatile";
import type { SectionTable } from "@/lib/content/types";

export const metadata = { title: "Chandrayaan 2 Spacecraft" };

interface SplitSectionItem {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  textPosition?: "left" | "right";
  textAlignment?: "left" | "center" | "right";
  objectFit?: string;
  table?: SectionTable;
}

interface Chandrayaan2Spacecraft {
  title: string;
  splitSection: SplitSectionItem[];
}

function textClasses(
  textPosition?: string,
  textAlignment?: string,
): string {
  let classes = textPosition === "left" ? "order-md-0" : "order-md-2";
  if (textAlignment === "center") {
    classes += " text-center";
  } else if (textAlignment === "right") {
    classes += " text-end";
  }
  return classes;
}

export default function Chandrayaan2SpacecraftPage() {
  const data =
    loadYaml<Chandrayaan2Spacecraft[]>("chandrayaan-2/spacecraft.yaml")[0];
  const { title, splitSection } = data;

  return (
    <>
      <Separator title={title} />

      {splitSection.map((item, ind) => (
        <div className="container" key={`splitSection_${ind}`}>
          <div className="row">
            <div className="col-md split-section-img-wrapper order-md-1">
              <MediaImage
                src={item.image}
                alt={item.title || title}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div
              className={`col-md d-flex flex-column justify-content-center ${textClasses(
                item.textPosition,
                item.textAlignment,
              )}`}
            >
              {item.title && (
                <h1 className="mb-2 display-4">{item.title}</h1>
              )}
              {item.subtitle && <h3 className="mb-2">{item.subtitle}</h3>}
              {item.description && (
                <p className="mb-2 text-start">{item.description}</p>
              )}
              {item.table && <TableVersatile data={item.table} />}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
