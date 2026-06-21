import { loadYaml, listYamlFiles } from "@/lib/content/yaml";
import { getMasterList } from "@/lib/content";
import type { MasterListItem } from "@/lib/content/types";

// ---- spacecraft-types/*.yaml ----
// A "type" page (e.g. Communication Satellites) with descriptive sections and a
// table listing every master-list item whose spacecraftType matches this type.
export interface SpacecraftTypeImage {
  image: string;
  caption?: string;
}
export interface SpacecraftTypeSection {
  title?: string;
  /** HTML when the source field used the `!markdown` tag, else a plain string. */
  text?: string;
  images?: SpacecraftTypeImage[];
}
export interface SpacecraftType {
  slug: string;
  /** The category value matched (as a regex/substring) against master-list. */
  spacecraftType: string;
  title: string;
  sections: SpacecraftTypeSection[];
}

export function getAllSpacecraftTypes(): SpacecraftType[] {
  return listYamlFiles("spacecraft-types").map((f) =>
    loadYaml<SpacecraftType>(`spacecraft-types/${f}`),
  );
}

export function getSpacecraftType(slug: string): SpacecraftType | undefined {
  return getAllSpacecraftTypes().find((p) => p.slug === slug);
}

// Replicates the Gatsby query:
//   allMasterListYaml(filter: {spacecraftType: {regex: "/<type>/"}},
//                     sort: {order: DESC, fields: launchDate})
// i.e. master-list items whose spacecraftType contains `spacecraftType`,
// newest launch date first.
export function getMasterListBySpacecraftType(
  spacecraftType: string,
): MasterListItem[] {
  const re = new RegExp(spacecraftType);
  return getMasterList()
    .filter((m) => m.spacecraftType && re.test(m.spacecraftType))
    .sort((a, b) => (a.launchDate < b.launchDate ? 1 : a.launchDate > b.launchDate ? -1 : 0));
}
