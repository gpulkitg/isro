import { loadYaml, listYamlFiles } from "@/lib/content/yaml";
import type { SectionTable } from "@/lib/content/types";

// ---- mars-orbiter-mission-pages/*.yaml ----
// A cover (title + hero image), a page title, and a list of sections. Each
// section may carry multiple images and/or gifs (each with a caption), a
// markdown text body, and an optional table. The `text` field uses the
// `!markdown` YAML tag, so it arrives already rendered to an HTML string.

export interface MomCover {
  title: string;
  image: string;
}

export interface MomSectionImage {
  image: string;
  caption?: string;
}

export interface MomSectionGif {
  gif: string;
  caption?: string;
}

export interface MomSection {
  title?: string;
  images?: MomSectionImage[];
  gifs?: MomSectionGif[];
  caption?: string;
  /** HTML rendered from the `!markdown` tag at load time. */
  text?: string;
  table?: SectionTable;
}

export interface MarsOrbiterMissionPage {
  slug: string;
  cover: MomCover;
  title: string;
  sections: MomSection[];
}

const DIR = "mars-orbiter-mission-pages";

export function getAllMarsOrbiterMissionPages(): MarsOrbiterMissionPage[] {
  return listYamlFiles(DIR).map((f) =>
    loadYaml<MarsOrbiterMissionPage>(`${DIR}/${f}`),
  );
}

export function getMarsOrbiterMissionPage(
  slug: string,
): MarsOrbiterMissionPage | undefined {
  return getAllMarsOrbiterMissionPages().find((p) => p.slug === slug);
}
