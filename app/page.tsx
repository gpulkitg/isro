import type { Metadata } from "next";
import { loadYaml } from "@/lib/content/yaml";
import HomeClient, { type HomeData } from "./home-client";

// home.yaml is a 1-element array; the page content lives at index [0].
type HomeYaml = (HomeData & { seo: { title: string } })[];

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const home = loadYaml<HomeYaml>("home.yaml")[0];

  return <HomeClient home={home} />;
}
