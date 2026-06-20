import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { renderMarkdown } from "./markdown";

// Replicate gatsby-yaml-full-markdown: a custom `!markdown` YAML tag whose
// scalar body is converted to an HTML string at load time. Render sites keep
// using dangerouslySetInnerHTML, exactly as the Gatsby templates did.
const MarkdownType = new yaml.Type("!markdown", {
  kind: "scalar",
  resolve: (data) => typeof data === "string" || data === null,
  construct: (data) => renderMarkdown(data ?? ""),
});

const SCHEMA = yaml.DEFAULT_SCHEMA.extend([MarkdownType]);

const DATA_DIR = path.join(process.cwd(), "src", "data");

/** Load and parse a YAML file under src/data, resolving the `!markdown` tag. */
export function loadYaml<T>(relativePath: string): T {
  const raw = fs.readFileSync(path.join(DATA_DIR, relativePath), "utf8");
  return yaml.load(raw, { schema: SCHEMA }) as T;
}

/** List the `.yaml` files inside a directory under src/data. */
export function listYamlFiles(relativeDir: string): string[] {
  return fs
    .readdirSync(path.join(DATA_DIR, relativeDir))
    .filter((f) => f.endsWith(".yaml"));
}
