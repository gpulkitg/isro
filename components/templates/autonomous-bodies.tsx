import { Geo, Envelope, Globe } from "react-bootstrap-icons";
import MediaImage from "@/components/media-image";
import type {
  AutonomousBody,
  AutonomousBodyLocation,
} from "@/lib/content/collections/autonomous-bodies";

// Ported from the Gatsby autonomous-body template: a title + optional
// description, then one block per location with an image, head info, and
// contact cards (email / address / website).
export default function AutonomousBodies({ body }: { body: AutonomousBody }) {
  return (
    <div className="container">
      <h2 className="mb-2 text-center">{body.title}</h2>
      {body.description && (
        <div
          className="markdown-content mb-2"
          dangerouslySetInnerHTML={{ __html: body.description }}
        />
      )}

      {body.locations.map((location, i) => (
        <LocationBlock key={i} location={location} title={body.title} />
      ))}
    </div>
  );
}

function LocationBlock({
  location,
  title,
}: {
  location: AutonomousBodyLocation;
  title: string;
}) {
  return (
    <div className="mb-2">
      {location.name && <h3 className="text-center mb-1">{location.name}</h3>}

      <div className="row mb-1 justify-content-center align-items-center">
        <div className="col-lg-6">
          <MediaImage
            src={location.image}
            alt={location.name || title}
            className="img-fluid w-100"
            style={{ objectFit: "contain" }}
            sizes="(max-width: 992px) 100vw, 50vw"
          />
        </div>
        {location.headPosition && location.head && (
          <div className="col-lg">
            <div className="text-center py-1">
              <h5 className="text-muted">{location.headPosition}</h5>
              <h3>{location.head}</h3>
            </div>
          </div>
        )}
      </div>

      <div className="row align-items-stretch justify-content-center mb-1">
        {location.email && (
          <ContactCard icon={<Envelope width="32" height="32" />}>
            <u>
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </u>
          </ContactCard>
        )}
        {location.address && (
          <ContactCard icon={<Geo width="32" height="32" />}>
            <p className="mb-0">{location.address}</p>
          </ContactCard>
        )}
        {location.link && (
          <ContactCard icon={<Globe width="32" height="32" />}>
            <a href={location.link} rel="noreferrer external" target="_blank">
              {location.link}
            </a>
          </ContactCard>
        )}
      </div>

      {location.description && (
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: location.description }}
        />
      )}
    </div>
  );
}

function ContactCard({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="col-md-4 p-1">
      <div className="text-center h-100" style={{ border: "1px solid gray" }}>
        <div className="p-1">{icon}</div>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
}
