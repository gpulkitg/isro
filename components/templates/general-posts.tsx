import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import { assetUrl } from "@/lib/content/assets";
import type { GeneralPost } from "@/lib/content/collections/general-posts";

type Props = {
  post: GeneralPost;
};

// Fallback label for a doc link when no `text` is given: the file basename.
function docLabel(doc: string): string {
  const parts = doc.split("/");
  return parts[parts.length - 1] || doc;
}

export default function GeneralPosts({ post }: Props) {
  const { title, sections } = post;

  return (
    <>
      <Separator />

      <div className="container">
        {title && <h2 className="mb-2">{title}</h2>}

        <div className="mb-2" style={{ borderBottom: "1px solid gray" }} />

        {sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <h4 className="text-center mb-2">{section.title}</h4>
            )}

            {section.images && section.images.length > 0 && (
              <div className="row d-flex align-items-end mb-2">
                {section.images.map((item, j) => (
                  <div className="col-md" key={j}>
                    <figure className="figure w-100">
                      <MediaImage
                        src={item.image}
                        alt={item.caption || title || "ISRO"}
                        className="figure-img img-fluid"
                        style={{
                          maxHeight: "400px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {item.caption && (
                        <figcaption className="figure-caption text-center">
                          {item.caption}
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

            {section.docs && section.docs.length > 0 && (
              <div className="mb-2">
                <ul>
                  {section.docs.map((item, j) => (
                    <li className="mb-1" key={j}>
                      <a
                        href={assetUrl(item.doc)}
                        className="no-underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.text ? item.text : docLabel(item.doc)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
