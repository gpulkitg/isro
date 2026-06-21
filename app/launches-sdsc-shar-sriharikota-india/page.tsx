import Link from "next/link";
import Separator from "@/components/separator";
import { getMasterList } from "@/lib/content";

export const metadata = {
  title: "Launches from SDSC SHAR, Sriharikota, India",
};

function formatDate(iso: string): string {
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

export default function LaunchesSDSCPage() {
  const launches = getMasterList()
    .filter((m) => m.launcherLink !== "")
    .sort((a, b) => b.launchDate.localeCompare(a.launchDate));

  const totalCount = launches.length;

  return (
    <>
      <Separator />

      <h2 className="text-center mb-2">
        Launches from SDSC SHAR, Sriharikota, India
      </h2>

      <div className="container">
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Launch Date</th>
                <th>Launcher Type</th>
                <th>Payload</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {launches.map((node, ind) => (
                <tr key={`${node.launcherLink}-${ind}`}>
                  <td>{totalCount - ind}</td>
                  <td>
                    {node.launcherLink ? (
                      <Link href={node.launcherLink} className="no-underline">
                        {node.launcherName}
                      </Link>
                    ) : (
                      node.launcherName
                    )}
                  </td>
                  <td>{formatDate(node.launchDate)}</td>
                  <td>{node.launcherType}</td>
                  <td>
                    {node.spacecraftLink ? (
                      <Link href={node.spacecraftLink} className="no-underline">
                        {node.spacecraftName}
                      </Link>
                    ) : (
                      node.spacecraftName
                    )}
                  </td>
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
