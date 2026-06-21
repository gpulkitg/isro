import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// ---- general-posts/*.yaml ----
// Free-form content pages (e.g. /citizens-charter, /disclaimer). Each section
// can carry a markdown blob, a list of images, and/or a list of doc links.

export interface GeneralPostImage {
  /** Raw YAML image reference, e.g. "../../images/general-posts/x.png". */
  image: string;
  caption?: string;
}

export interface GeneralPostDoc {
  /** Raw YAML path to a PDF under src/docs. */
  doc: string;
  text?: string;
}

export interface GeneralPostSection {
  title?: string;
  /** HTML string (the `!markdown` tag is rendered at load time). */
  text?: string;
  images?: GeneralPostImage[];
  docs?: GeneralPostDoc[];
}

export interface GeneralPost {
  slug: string;
  title: string;
  sections: GeneralPostSection[];
}

const DIR = "general-posts";

export function getAllGeneralPosts(): GeneralPost[] {
  return listYamlFiles(DIR).map((f) => loadYaml<GeneralPost>(`${DIR}/${f}`));
}

export function getGeneralPost(slug: string): GeneralPost | undefined {
  return getAllGeneralPosts().find((p) => p.slug === slug);
}
