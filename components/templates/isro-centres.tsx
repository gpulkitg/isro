import { Geo, Envelope, Globe } from "react-bootstrap-icons";
import MediaImage from "@/components/media-image";
import type { IsroCentre, IsroCentreLocation } from "@/lib/content/collections/isro-centres";

export type IsroCentresProps = {
  centre: IsroCentre;
};

function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-md-4 p-1">
      <div className="text-center h-100" style={{ border: "1px solid gray" }}>
        {children}
      </div>
    </div>
  );
}

function Location({
  location,
  centreTitle,
  index,
}: {
  location: IsroCentreLocation;
  centreTitle: string;
  index: number;
}) {
  const hasHead = Boolean(location.headPosition && location.head);

  return (
    <div className="mb-2">
      {location.name && <h3 className="text-center mb-1">{location.name}</h3>}

      <div className="row mb-1 justify-content-center align-items-center">
        {location.image && (
          <div className="col-lg-6">
            <MediaImage
              src={location.image}
              alt={location.name || centreTitle}
              className="img-fluid w-100"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 992px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        )}
        {hasHead && (
          <div className="col-lg">
            <div className="text-center py-2">
              <h5 className="text-muted">{location.headPosition}</h5>
              <h3>{location.head}</h3>
            </div>
          </div>
        )}
      </div>

      <div className="row align-items-stretch justify-content-center mb-1">
        {location.email && (
          <ContactCard>
            <div className="p-1">
              <Envelope width="32" height="32" />
            </div>
            <div className="p-1">
              <u>
                <a href={`mailto:${location.email}`}>{location.email}</a>
              </u>
            </div>
          </ContactCard>
        )}
        {location.address && (
          <ContactCard>
            <div className="p-1">
              <Geo width="32" height="32" />
            </div>
            <div className="p-1">
              <p>{location.address}</p>
            </div>
          </ContactCard>
        )}
        {location.link && (
          <ContactCard>
            <div className="p-1">
              <Globe width="32" height="32" />
            </div>
            <div className="p-1">
              <a href={location.link} rel="noreferrer external" target="_blank">
                {location.link}
              </a>
            </div>
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

export default function IsroCentres({ centre }: IsroCentresProps) {
  return (
    <div className="container">
      <h2 className="mb-2 text-center">{centre.title}</h2>
      {centre.description && (
        <div
          className="markdown-content mb-2"
          dangerouslySetInnerHTML={{ __html: centre.description }}
        />
      )}

      {centre.locations.map((location, i) => (
        <Location
          key={`location_${i}`}
          location={location}
          centreTitle={centre.title}
          index={i}
        />
      ))}
    </div>
  );
}
