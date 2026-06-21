import Separator from "@/components/separator";
import LinkVersatile from "@/components/link-versatile";
import TableVersatile from "@/components/table-versatile";
import { loadYaml } from "@/lib/content/yaml";
import type { SectionTable } from "@/lib/content/types";

export const metadata = { title: "Help" };

interface HelpData {
  seo: { title: string };
  section1: { title: string; text: string };
  pluginsTable: {
    head: { col: { text: string } }[];
    body: { documentType: string; downloads: { text: string; link: string }[] }[];
  };
  section2: { title: string; text: string };
  screenReadersTable: SectionTable;
}

export default function HelpPage() {
  const { seo, section1, pluginsTable, section2, screenReadersTable } =
    loadYaml<HelpData[]>("help.yaml")[0];

  return (
    <>
      <Separator />
      <h1 className="text-center mb-3">{seo.title}</h1>

      <div className="container">
        <div
          dangerouslySetInnerHTML={{ __html: section1.text }}
          className="markdown-content text-justify"
        />

        <Separator title="Plug-ins for alternate document types" />
        <div className="table-responsive">
          <table className="table table-dark mb-2">
            <thead>
              <tr>
                {pluginsTable.head.map(({ col }, ind) => (
                  <th key={`pluginsTable_head_${ind}`}>{col.text}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pluginsTable.body.map(({ documentType, downloads }, ind) => (
                <tr key={`pluginsTable_body_${ind}`}>
                  <td>{documentType}</td>
                  <td>
                    <ul>
                      {downloads.map(({ text, link }, i) => (
                        <li key={`${ind}_downloads_${i}`}>
                          <LinkVersatile url={link} className="no-underline">
                            {text}
                          </LinkVersatile>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Separator />
        <div
          dangerouslySetInnerHTML={{ __html: section2.text }}
          className="markdown-content text-justify"
        />

        <TableVersatile data={screenReadersTable} />
      </div>
    </>
  );
}
