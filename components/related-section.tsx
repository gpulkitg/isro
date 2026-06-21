import { ChevronRight } from "react-bootstrap-icons";
import Separator from "./separator";
import { assetUrl } from "@/lib/content/assets";
import { isValidRoute } from "@/lib/content/routes";
import type {
  OtherLink,
  DocLink,
  ImageGallery,
  VideoGallery,
  Update,
} from "@/lib/content/types";

type Props = {
  otherLinks?: OtherLink[];
  docs?: DocLink[];
  galleriesImage?: ImageGallery[];
  galleriesVideo?: VideoGallery[];
  updates?: Update[];
};

function RelatedItem({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const content = (
    <>
      {children}
      <ChevronRight style={{ float: "right" }} />
    </>
  );
  if (external) {
    return (
      <a href={href} className="list-group-item list-group-item-action" target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  if (isValidRoute(href)) {
    return (
      <a href={href} className="list-group-item list-group-item-action">
        {content}
      </a>
    );
  }
  // dead internal link → non-clickable
  return <span className="list-group-item text-muted">{content}</span>;
}

export default function RelatedSection({
  otherLinks,
  docs,
  galleriesImage,
  galleriesVideo,
  updates,
}: Props) {
  return (
    <div className="container">
      <Separator title="Related" />

      <div className="row">
        <div className="col-md">
          <div className="py-1">
            <h3 className="mb-2">Links</h3>
            <div className="list-group list-group-flush">
              {otherLinks
                ?.filter((l) => l.link)
                .map((item, i) => (
                  <RelatedItem key={i} href={item.link} external={/^https?:/.test(item.link)}>
                    {item.text}
                  </RelatedItem>
                ))}
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="py-1">
            <h3 className="mb-2">Docs</h3>
            <div className="list-group list-group-flush">
              {docs?.map((item, i) => (
                <RelatedItem key={i} href={assetUrl(item.doc)} external>
                  {item.text}
                </RelatedItem>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="py-1">
            <h3 className="mb-2">Media</h3>
            <div className="list-group list-group-flush">
              {galleriesImage?.map((g, i) => (
                <RelatedItem key={`img-${i}`} href={g.slug}>
                  {g.title}
                </RelatedItem>
              ))}
              {galleriesVideo?.map((g, i) => (
                <RelatedItem key={`vid-${i}`} href={assetUrl(g.video)} external>
                  {g.title}
                </RelatedItem>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="py-1">
            <h3 className="mb-2">Latest News</h3>
            <div className="list-group list-group-flush">
              {updates?.map((u, i) => (
                <RelatedItem key={i} href={u.slug}>
                  <p className="text-info mb-0">{u.date}</p>
                  {u.title}
                </RelatedItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
