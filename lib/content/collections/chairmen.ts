import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// ---- chairmen/*.yaml ----
// Biography-style pages for past/present ISRO chairmen. The markdown fields
// (about/biodata/positions/accomplishments/awards/contributions/fellowships)
// are rendered to HTML strings at load time via the `!markdown` YAML tag.
// Empty fields appear in the source as "" rather than being omitted.

export interface ChairmanLink {
  name: string;
  link: string;
}

export interface Chairman {
  slug: string;
  name: string;
  tenure: string;
  position?: string;
  image: string;
  /** HTML string (from `!markdown`), or "" when absent. */
  about?: string;
  biodata?: string;
  positions?: string;
  accomplishments?: string;
  awards?: string;
  contributions?: string;
  fellowships?: string;
  links?: ChairmanLink[];
}

export function getAllChairmen(): Chairman[] {
  return listYamlFiles("chairmen").map((f) =>
    loadYaml<Chairman>(`chairmen/${f}`),
  );
}

export function getChairman(slug: string): Chairman | undefined {
  return getAllChairmen().find((c) => c.slug === slug);
}
