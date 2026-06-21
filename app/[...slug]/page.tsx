import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import MissionPage from "@/components/templates/mission-page";
import AstrosatPageTemplate from "@/components/templates/astrosat-pages";
import MarsOrbiterMissionPages from "@/components/templates/mars-orbiter-mission-pages";
import GeneralPosts from "@/components/templates/general-posts";
import PublicationsPagesTemplate from "@/components/templates/publications-pages";
import ChairmanPage from "@/components/templates/chairmen";
import IsroCentres from "@/components/templates/isro-centres";
import AutonomousBodies from "@/components/templates/autonomous-bodies";
import SpacecraftTypes from "@/components/templates/spacecraft-types";
import LaunchersShowcaseTemplate from "@/components/templates/launchers-showcase";
import MissionsShowcase from "@/components/templates/missions-showcase";
import ImageGalleryTemplate from "@/components/templates/image-gallery";

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

import { getAstrosatPage, getAllAstrosatPages } from "@/lib/content/collections/astrosat-pages";
import { getMarsOrbiterMissionPage, getAllMarsOrbiterMissionPages } from "@/lib/content/collections/mars-orbiter-mission-pages";
import { getGeneralPost, getAllGeneralPosts } from "@/lib/content/collections/general-posts";
import { getPublicationsPage, getAllPublicationsPages } from "@/lib/content/collections/publications-pages";
import { getChairman, getAllChairmen } from "@/lib/content/collections/chairmen";
import { getIsroCentre, getAllIsroCentres } from "@/lib/content/collections/isro-centres";
import { getAutonomousBody, getAllAutonomousBodies } from "@/lib/content/collections/autonomous-bodies";
import { getSpacecraftType, getAllSpacecraftTypes, getMasterListBySpacecraftType } from "@/lib/content/collections/spacecraft-types";
import { getLaunchersShowcase, getAllLaunchersShowcase } from "@/lib/content/collections/launchers-showcase";
import { getMissionsShowcase, getAllMissionsShowcase, getMissionsShowcaseRelated } from "@/lib/content/collections/missions-showcase";
import { getImageGallery, getAllImageGalleries } from "@/lib/content/collections/galleries";

export const dynamicParams = false;

type Resolved = { title: string; element: ReactNode };

// Maps an absolute slug to its content + rendered template. Each templated
// collection is tried in turn; the first match wins.
function resolve(path: string): Resolved | null {
  // ---- spacecraft-pages (master-list backed) ----
  const spacecraft = getSpacecraftPage(path);
  if (spacecraft) {
    const master = getMasterItemBySpacecraft(path);
    const otherLinks: OtherLink[] = [];
    if (master?.launcherLink) otherLinks.push({ link: master.launcherLink, text: master.launcherName });
    if (master?.otherLinks) otherLinks.push(...master.otherLinks);
    return {
      title: master?.spacecraftName ?? "ISRO",
      element: (
        <MissionPage
          heading={master?.spacecraftName}
          launchDate={master?.launchDate}
          sections={spacecraft.sections}
          otherLinks={otherLinks}
          docs={master?.docs}
          galleriesImage={getImageGalleriesByTag(spacecraft.tag)}
          galleriesVideo={getVideoGalleriesByTag(spacecraft.tag)}
          updates={getUpdatesByTag(spacecraft.tag, 5)}
        />
      ),
    };
  }

  // ---- launcher-pages (master-list backed) ----
  const launcher = getLauncherPage(path);
  if (launcher) {
    const master = getMasterItemByLauncher(path);
    const otherLinks: OtherLink[] = [];
    if (master?.spacecraftLink) otherLinks.push({ link: master.spacecraftLink, text: master.spacecraftName });
    if (master?.otherLinks) otherLinks.push(...master.otherLinks);
    return {
      title: master?.launcherName ?? "ISRO",
      element: (
        <MissionPage
          heading={master?.launcherName}
          launchDate={master?.launchDate}
          sections={launcher.sections}
          otherLinks={otherLinks}
          docs={master?.docs}
          galleriesImage={getImageGalleriesByTag(launcher.tag)}
          galleriesVideo={getVideoGalleriesByTag(launcher.tag)}
          updates={getUpdatesByTag(launcher.tag, 5)}
        />
      ),
    };
  }

  // ---- ported collections ----
  { const it = getAstrosatPage(path); if (it) return { title: `${it.cover.title} ${it.title}`, element: <AstrosatPageTemplate page={it} /> }; }
  { const it = getMarsOrbiterMissionPage(path); if (it) return { title: `${it.cover.title} ${it.title}`, element: <MarsOrbiterMissionPages page={it} /> }; }
  { const it = getGeneralPost(path); if (it) return { title: it.title, element: <GeneralPosts post={it} /> }; }
  { const it = getPublicationsPage(path); if (it) return { title: it.title, element: <PublicationsPagesTemplate page={it} /> }; }
  { const it = getChairman(path); if (it) return { title: it.name, element: <ChairmanPage chairman={it} /> }; }
  { const it = getIsroCentre(path); if (it) return { title: it.title, element: <IsroCentres centre={it} /> }; }
  { const it = getAutonomousBody(path); if (it) return { title: it.title, element: <AutonomousBodies body={it} /> }; }
  { const it = getSpacecraftType(path); if (it) return { title: it.title, element: <SpacecraftTypes item={it} missions={getMasterListBySpacecraftType(it.spacecraftType)} allTypes={getAllSpacecraftTypes()} /> }; }
  { const it = getLaunchersShowcase(path); if (it) return { title: it.seo?.title ?? "ISRO Launchers", element: <LaunchersShowcaseTemplate page={it} /> }; }
  { const it = getMissionsShowcase(path); if (it) return { title: it.seo?.title ?? "ISRO", element: <MissionsShowcase page={it} related={getMissionsShowcaseRelated(it.tag)} /> }; }
  { const it = getImageGallery(path); if (it) return { title: it.title, element: <ImageGalleryTemplate gallery={it} /> }; }

  return null;
}

export function generateStaticParams(): { slug: string[] }[] {
  const all = [
    ...getAllSpacecraftPages(),
    ...getAllLauncherPages(),
    ...getAllAstrosatPages(),
    ...getAllMarsOrbiterMissionPages(),
    ...getAllGeneralPosts(),
    ...getAllPublicationsPages(),
    ...getAllChairmen(),
    ...getAllIsroCentres(),
    ...getAllAutonomousBodies(),
    ...getAllSpacecraftTypes(),
    ...getAllLaunchersShowcase(),
    ...getAllMissionsShowcase(),
    ...getAllImageGalleries(),
  ];
  const seen = new Set<string>();
  const params: { slug: string[] }[] = [];
  for (const item of all) {
    const key = item.slug.replace(/^\//, "");
    if (seen.has(key)) continue;
    seen.add(key);
    params.push({ slug: key.split("/") });
  }
  return params;
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
  return resolved.element;
}
