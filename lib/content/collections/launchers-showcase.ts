import { loadYaml, listYamlFiles } from "@/lib/content/yaml";
import { getMasterList } from "@/lib/content";
import type { SeoMeta, SectionTable, MasterListItem } from "@/lib/content/types";

// ---- launchers-showcase/*.yaml ----
// A showcase page for a launcher family (PSLV, GSLV Mk-II, GSLV Mk-III). It has
// a hero image, a fixed-background stats banner, a split spec section, intro
// copy, a carousel of stage sections, a hero video, more copy, a master-list
// table of every launch whose launcherType matches launcherTypeKeyword, and a
// closing figure. The Gatsby template filtered allMasterListYaml with a regex
// `/${launcherTypeKeyword}\b/`; we replicate that against getMasterList().

export interface ShowcaseJumbotronImg {
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

export interface ShowcaseFixBgContent {
  title: string;
  subtitles?: { line: string }[];
}

export interface ShowcaseFixBgSection {
  image: string;
  contents: ShowcaseFixBgContent[];
}

export interface ShowcaseSplitSection {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  textPosition?: string;
  textAlignment?: string;
  objectFit?: string;
  table?: SectionTable;
}

export interface ShowcaseTextContent {
  title?: string;
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  text?: string;
}

export interface ShowcaseCarouselSection {
  image: string;
  title?: string;
  description?: string;
  table?: SectionTable;
}

export interface ShowcaseJumbotronVideo {
  videoClip?: string;
  poster?: string;
  title?: string;
  video?: string;
}

export interface ShowcaseFigure {
  image: string;
  caption?: string;
}

export interface LaunchersShowcase {
  slug: string;
  seo?: SeoMeta;
  launcherTypeKeyword: string;
  jumbotronImg?: ShowcaseJumbotronImg[];
  fixBgSection?: ShowcaseFixBgSection;
  splitSection?: ShowcaseSplitSection[];
  textContent1?: ShowcaseTextContent;
  carouselSections?: ShowcaseCarouselSection[];
  jumbotronVideo?: ShowcaseJumbotronVideo;
  textContent2?: ShowcaseTextContent;
  figure?: ShowcaseFigure;
}

const DIR = "launchers-showcase";

export function getAllLaunchersShowcase(): LaunchersShowcase[] {
  return listYamlFiles(DIR).map((f) =>
    loadYaml<LaunchersShowcase>(`${DIR}/${f}`),
  );
}

export function getLaunchersShowcase(
  slug: string,
): LaunchersShowcase | undefined {
  return getAllLaunchersShowcase().find((p) => p.slug === slug);
}

/**
 * Master-list launches whose launcherType matches the showcase keyword.
 * Replicates the Gatsby regex `/${launcherTypeKeyword}\b/`. Returned in
 * master-list order (newest first), as the Gatsby query did.
 */
export function getShowcaseLaunches(keyword: string): MasterListItem[] {
  if (!keyword) return [];
  const re = new RegExp(`${keyword}\\b`);
  return getMasterList().filter((m) => m.launcherType && re.test(m.launcherType));
}
