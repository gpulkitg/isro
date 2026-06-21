import Link from "next/link";
import MediaImage from "@/components/media-image";
import { getAllIsroCentres } from "@/lib/content/collections/isro-centres";

export const metadata = { title: "ISRO Centres" };

export default function IsroCentresPage() {
  const centres = getAllIsroCentres();

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">ISRO Centres</h2>

      <div className="row">
        {centres.map((centre) => (
          <div key={centre.slug} className="col-lg-4 col-md-6 mb-3">
            <Link href={centre.slug} className="text-decoration-none">
              <div className="card bg-dark text-white h-100">
                <MediaImage
                  src={centre.image ?? centre.locations?.[0]?.image}
                  alt={centre.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0 text-center">{centre.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
