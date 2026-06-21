import Separator from "@/components/separator";
import MediaImage from "@/components/media-image";
import LinkVersatile from "@/components/link-versatile";
import { getAllPublicationsPages } from "@/lib/content/collections/publications-pages";

export const metadata = { title: "Publications" };

// Landing page: a card grid linking to each publications sub-page.
export default function PublicationsPage() {
  const pages = getAllPublicationsPages();

  return (
    <div className="container">
      <Separator />
      <h2 className="text-center mb-2">Publications</h2>

      <div className="row">
        {pages.map((p) => (
          <div key={p.slug} className="col-lg-4 col-md-6 mb-2">
            <div className="card card-brighten text-white h-100">
              {p.cover?.image && (
                <MediaImage
                  src={p.cover.image}
                  alt={p.title}
                  className="card-brighten-img card-img-top"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <LinkVersatile url={p.slug} className="stretched-link">
                  <span className="visually-hidden">{p.title}</span>
                </LinkVersatile>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
