import Separator from "@/components/separator";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Frequently Asked Questions" };

type FaqYaml = {
  title: string;
  clickReveal: { title: string; text: string }[];
};

export default function Chandrayaan2FaqPage() {
  const data = loadYaml<FaqYaml[]>("chandrayaan-2/faq.yaml")[0];
  const { title, clickReveal } = data;

  return (
    <>
      <Separator title={title} />

      <div className="container">
        <div className="accordion" id="chandrayaan2Faq">
          {clickReveal.map((item, index) => (
            <details key={index} className="card mb-2">
              <summary
                className="card-header"
                style={{ cursor: "pointer", listStyle: "none" }}
              >
                {item.title}
              </summary>
              <div className="card-body">
                <p className="mb-0">{item.text}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
