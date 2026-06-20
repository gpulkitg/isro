import { loadYaml, listYamlFiles } from "./yaml";
import type {
  Home,
  SpacecraftPage,
  MasterListItem,
  Update,
  ImageGallery,
  VideoGallery,
} from "./types";

export * from "./types";
export { assetUrl, assetKey, imageMeta } from "./assets";

// ---- single-object / singleton collections ----
export function getHome(): Home {
  return loadYaml<Home[]>("home.yaml")[0];
}

export function getMasterList(): MasterListItem[] {
  return loadYaml<MasterListItem[]>("master-list.yaml");
}

export function getMasterItemBySpacecraft(
  spacecraftLink: string,
): MasterListItem | undefined {
  return getMasterList().find((m) => m.spacecraftLink === spacecraftLink);
}

// ---- spacecraft-pages ----
export function getAllSpacecraftPages(): SpacecraftPage[] {
  return listYamlFiles("spacecraft-pages").map((f) =>
    loadYaml<SpacecraftPage>(`spacecraft-pages/${f}`),
  );
}

export function getSpacecraftPage(slug: string): SpacecraftPage | undefined {
  return getAllSpacecraftPages().find((p) => p.slug === slug);
}

// ---- related data, filtered by tag (matches the Gatsby template queries) ----
export function getUpdatesByTag(tag: string | undefined, limit?: number): Update[] {
  if (!tag) return [];
  const matches = loadYaml<Update[]>("updates.yaml").filter((u) => u.tag === tag);
  return typeof limit === "number" ? matches.slice(0, limit) : matches;
}

export function getImageGalleriesByTag(tag: string | undefined): ImageGallery[] {
  if (!tag) return [];
  return loadYaml<ImageGallery[]>("galleries/image.yaml").filter(
    (g) => g.tag === tag,
  );
}

export function getVideoGalleriesByTag(tag: string | undefined): VideoGallery[] {
  if (!tag) return [];
  return loadYaml<VideoGallery[]>("galleries/video.yaml").filter(
    (g) => g.tag === tag,
  );
}
