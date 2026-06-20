import Separator from "./separator";
import LinkVersatile from "./link-versatile";
import { loadYaml } from "@/lib/content/yaml";

type FooterData = {
  navbarLinks: { text: string; link: string }[];
  copyright: string;
};

export default function Footer() {
  const footer = loadYaml<FooterData[]>("footer.yaml")[0];

  return (
    <div className="container">
      <Separator />
      <nav className="navbar navbar-dark">
        <div className="d-flex justify-content-center align-items-center flex-wrap w-100">
          {footer.navbarLinks.map((item, i) => (
            <span className="footer-item navbar-text" key={i}>
              <LinkVersatile url={item.link} className="no-underline">
                {item.text}
              </LinkVersatile>
            </span>
          ))}
        </div>
      </nav>
      <div className="text-center text-muted mb-2">{footer.copyright}</div>
    </div>
  );
}
