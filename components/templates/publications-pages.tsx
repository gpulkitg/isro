import { ChevronRight } from "react-bootstrap-icons";
import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import { assetUrl } from "@/lib/content/assets";
import type {
  PublicationsPage,
  PublicationsListItem,
} from "@/lib/content/collections/publications-pages";

type Props = {
  page: PublicationsPage;
};

function ListItem({ item }: { item: PublicationsListItem }) {
  return (
    <a
      href={assetUrl(item.doc)}
      target="_blank"
      rel="noreferrer"
      className="list-group-item list-group-item-action"
    >
      {item.text}
      <ChevronRight style={{ float: "right" }} />
    </a>
  );
}

export default function PublicationsPagesTemplate({ page }: Props) {
  const { title, contents, listItems } = page;

  const evenItems = listItems
    ? listItems.content.filter((_, i) => i % 2 === 0)
    : [];
  const oddItems = listItems
    ? listItems.content.filter((_, i) => i % 2 === 1)
    : [];

  return (
    <div className="container">
      <Separator />
      <h2 className="text-center mb-2">{title}</h2>

      <div className="row">
        {contents.map((item, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-2">
            <a
              href={assetUrl(item.doc)}
              target="_blank"
              rel="noreferrer"
              className="card card-brighten h-100 text-decoration-none"
            >
              <MediaImage
                src={item.image}
                alt={item.text}
                className="card-brighten-img card-img-top"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{item.text}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>

      {listItems && (
        <>
          <Separator title={listItems.title} />
          <div className="row">
            <div className="col-md">
              <div className="py-1">
                <div className="list-group list-group-flush">
                  {evenItems.map((item, i) => (
                    <ListItem key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="py-1">
                <div className="list-group list-group-flush">
                  {oddItems.map((item, i) => (
                    <ListItem key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
