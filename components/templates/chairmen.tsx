import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import LinkVersatile from "@/components/link-versatile";
import type { Chairman } from "@/lib/content/collections/chairmen";

type Props = {
  chairman: Chairman;
};

type MarkdownSection = {
  title: string;
  html?: string;
};

export default function ChairmanPage({ chairman }: Props) {
  const { name, tenure, image, links } = chairman;

  // The Gatsby template surfaced each biography field as a tab. As a server
  // component we render them sequentially, keeping the same labels and order.
  const sections: MarkdownSection[] = [
    { title: "About", html: chairman.about },
    { title: "Biodata", html: chairman.biodata },
    { title: "Positions Held", html: chairman.positions },
    { title: "Accomplishments", html: chairman.accomplishments },
    { title: "Awards & Honours", html: chairman.awards },
    { title: "Contributions", html: chairman.contributions },
    { title: "Fellowships & Memberships", html: chairman.fellowships },
  ];

  const visibleSections = sections.filter((s) => s.html && s.html.trim());

  return (
    <>
      <Separator />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="mb-2">
              <figure className="figure w-100">
                <MediaImage
                  src={image}
                  alt={name}
                  className="figure-img img-fluid"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
              </figure>
            </div>
            <div className="mb-2">
              <h3 className="mb-1">{name}</h3>
              {chairman.position && <h6 className="text-muted">{chairman.position}</h6>}
              <h5>{tenure}</h5>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            {visibleSections.map((section, i) => (
              <div key={i} className="mb-3">
                <h4 className="border-bottom pb-2 mb-2">
                  <em>{section.title}</em>
                </h4>
                <div
                  className="markdown-content py-2"
                  dangerouslySetInnerHTML={{ __html: section.html as string }}
                />
              </div>
            ))}

            {links && links.length > 0 && (
              <div className="mb-3">
                <h4 className="border-bottom pb-2 mb-2">
                  <em>Links</em>
                </h4>
                <ul className="py-2">
                  {links.map((item, i) => (
                    <li key={i}>
                      <LinkVersatile url={item.link}>{item.name}</LinkVersatile>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
