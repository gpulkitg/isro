import { loadYaml, listYamlFiles } from "@/lib/content/yaml";
import { getMasterList } from "@/lib/content";
import type {
  SeoMeta,
  DocLink,
  OtherLink,
  ImageGallery,
  VideoGallery,
  Update,
} from "@/lib/content/types";

// ---- missions-showcase/*.yaml ----
// A showcase landing page for a single mission: a hero ("jumbotron"), optional
// split sections, two markdown text blocks, two card grids, an image gallery,
// and a vertical timeline. The page is tied to a master-list entry + related
// data via its `tag`.

export interface ShowcaseJumbotron {
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

export interface ShowcaseSplitSection {
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

export interface ShowcaseTextContent {
  title?: string;
  /** HTML string (source field used the `!markdown` tag). */
  text?: string;
  image?: string;
  caption?: string;
}

export interface ShowcaseCard {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: string;
  link?: string;
}

export interface ShowcaseGalleryPhoto {
  image: string;
  caption?: string;
}

export interface ShowcaseGallery {
  link?: string;
  photos: ShowcaseGalleryPhoto[];
}

export interface ShowcaseCardSection2 {
  link?: string;
  cards: ShowcaseCard[];
}

export interface ShowcaseTimelineEvent {
  date?: string;
  title?: string;
  subtitle?: string;
}

export interface ShowcaseVerticalTimeline {
  title?: string;
  events?: ShowcaseTimelineEvent[];
}

export interface MissionShowcase {
  slug: string;
  tag?: string;
  seo?: SeoMeta;
  jumbotronImg?: ShowcaseJumbotron[];
  splitSection?: ShowcaseSplitSection[];
  textContent1?: ShowcaseTextContent;
  cardSection?: ShowcaseCard[];
  gallery?: ShowcaseGallery;
  cardSection2?: ShowcaseCardSection2;
  verticalTimeline?: ShowcaseVerticalTimeline;
  textContent2?: ShowcaseTextContent;
}

/** Related data assembled from the master list + tagged collections. */
export interface MissionShowcaseRelated {
  otherLinks: OtherLink[];
  docs?: DocLink[];
  galleriesImage: ImageGallery[];
  galleriesVideo: VideoGallery[];
  updates: Update[];
}

export function getAllMissionsShowcase(): MissionShowcase[] {
  return listYamlFiles("missions-showcase").map((f) =>
    loadYaml<MissionShowcase>(`missions-showcase/${f}`),
  );
}

export function getMissionsShowcase(slug: string): MissionShowcase | undefined {
  return getAllMissionsShowcase().find((p) => p.slug === slug);
}

/**
 * Build the "Related" block for a showcase page. Mirrors the Gatsby template:
 * it pulls the master-list entry matching the page tag (for spacecraft/launcher
 * page links + docs + otherLinks) and the tagged galleries/updates.
 */
export function getMissionsShowcaseRelated(
  tag: string | undefined,
): MissionShowcaseRelated {
  const master = tag ? getMasterList().find((m) => m.tag === tag) : undefined;

  const otherLinks: OtherLink[] = [];
  if (master?.launcherLink) {
    otherLinks.push({ link: master.launcherLink, text: master.launcherName });
  }
  if (master?.spacecraftLink) {
    otherLinks.push({ link: master.spacecraftLink, text: master.spacecraftName });
  }
  if (master?.otherLinks) otherLinks.push(...master.otherLinks);

  const galleriesImage = tag
    ? loadYaml<ImageGallery[]>("galleries/image.yaml").filter((g) => g.tag === tag)
    : [];
  const galleriesVideo = tag
    ? loadYaml<VideoGallery[]>("galleries/video.yaml").filter((g) => g.tag === tag)
    : [];
  const updates = tag
    ? loadYaml<Update[]>("updates.yaml")
        .filter((u) => u.tag === tag)
        .slice(0, 5)
    : [];

  return {
    otherLinks,
    docs: master?.docs,
    galleriesImage,
    galleriesVideo,
    updates,
  };
}
