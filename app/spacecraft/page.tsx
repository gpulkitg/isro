import Link from "next/link";
import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";
import LinkVersatile from "@/components/link-versatile";
import { getMasterList } from "@/lib/content";
import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Spacecraft" };

interface JumbotronImg {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  button?: string;
  link?: string;
}

interface ListItem {
  link: string;
  text: string;
}

interface ListGroup {
  title: string;
  content: ListItem[];
}

interface SplitSection {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  button?: string;
  link: string;
  textPosition?: string;
  objectFit?: string;
}

interface CardSection {
  title: string;
  subtitle?: string;
  text?: string;
  image: string;
  link: string;
}

interface SpacecraftLanding {
  seo: { title: string };
  jumbotronImg: JumbotronImg[];
  listTrendingSpacecrafts: ListGroup;
  splitSection: SplitSection[];
  cardSection: CardSection[];
}

export default function SpacecraftPage() {
  const data = loadYaml<SpacecraftLanding[]>("spacecraft.yaml")[0];
  const { jumbotronImg, listTrendingSpacecrafts, splitSection, cardSection } = data;

  // Latest spacecraft from the master list, sorted by launch date (DESC), top 3.
  const latest = [...getMasterList()]
    .sort((a, b) => (a.launchDate < b.launchDate ? 1 : a.launchDate > b.launchDate ? -1 : 0))
    .slice(0, 3);

  const listGroups: ListGroup[] = [
    listTrendingSpacecrafts,
    {
      title: "Latest",
      content: latest.map((m) => ({ text: m.spacecraftName, link: m.spacecraftLink })),
    },
  ];

  return (
    <>
      {jumbotronImg?.map((item, ind) => (
        <div key={`jumbotron_${ind}`} className="position-relative jumbotron-container">
          <MediaImage
            src={item.image}
            alt={item.title}
            priority
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.7,
            }}
          />
          <div className="container position-relative lead">
            <div className="row justify-content-center" style={{ minHeight: "60vh" }}>
              <div className="col-lg-6 col-md-8 d-flex flex-column justify-content-center text-center py-4">
                <h1 className="display-4">{item.title}</h1>
                {item.subtitle ? <h2>{item.subtitle}</h2> : null}
                {item.description ? <p>{item.description}</p> : null}
                {item.button && item.link ? (
                  <div>
                    <LinkVersatile url={item.link} className="btn btn-outline-light btn-jumbotron">
                      {item.button}
                    </LinkVersatile>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Separator />

      <div className="container">
        <div className="row justify-content-center">
          {listGroups.map((group, gi) => (
            <div key={`group_${gi}`} className="col-md-6 mb-3 text-center">
              <h3 className="mb-3">{group.title}</h3>
              <ul className="list-unstyled">
                {group.content.map((item, ii) => (
                  <li key={`item_${gi}_${ii}`} className="mb-2">
                    <LinkVersatile url={item.link}>{item.text}</LinkVersatile>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-2">
        <Link href="/list-of-spacecrafts" className="btn btn-outline-light btn-jumbotron">
          LIST OF ALL SPACECRAFTS
        </Link>
      </div>

      {splitSection?.map((item, ind) => (
        <div key={`split_${ind}`} className="container my-3">
          <div className="row align-items-center">
            <div
              className={`col-md-6 ${
                item.textPosition === "right" ? "order-md-1" : "order-md-2"
              } mb-2`}
            >
              <MediaImage
                src={item.image}
                alt={item.title}
                className="w-100"
                style={{ objectFit: (item.objectFit as "cover" | "contain") ?? "cover" }}
              />
            </div>
            <div
              className={`col-md-6 d-flex flex-column justify-content-center ${
                item.textPosition === "right" ? "order-md-2" : "order-md-1"
              }`}
            >
              <h2 className="mb-2">{item.title}</h2>
              {item.subtitle ? <h3 className="mb-2">{item.subtitle}</h3> : null}
              {item.description ? <p className="mb-2">{item.description}</p> : null}
              <div>
                <LinkVersatile url={item.link} className="btn btn-outline-light btn-jumbotron">
                  {item.button || "LEARN MORE"}
                </LinkVersatile>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="container">
        <Separator title="Others" />

        <div className="row d-flex justify-content-center">
          {cardSection?.map((card, ind) => (
            <div key={`card_${ind}`} className="col-lg-4 col-md-6 mb-2">
              <div className="card card-brighten bg-dark text-white h-100">
                <Link href={card.link} className="text-decoration-none text-reset">
                  <MediaImage
                    src={card.image}
                    alt={card.title}
                    className="card-img-top card-brighten-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{card.title}</h5>
                    {card.text ? <p className="card-text">{card.text}</p> : null}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-1">
          <Link href="/list-of-spacecrafts" className="btn btn-outline-light btn-jumbotron">
            LIST OF ALL SPACECRAFTS
          </Link>
        </div>
      </div>
    </>
  );
}
