import Link from "next/link";
import { loadYaml } from "@/lib/content/yaml";
import { isValidRoute } from "@/lib/content/routes";
import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";

export const metadata = { title: "About ISRO" };

type AboutData = {
  seo?: { title?: string };
  cover?: { image?: string; title?: string };
  sections: { image?: string; caption?: string; text?: string }[];
  listLinks: {
    title?: string;
    content: { link: string; text: string }[];
  }[];
};

function LinkItem({ link, text }: { link: string; text: string }) {
  const isExternal = /^https?:\/\//.test(link);
  const className =
    "list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent";
  const inner = (
    <>
      {text}
      <span aria-hidden="true">&rsaquo;</span>
    </>
  );
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer external" className={className}>
        {inner}
      </a>
    );
  }
  if (!isValidRoute(link)) {
    return <span className={`${className} text-muted`}>{inner}</span>;
  }
  return (
    <Link href={link} className={className}>
      {inner}
    </Link>
  );
}

export default function AboutPage() {
  const about = loadYaml<AboutData[]>("about.yaml")[0];
  const { cover, sections, listLinks } = about;

  return (
    <>
      {cover?.image && (
        <div className="position-relative w-100 mb-2">
          <MediaImage
            src={cover.image}
            alt={cover.title || "About ISRO"}
            className="w-100"
            style={{
              opacity: 0.5,
              objectPosition: "top right",
              objectFit: "cover",
              maxHeight: "400px",
              width: "100%",
              height: "auto",
            }}
            sizes="100vw"
            priority
          />
          {cover.title && (
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
          )}
        </div>
      )}

      <div className="container mt-2">
        {sections.map((section, ind) => (
          <div key={ind}>
            {section.text && (
              <div
                className="markdown-content text-justify mb-1"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            )}
            {section.image && (
              <figure className="figure h-100 w-100 mb-1 mx-auto d-block text-center">
                <MediaImage
                  src={section.image}
                  alt={section.caption || "ISRO"}
                  className="figure-img img-fluid mx-auto d-block"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                  sizes="(max-width: 600px) 100vw, 600px"
                />
                {section.caption && (
                  <figcaption className="figure-caption text-center">
                    {section.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        ))}
      </div>

      <div className="container">
        <Separator />
        <div className="row">
          {listLinks.map((set, ind) => (
            <div key={ind} className="col-sm">
              <div className="py-1">
                {set.title && <h3 className="mb-2">{set.title}</h3>}
                <div className="list-group list-group-flush">
                  {set.content.map((item, i) => (
                    <LinkItem key={i} link={item.link} text={item.text} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
