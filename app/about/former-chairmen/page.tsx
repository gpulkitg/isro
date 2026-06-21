import Link from "next/link";
import MediaImage from "@/components/media-image";
import { getAllChairmen } from "@/lib/content/collections/chairmen";

export const metadata = { title: "Former Chairmen" };

const CURRENT_CHAIRMAN_SLUG = "/about/chairman-isro-secretary-dos";

export default function FormerChairmenPage() {
  // Exclude the current chairman, then sort by tenure DESC (string compare,
  // matching the Gatsby `sort: {order: DESC, fields: tenure}` query).
  const chairmen = getAllChairmen()
    .filter((c) => c.slug !== CURRENT_CHAIRMAN_SLUG)
    .sort((a, b) => b.tenure.localeCompare(a.tenure));

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Former Chairmen</h2>

      <div className="row">
        {chairmen.map((chairman) => (
          <div key={chairman.slug} className="col-lg-4 col-md-6 mb-4">
            <Link
              href={chairman.slug}
              className="text-decoration-none text-reset"
            >
              <div className="card card-brighten h-100 bg-dark text-light">
                <MediaImage
                  src={chairman.image}
                  alt={chairman.name}
                  className="card-img-top card-brighten-img"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{chairman.name}</h5>
                  <p className="card-text text-muted mb-0">{chairman.tenure}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
