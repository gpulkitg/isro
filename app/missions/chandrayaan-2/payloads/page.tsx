import Separator from "@/components/separator";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "All Payloads" };

type PayloadsYaml = {
  title: string;
  sections: {
    title?: string;
    caption?: string;
    text?: string;
  }[];
};

export default function Chandrayaan2PayloadsPage() {
  const data = loadYaml<PayloadsYaml[]>("chandrayaan-2/payloads.yaml")[0];
  const { title, sections } = data;

  return (
    <>
      <Separator title={title} />

      <div className="container">
        {sections.map((section, index) => (
          <div key={index} className="mb-3">
            {section.title && (
              <h3 className="text-center mb-2">{section.title}</h3>
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
