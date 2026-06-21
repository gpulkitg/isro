import Separator from "@/components/separator";
import { loadYaml } from "@/lib/content/yaml";
import { assetUrl } from "@/lib/content/assets";
import TendersClient, { type TenderRow } from "./tenders-client";

export const metadata = { title: "Tenders" };

type Tender = {
  advertiser: string;
  advertisementNo: string;
  startDate: string;
  endDate: string;
  doc: string;
};

export default function TendersPage() {
  const tenders = loadYaml<Tender[]>("tenders.yaml");

  // Resolve doc URLs and derive display name + extension on the server so the
  // client child receives plain serializable data only.
  const rows: TenderRow[] = tenders.map((t) => {
    const base = t.doc.split("/").pop() ?? t.doc;
    const dot = base.lastIndexOf(".");
    const docName = dot > 0 ? base.slice(0, dot) : base;
    const docExt = dot > 0 ? base.slice(dot) : "";
    return {
      advertiser: t.advertiser,
      advertisementNo: t.advertisementNo,
      startDate: t.startDate,
      endDate: t.endDate,
      docUrl: assetUrl(t.doc),
      docName,
      docExt,
    };
  });

  return (
    <>
      <Separator />
      <h1 className="text-center mb-2">Tenders</h1>
      <TendersClient tenders={rows} />
    </>
  );
}
