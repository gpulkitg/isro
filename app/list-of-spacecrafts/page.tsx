import Separator from "@/components/separator";
import LinkVersatile from "@/components/link-versatile";
import { getMasterList } from "@/lib/content";

export const metadata = { title: "List of Spacecrafts" };

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

export default function ListOfSpacecraftsPage() {
  // Sort by launch date descending (newest first), matching the Gatsby query.
  const items = [...getMasterList()].sort(
    (a, b) =>
      new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
  );
  const total = items.length;

  return (
    <>
      <Separator />
      <h2 className="text-center mb-2">List of Spacecrafts</h2>

      <div className="container">
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Launch Vehicle</th>
                <th>Orbit Type</th>
                <th>Application</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>
              {items.map((node, ind) => (
                <tr key={node.spacecraftLink || `${node.spacecraftName}-${ind}`}>
                  <td>{total - ind}</td>
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
    </>
  );
}
