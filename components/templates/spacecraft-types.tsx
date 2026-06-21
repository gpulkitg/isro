import { ChevronRight } from "react-bootstrap-icons";
import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import LinkVersatile from "@/components/link-versatile";
import type { MasterListItem } from "@/lib/content/types";
import type {
  SpacecraftType,
  SpacecraftTypeImage,
} from "@/lib/content/collections/spacecraft-types";

export type SpacecraftTypesProps = {
  item: SpacecraftType;
  /** master-list items whose spacecraftType matches, newest launch date first. */
  missions: MasterListItem[];
  /** all spacecraft-type pages, for the Related links block. */
  allTypes: SpacecraftType[];
};

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function SpacecraftTypes({
  item,
  missions,
  allTypes,
}: SpacecraftTypesProps) {
  const { title, sections } = item;

  return (
    <div className="container">
      <Separator />
      <h2 className="mb-2 text-center">{title}</h2>

      {sections.map((section, ind) => (
        <div key={ind}>
          {section.title && (
            <h3 className="text-center mb-2">{section.title}</h3>
          )}

          {section.images && section.images.length > 0 && (
            <div className="row d-flex align-items-end mb-2">
              {section.images.map((img: SpacecraftTypeImage, i) => (
                <div className="col-md" key={i}>
                  <figure className="figure w-100">
                    <MediaImage
                      src={img.image}
                      alt={img.caption || title}
                      className="figure-img img-fluid"
                      style={{
                        maxHeight: "400px",
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {img.caption && (
                      <figcaption className="figure-caption text-center">
                        {img.caption}
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

      <div className="mb-2 text-center">
        <h3>List of {title}</h3>
      </div>

      <div className="container">
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Launch Vehicle</th>
                <th>Orbit Type</th>
                <th>Application</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((node, ind) => (
                <tr key={`${node.spacecraftLink || node.spacecraftName}-${ind}`}>
                  <td>{missions.length - ind}</td>
                  <td>
                    {node.spacecraftLink ? (
                      <LinkVersatile
                        url={node.spacecraftLink}
                        className="no-underline"
                      >
                        {node.spacecraftName}
                      </LinkVersatile>
                    ) : (
                      node.spacecraftName
                    )}
                  </td>
                  <td>{formatDate(node.launchDate)}</td>
                  <td>
                    {node.launcherLink ? (
                      <LinkVersatile
                        url={node.launcherLink}
                        className="no-underline"
                      >
                        {node.launcherName}
                      </LinkVersatile>
                    ) : (
                      node.launcherName
                    )}
                  </td>
                  <td>{node.orbitType}</td>
                  <td>{node.application}</td>
                  <td>{node.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Separator title="Related" />
      <div className="row">
        <div className="col-md">
          <div className="py-1">
            <div className="list-group list-group-flush">
              {allTypes
                .filter((_, i) => i % 2 === 0)
                .map((t) => (
                  <a
                    href={t.slug}
                    key={t.slug}
                    className="list-group-item list-group-item-action"
                  >
                    {t.title}
                    <ChevronRight style={{ float: "right" }} />
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="py-1">
            <div className="list-group list-group-flush">
              {allTypes
                .filter((_, i) => i % 2 === 1)
                .map((t) => (
                  <a
                    href={t.slug}
                    key={t.slug}
                    className="list-group-item list-group-item-action"
                  >
                    {t.title}
                    <ChevronRight style={{ float: "right" }} />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
