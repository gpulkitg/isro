// Typed shapes for the YAML content collections. Started with the collections
// needed for the vertical slice (home + spacecraft pages and their related
// data); extended as more collections are ported.

export interface SeoMeta {
  title: string;
}

// ---- home.yaml ----
export interface CarouselItem {
  title: string;
  image: string;
  slug: string;
}
export interface HomeTextContent {
  title: string;
  text: string;
}
export interface HomeCounter {
  count: number;
  text: string;
}
export interface HomeCard {
  title: string;
  image: string;
  link: string;
}
export interface HomeSotw {
  title: string;
  image: string;
  description: string;
  link: string;
}
export interface Home {
  seo?: SeoMeta;
  carouselSection: CarouselItem[];
  textContent: HomeTextContent;
  coverImg: string;
  counters: HomeCounter[];
  cardSection: HomeCard[];
  sotw: HomeSotw;
}

// ---- shared section/table model (launcher/spacecraft/astrosat/mom/general) ----
export interface TableCell {
  text: string;
}
export interface TableRow {
  row: { col: TableCell }[];
}
export interface SectionTable {
  title?: string;
  head?: { col: TableCell }[];
  body: TableRow[];
}
export interface PageSection {
  title?: string;
  image?: string;
  caption?: string;
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  text?: string;
  table?: SectionTable;
}

// ---- spacecraft-pages/*.yaml + launcher-pages/*.yaml (same shape) ----
export interface SpacecraftPage {
  slug: string;
  tag?: string;
  sections: PageSection[];
}
export type LauncherPage = SpacecraftPage;

// ---- master-list.yaml ----
export interface DocLink {
  text: string;
  /** relative path to a PDF under src/docs */
  doc: string;
}
export interface OtherLink {
  text: string;
  link: string;
}
export interface MasterListItem {
  launcherName: string;
  launcherLink: string;
  spacecraftName: string;
  spacecraftLink: string;
  launchDate: string;
  launcherType?: string;
  spacecraftType?: string;
  orbitType?: string;
  application?: string;
  remarks?: string;
  tag?: string;
  docs?: DocLink[];
  otherLinks?: OtherLink[];
}

// ---- updates.yaml ----
export interface Update {
  title: string;
  image?: string;
  description?: string;
  date: string;
  slug: string;
  tag?: string;
}

// ---- galleries/image.yaml, galleries/video.yaml ----
export interface ImageGallery {
  title: string;
  image: string;
  slug: string;
  imagesDir: string;
  dateAdded?: string;
  tag?: string;
}
export interface VideoGallery {
  title: string;
  poster: string;
  video: string;
  tag?: string;
}
