import Link from "next/link";
import { isValidRoute } from "@/lib/content/routes";
import { loadYaml } from "@/lib/content/yaml";
import { getMasterList } from "@/lib/content";
import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";

export const metadata = { title: "Missions" };

interface JumbotronImg {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  button?: string;
  link?: string;
  horizontalPosition?: string;
  verticalPosition?: string;
  textAlignment?: string;
}

interface SplitSection {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  button?: string;
  link?: string;
  textPosition?: string;
  textAlignment?: string;
  objectFit?: string;
}

interface LinkContent {
  link: string;
  text: string;
}

interface ListSet {
  title?: string;
  content: LinkContent[];
}

interface MissionsData {
  seo?: { title?: string };
  jumbotronImg?: JumbotronImg[];
  splitSection?: SplitSection[];
  listTrendingMissions?: ListSet;
}

function horizontalClasses(pos?: string): string {
  if (pos === "center") return "justify-content-center";
  if (pos === "right") return "justify-content-end";
  return "";
}

function verticalClasses(pos?: string): string {
  if (pos === "center") return "justify-content-center";
  if (pos === "bottom") return "justify-content-end";
  return "";
}

function textAlignClasses(align?: string): string {
  if (align === "center") return "text-center";
  if (align === "right") return "text-end";
  return "";
}

function CtaButton({ link, label }: { link?: string; label?: string }) {
  if (!label) return null;
  const href = link || "/";
  const className = "btn btn-outline-light btn-jumbotron";
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer external" className={className}>
        {label}
      </a>
    );
  }
  if (!isValidRoute(href)) {
    return <span className={className} aria-disabled="true">{label}</span>;
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function ListItem({ link, text }: LinkContent) {
  const className =
    "list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent";
  const inner = (
    <>
      {text}
      <span aria-hidden="true">&rsaquo;</span>
    </>
  );
  if (/^https?:\/\//.test(link)) {
    return (
      <a href={link} target="_blank" rel="noreferrer external" className={className}>
        {inner}
      </a>
    );
  }
  if (!isValidRoute(link)) {
    return <span className={`${className} text-muted`}>{inner}</span>;
  }
  return (
    <Link href={link} className={className}>
      {inner}
    </Link>
  );
}

export default function MissionsPage() {
  const data = loadYaml<MissionsData[]>("missions.yaml")[0];
  const jumbotronImg = data.jumbotronImg ?? [];
  const splitSection = data.splitSection ?? [];
  const listTrendingMissions = data.listTrendingMissions;

  // Latest 4 missions from the master list, sorted by launchDate DESC.
  const latest = [...getMasterList()]
    .sort((a, b) => (a.launchDate < b.launchDate ? 1 : a.launchDate > b.launchDate ? -1 : 0))
    .slice(0, 4);

  const listLatestMissions: ListSet = {
    title: "Latest",
    content: latest.map((node) => ({
      text: node.launcherLink ? node.launcherName : node.spacecraftName,
      link: node.launcherLink ? node.launcherLink : node.spacecraftLink,
    })),
  };

  const listAllMissions: ListSet[] = [];
  if (listTrendingMissions) listAllMissions.push(listTrendingMissions);
  listAllMissions.push(listLatestMissions);

  return (
    <>
      {jumbotronImg.map((item, ind) => (
        <div key={`jumbotronImg_${ind}`} className="jumbotron jumbotron-container">
          <MediaImage
            src={item.image}
            alt={item.title || "ISRO mission"}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              objectFit: "cover",
              opacity: 0.7,
              right: 0,
              bottom: 0,
            }}
            sizes="100vw"
            priority={ind === 0}
          />
          <div className="container lead">
            <div className={`row vh-100 ${horizontalClasses(item.horizontalPosition)}`}>
              <div
                className={`col-lg-6 col-md-8 d-flex flex-column py-4 ${verticalClasses(
                  item.verticalPosition,
                )} ${textAlignClasses(item.textAlignment)}`}
              >
                {item.title && <h1 className="mb-2 display-4">{item.title}</h1>}
                {item.subtitle && <h3 className="mb-2">{item.subtitle}</h3>}
                {item.description && <p className="mb-2 text-start">{item.description}</p>}
                {item.button && (
                  <div>
                    <CtaButton link={item.link} label={item.button} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {splitSection.map((item, ind) => {
        const textOrder = item.textPosition === "left" ? "order-md-0" : "order-md-2";
        return (
          <div key={`splitSection_${ind}`} className="container">
            <div className="row">
              <div className="col-md split-section-img-wrapper order-md-1">
                <MediaImage
                  src={item.image}
                  alt={item.title || "ISRO mission"}
                  className="h-100 w-100"
                  style={{ objectFit: (item.objectFit || "cover") as "cover" | "contain" | "fill" | "none" | "scale-down", width: "100%", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className={`col-md d-flex flex-column justify-content-center ${textOrder} ${textAlignClasses(
                  item.textAlignment,
                )}`}
              >
                {item.title && <h1 className="mb-2 display-4">{item.title}</h1>}
                {item.subtitle && <h3 className="mb-2">{item.subtitle}</h3>}
                {item.description && <p className="mb-2 text-start">{item.description}</p>}
                {item.button && (
                  <div className="mb-2">
                    <CtaButton link={item.link} label={item.button} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className="container">
        <Separator />
        <div className="row">
          {listAllMissions.map((set, ind) => (
            <div key={`list_${ind}`} className="col-sm">
              <div className="py-1">
                {set.title && <h3 className="mb-2">{set.title}</h3>}
                <div className="list-group list-group-flush">
                  {set.content.map((item, i) => (
                    <ListItem key={`${ind}_${i}`} link={item.link} text={item.text} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-1">
          <Link href="/list-of-spacecrafts" className="btn btn-outline-light btn-jumbotron">
            LIST OF ALL MISSIONS
          </Link>
        </div>
      </div>
    </>
  );
}
