import MediaImage from "@/components/media-image";
import Separator from "@/components/separator";
import { loadYaml } from "@/lib/content/yaml";
import CareersClient, { type CareerOpening } from "./careers-client";

export const metadata = { title: "Careers" };

// Raw YAML-style references so assetUrl/MediaImage map them to the R2 CDN.
const COVER_IMAGE = "../images/common/career-2.jpg";
const ATTENTION_PDF =
  "../docs/general/caution_regarding_fake_offers_of_appointment_.pdf";

export default function CareersPage() {
  // careers.yaml is a flat list of openings; load it server-side and pass
  // plain serializable rows to the client child that owns the filters.
  const openings = loadYaml<CareerOpening[]>("careers.yaml") ?? [];

  return (
    <>
      <div className="w-100">
        <MediaImage
          src={COVER_IMAGE}
          alt="career-2"
          className="w-100 h-100"
          sizes="100vw"
          priority
        />
      </div>

      <Separator title="Start your journey" />

      <CareersClient openings={openings} attentionPdf={ATTENTION_PDF} />
    </>
  );
}
