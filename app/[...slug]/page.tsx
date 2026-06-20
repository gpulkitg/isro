import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSpacecraftPages,
  getSpacecraftPage,
  getMasterItemBySpacecraft,
  getImageGalleriesByTag,
  getVideoGalleriesByTag,
  getUpdatesByTag,
} from "@/lib/content";
import SpacecraftPageView from "@/components/templates/spacecraft-page";

// Only build the slugs we know about; anything else is a 404.
export const dynamicParams = false;

// Catch-all for templated, slug-addressed content. Currently wired to the
// spacecraft-pages collection (vertical slice); the remaining 12 collections
// plug into the same resolver in later phases.
export function generateStaticParams(): { slug: string[] }[] {
  return getAllSpacecraftPages().map((p) => ({
    slug: p.slug.replace(/^\//, "").split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const master = getMasterItemBySpacecraft(path);
  return { title: master?.spacecraftName ?? "ISRO" };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + slug.join("/");

  const page = getSpacecraftPage(path);
  if (!page) notFound();

  return (
    <SpacecraftPageView
      page={page}
      master={getMasterItemBySpacecraft(path)}
      galleriesImage={getImageGalleriesByTag(page.tag)}
      galleriesVideo={getVideoGalleriesByTag(page.tag)}
      updates={getUpdatesByTag(page.tag, 5)}
    />
  );
}
