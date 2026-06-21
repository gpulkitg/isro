import Link from "next/link";
import MediaImage from "@/components/media-image";
import { getAllAutonomousBodies } from "@/lib/content/collections/autonomous-bodies";

export const metadata = { title: "Autonomous Bodies" };

export default function AutonomousBodiesPage() {
  const bodies = getAllAutonomousBodies();

  return (
    <div className="container">
      <h2 className="mb-2 text-center">Autonomous Bodies</h2>

      <div className="row">
        {bodies.map((body) => (
          <div key={body.slug} className="col-lg-4 col-md-6 mb-2">
            <Link href={body.slug} className="card bg-dark text-decoration-none h-100">
              {body.image && (
                <MediaImage
                  src={body.image}
                  alt={body.title}
                  className="card-img-top card-brighten-img"
                />
              )}
              <div className="card-body">
                <h5 className="card-title text-center mb-0">{body.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
