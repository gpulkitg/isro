import MediaImage from "@/components/media-image";
import { loadYaml } from "@/lib/content/yaml";
import ContactForm, { type Department } from "./contact-client";

export const metadata = { title: "Contact" };

// Cover image lived under src/images in Gatsby (relativePath "common/isro_hq1.jpeg").
const COVER = "../../images/common/isro_hq1.jpeg";

export default function ContactPage() {
  // Gatsby's allContactYaml query sorted by title; replicate with .sort.
  const departments = loadYaml<Department[]>("contact.yaml")
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="cover-img-wrapper w-100 position-relative">
        <MediaImage
          src={COVER}
          alt="Get in touch"
          className="w-100 h-100 animate-appear-fast"
          style={{ opacity: 0.7, width: "100%", height: "auto", objectFit: "cover" }}
          sizes="100vw"
          priority
        />
        <h1
          className="text-center display-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Get in touch
        </h1>
      </div>

      <br />

      <ContactForm departments={departments} />
    </>
  );
}
