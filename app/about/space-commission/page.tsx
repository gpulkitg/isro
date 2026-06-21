import MediaImage from "@/components/media-image";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Space Commission" };

type Member = {
  name: string;
  designation: string;
  position: string;
  image: string;
};

export default function SpaceCommissionPage() {
  const members = loadYaml<Member[]>("space-commission.yaml");

  return (
    <div className="container py-3">
      <h2 className="mb-3 text-center">Space Commission</h2>

      <div className="row">
        {members.map((member, ind) => (
          <div key={`${member.name}-${ind}`} className="col-lg-4 col-md-6 mb-3">
            <div
              className="card text-white h-100"
              style={{ border: "none", boxShadow: "0 0 1px 1px white" }}
            >
              <MediaImage
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-1">{member.name}</h5>
                <h6 className="card-subtitle text-muted mb-1">
                  {member.designation}
                </h6>
                <p className="card-text">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
