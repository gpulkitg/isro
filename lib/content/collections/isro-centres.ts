import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// ---- isro-centres/*.yaml ----
export interface IsroCentreLocation {
  /** Optional sub-location name (often empty for single-location centres). */
  name?: string;
  /** Raw YAML image reference, e.g. "../../images/about/centres/x.jpg". */
  image?: string;
  headPosition?: string;
  head?: string;
  address?: string;
  email?: string;
  /** External website URL. */
  link?: string;
  /** HTML string (the `!markdown` tag is rendered at load time). */
  description?: string;
}

export interface IsroCentre {
  title: string;
  /** Absolute site path, e.g. "/about/vikram-sarabhai-space-centre-vssc". */
  slug: string;
  /** Raw YAML image reference for the centre header (currently unused). */
  image?: string;
  /** HTML string (the `!markdown` tag is rendered at load time). */
  description?: string;
  locations: IsroCentreLocation[];
}

const DIR = "isro-centres";

export function getAllIsroCentres(): IsroCentre[] {
  return listYamlFiles(DIR).map((f) => loadYaml<IsroCentre>(`${DIR}/${f}`));
}

export function getIsroCentre(slug: string): IsroCentre | undefined {
  return getAllIsroCentres().find((c) => c.slug === slug);
}
