// Build-time route manifest: enumerates every valid route (explicit app pages +
// every content-collection slug) into lib/content/routes.json. Used by
// LinkVersatile to degrade links to non-existent routes into plain text, so the
// site never 404s from an internal link.
//
// Runs automatically before `next build` (see the build script).
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src", "data");
const OUT = path.join(ROOT, "lib", "content", "routes.json");

const read = (f) => {
  try {
    return fs.readFileSync(f, "utf8");
  } catch {
    return "";
  }
};
const walk = (d) => {
  let out = [];
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) out = out.concat(walk(f));
    else out.push(f);
  }
  return out;
};

const routes = new Set();

// explicit App Router routes (skip dynamic [...] segments and route groups)
const APP = path.join(ROOT, "app");
for (const f of walk(APP)) {
  if (path.basename(f) !== "page.tsx") continue;
  const r = f.slice(APP.length).replace(/\/page\.tsx$/, "");
  if (r.includes("[")) continue;
  routes.add(r === "" ? "/" : r);
}

// one-file-per-page collections: top-level `slug:`
const COLLECTIONS = [
  "spacecraft-pages", "launcher-pages", "astrosat-pages",
  "mars-orbiter-mission-pages", "publications-pages", "chairmen",
  "isro-centres", "autonomous-bodies", "spacecraft-types",
  "launchers-showcase", "missions-showcase", "general-posts",
];
for (const c of COLLECTIONS) {
  const d = path.join(DATA, c);
  if (!fs.existsSync(d)) continue;
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith(".yaml")) continue;
    const m = read(path.join(d, f)).match(/^slug:\s*["']?([^"'\n]+)/m);
    if (m) routes.add(m[1].trim());
  }
}

// galleries/image.yaml: an array of galleries, each with an indented `slug:`
for (const m of read(path.join(DATA, "galleries/image.yaml")).matchAll(
  /^\s*slug:\s*["']?([^"'\n]+)/gm,
)) {
  routes.add(m[1].trim());
}

const arr = [...routes].sort();
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(arr));
console.log(`routes manifest: ${arr.length} valid routes -> ${path.relative(ROOT, OUT)}`);
