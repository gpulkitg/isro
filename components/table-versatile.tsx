import { FileEarmark } from "react-bootstrap-icons";
import LinkVersatile from "./link-versatile";
import { assetUrl } from "@/lib/content/assets";
import type { SectionTable, TableCell } from "@/lib/content/types";

// A cell can be plain text, an internal/external link, a doc link, or a date.
type VersatileCell = TableCell & { link?: string; doc?: string; date?: string };

function CellContent({ col }: { col: VersatileCell }) {
  if (col.link) {
    return (
      <LinkVersatile url={col.link} className="no-underline">
        {col.text || col.link}
      </LinkVersatile>
    );
  }
  if (col.doc) {
    return (
      <a href={assetUrl(col.doc)} className="no-underline" target="_blank" rel="noreferrer">
        {col.text || col.doc} <FileEarmark />
      </a>
    );
  }
  if (col.date) return <>{col.date}</>;
  return <>{col.text}</>;
}

export default function TableVersatile({ data }: { data: SectionTable }) {
  return (
    <div className="table-responsive">
      <table className="table table-dark">
        {data.head && (
          <thead>
            <tr>
              {data.head.map((c, i) => (
                <th key={i}>
                  <CellContent col={c.col} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.body?.map((r, i) => (
            <tr key={i}>
              {r.row.map((c, j) => (
                <td key={j}>
                  <CellContent col={c.col} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
