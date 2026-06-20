// Build-time image manifest: walks src/images and records intrinsic
// width/height for each raster image, keyed by its R2 object key
// ("images/<relative-path>"). next/image needs dimensions for remote images.
//
// Run after uploading/altering images:  node scripts/generate-image-manifest.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "src", "images");
const OUT = path.join(process.cwd(), "lib", "content", "image-manifest.json");
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const manifest = {};
let ok = 0;
let skipped = 0;

for (const file of walk(IMAGES_DIR)) {
  if (!EXTS.has(path.extname(file).toLowerCase())) {
    skipped++;
    continue;
  }
  const key = "images/" + path.relative(IMAGES_DIR, file).split(path.sep).join("/");
  try {
    const meta = await sharp(file).metadata();
    if (meta.width && meta.height) {
      manifest[key] = { width: meta.width, height: meta.height };
      ok++;
    } else {
      skipped++;
    }
  } catch {
    skipped++;
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(manifest));
console.log(`image-manifest: ${ok} images, ${skipped} skipped -> ${path.relative(process.cwd(), OUT)}`);
