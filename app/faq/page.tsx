import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "FAQ" };

type Faq = {
  cover: { title: string; image: string };
  content: { title: string; text: string }[];
};

export default function FAQPage() {
  // faq.yaml is a single-element array (one document).
  const { cover, content } = loadYaml<Faq[]>("faq.yaml")[0];

  return (
    <>
      <div className="cover-img-wrapper w-100 position-relative">
        <MediaImage
          src={cover.image}
          alt={cover.title}
          className="w-100 h-100 animate-appear-fast"
          style={{ opacity: 0.5, width: "100%", height: "auto", objectFit: "cover" }}
          sizes="100vw"
          priority
        />
        <h1
          className="text-center display-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {cover.title}
        </h1>
      </div>

      <Separator />

      <div className="container pb-4">
        <div className="accordion">
          {content.map((item, index) => (
            <details key={index} className="card bg-dark mb-2">
              <summary className="card-header" style={{ cursor: "pointer" }}>
                {item.title}
              </summary>
              <div className="card-body">{item.text}</div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
