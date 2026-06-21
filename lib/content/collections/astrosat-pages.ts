import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// astrosat-pages/*.yaml: a cover hero + a title + sections that each carry a
// plural images[] array and a markdown text body. No master-list / related data.

export interface AstrosatCover {
  title: string;
  image: string;
}

export interface AstrosatSectionImage {
  /** Raw YAML media reference, e.g. "../../images/foo.jpg". */
  image: string;
  caption?: string;
}

export interface AstrosatSection {
  title?: string;
  images?: AstrosatSectionImage[];
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  text?: string;
}

export interface AstrosatPage {
  slug: string;
  cover: AstrosatCover;
  title: string;
  sections: AstrosatSection[];
}

const DIR = "astrosat-pages";

export function getAllAstrosatPages(): AstrosatPage[] {
  return listYamlFiles(DIR).map((f) => loadYaml<AstrosatPage>(`${DIR}/${f}`));
}

export function getAstrosatPage(slug: string): AstrosatPage | undefined {
  return getAllAstrosatPages().find((p) => p.slug === slug);
}
