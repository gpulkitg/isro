import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// ---- publications-pages/*.yaml ----
// A publications landing page: a title + a grid of cards (each linking to a PDF/
// doc and showing a cover image), plus an optional flat list of extra documents.

export interface PublicationsContent {
  /** Plain-text card title (not markdown). */
  text: string;
  /** Relative path to a PDF/doc under src/docs. */
  doc: string;
  /** Raw YAML image reference for the card cover. */
  image: string;
}

export interface PublicationsListItem {
  text: string;
  /** Relative path to a PDF/doc under src/docs. */
  doc: string;
}

export interface PublicationsListItems {
  title: string;
  content: PublicationsListItem[];
}

export interface PublicationsPageCover {
  image: string;
}

export interface PublicationsPage {
  slug: string;
  title: string;
  cover?: PublicationsPageCover;
  contents: PublicationsContent[];
  listItems?: PublicationsListItems;
}

const DIR = "publications-pages";

export function getAllPublicationsPages(): PublicationsPage[] {
  return listYamlFiles(DIR).map((f) =>
    loadYaml<PublicationsPage>(`${DIR}/${f}`),
  );
}

export function getPublicationsPage(slug: string): PublicationsPage | undefined {
  return getAllPublicationsPages().find((p) => p.slug === slug);
}
