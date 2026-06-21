import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MissionPage, { type MissionPageProps } from "@/components/templates/mission-page";
import {
  getAllSpacecraftPages,
  getSpacecraftPage,
  getMasterItemBySpacecraft,
  getAllLauncherPages,
  getLauncherPage,
  getMasterItemByLauncher,
  getImageGalleriesByTag,
  getVideoGalleriesByTag,
  getUpdatesByTag,
} from "@/lib/content";
import type { OtherLink } from "@/lib/content/types";

// Only build known slugs; anything else 404s.
export const dynamicParams = false;

type Resolved = { title: string; props: MissionPageProps };

// Maps an absolute slug to its content + template props. Each templated
// collection is tried in turn; the first match wins. New collections plug in
// here as additional branches.
function resolve(path: string): Resolved | null {
  const spacecraft = getSpacecraftPage(path);
  if (spacecraft) {
    const master = getMasterItemBySpacecraft(path);
    const otherLinks: OtherLink[] = [];
    if (master?.launcherLink) {
      otherLinks.push({ link: master.launcherLink, text: master.launcherName });
    }
    if (master?.otherLinks) otherLinks.push(...master.otherLinks);
    return {
      title: master?.spacecraftName ?? "ISRO",
      props: {
        heading: master?.spacecraftName,
        launchDate: master?.launchDate,
        sections: spacecraft.sections,
        otherLinks,
        docs: master?.docs,
        galleriesImage: getImageGalleriesByTag(spacecraft.tag),
        galleriesVideo: getVideoGalleriesByTag(spacecraft.tag),
        updates: getUpdatesByTag(spacecraft.tag, 5),
      },
    };
  }

  const launcher = getLauncherPage(path);
  if (launcher) {
    const master = getMasterItemByLauncher(path);
    const otherLinks: OtherLink[] = [];
    if (master?.spacecraftLink) {
      otherLinks.push({ link: master.spacecraftLink, text: master.spacecraftName });
    }
    if (master?.otherLinks) otherLinks.push(...master.otherLinks);
    return {
      title: master?.launcherName ?? "ISRO",
      props: {
        heading: master?.launcherName,
        launchDate: master?.launchDate,
        sections: launcher.sections,
        otherLinks,
        docs: master?.docs,
        galleriesImage: getImageGalleriesByTag(launcher.tag),
        galleriesVideo: getVideoGalleriesByTag(launcher.tag),
        updates: getUpdatesByTag(launcher.tag, 5),
      },
    };
  }

  return null;
}

export function generateStaticParams(): { slug: string[] }[] {
  const slugs = [
    ...getAllSpacecraftPages().map((p) => p.slug),
    ...getAllLauncherPages().map((p) => p.slug),
  ];
  return slugs.map((s) => ({ slug: s.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve("/" + slug.join("/"));
  return { title: resolved?.title ?? "ISRO" };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const resolved = resolve("/" + slug.join("/"));
  if (!resolved) notFound();
  return <MissionPage {...resolved.props} />;
}
