import { loadYaml, listYamlFiles } from "@/lib/content/yaml";

// ---- autonomous-bodies/*.yaml ----
export interface AutonomousBodyLocation {
  name?: string;
  /** Raw YAML image reference, e.g. "../../images/x.jpg". */
  image: string;
  headPosition?: string;
  head?: string;
  address?: string;
  email?: string;
  link?: string;
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  description?: string;
}

export interface AutonomousBody {
  slug: string;
  title: string;
  image?: string;
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  description?: string;
  locations: AutonomousBodyLocation[];
}

const DIR = "autonomous-bodies";

export function getAllAutonomousBodies(): AutonomousBody[] {
  return listYamlFiles(DIR).map((f) => loadYaml<AutonomousBody>(`${DIR}/${f}`));
}

export function getAutonomousBody(slug: string): AutonomousBody | undefined {
  return getAllAutonomousBodies().find((b) => b.slug === slug);
}
