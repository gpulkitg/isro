import { marked } from "marked";
import { isValidRoute } from "./routes";

// GitHub-flavored markdown, matching the old gatsby-yaml-full-markdown output
// closely enough that the existing dangerouslySetInnerHTML render sites work.
marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string to an HTML string (synchronous, build-time). */
export function renderMarkdown(src: string): string {
  if (!src) return "";
  const html = marked.parse(src, { async: false });
  // Neutralize internal links that point to non-existent routes so markdown
  // content never produces a 404 (external http(s) and in-page #anchors kept).
  return html.replace(
    /<a\s+href="(\/[^"#][^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi,
    (whole, href: string, _attrs: string, text: string) =>
      isValidRoute(href) ? whole : `<span class="text-muted">${text}</span>`,
  );
}
