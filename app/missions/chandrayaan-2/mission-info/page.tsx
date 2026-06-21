import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import TableVersatile from "@/components/table-versatile";
import { loadYaml } from "@/lib/content/yaml";
import type { PageSection } from "@/lib/content/types";

export const metadata = { title: "Mission Info" };

interface TimelineEvent {
  date: string;
  title: string;
}

interface VerticalTimeline {
  title: string;
  events: TimelineEvent[];
}

interface MissionInfo {
  title: string;
  sections: PageSection[];
  verticalTimeline: VerticalTimeline;
}

export default function Chandrayaan2MissionInfo() {
  // Singleton YAML file (1-element array) -> take [0].
  const data = loadYaml<MissionInfo[]>("chandrayaan-2/mission-info.yaml")[0];
  const { title, sections, verticalTimeline } = data;

  return (
    <div className="container">
      <Separator title={title} />

      {sections.map((section, ind) => (
        <div key={`section_${ind}`} className="mb-4">
          {section.image && (
            <figure className="figure w-100 mb-2">
              <MediaImage
                src={section.image}
                alt={section.caption || title}
                className="figure-img img-fluid w-100"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                sizes="(max-width: 768px) 100vw, 100vw"
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
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            </div>
          )}

          {section.table && (
            <div>
              {section.table.title && (
                <h4 className="text-center mb-1">{section.table.title}</h4>
              )}
              <TableVersatile data={section.table} />
            </div>
          )}
        </div>
      ))}

      {verticalTimeline && (
        <div className="container">
          <h2 className="pt-3" />
          <div className="row">
            <div className="col-md-4 my-auto text-center">
              <h2>{verticalTimeline.title}</h2>
            </div>
            <div className="col-md-8 text-center py-2">
              <ul className="list-unstyled">
                {verticalTimeline.events.map((event, ind) => (
                  <li
                    key={`event_${ind}`}
                    className="card text-start mb-3"
                    style={{ borderLeft: "4px solid darkgray" }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "black", fontSize: "1.5rem" }}
                    >
                      {event.date}
                    </div>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "dodgerblue" }}
                    >
                      {event.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
