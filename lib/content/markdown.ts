import { marked } from "marked";

// GitHub-flavored markdown, matching the old gatsby-yaml-full-markdown output
// closely enough that the existing dangerouslySetInnerHTML render sites work.
marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string to an HTML string (synchronous, build-time). */
export function renderMarkdown(src: string): string {
  if (!src) return "";
  return marked.parse(src, { async: false });
}
