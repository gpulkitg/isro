// One-off icon generator. Rasterizes public/isro_logo.svg (the brand logo,
// designed for a dark background) centered on the #000000 brand color and
// writes the PWA + favicon + apple-touch icons. Re-run only if the logo
// changes:  node scripts/generate-icons.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = process.cwd();
const SVG = path.join(ROOT, "public", "isro_logo.svg");
const ICONS_DIR = path.join(ROOT, "public", "icons");
const APP_DIR = path.join(ROOT, "app");
fs.mkdirSync(ICONS_DIR, { recursive: true });

const BG = { r: 0, g: 0, b: 0, alpha: 1 }; // #000000, opaque

// Rasterize the SVG (high density for crispness) into a transparent inner×inner box.
function logoBuffer(inner) {
  return sharp(SVG, { density: 1024 })
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

// Square icon: logo centered on the brand background. `fraction` leaves padding
// (maskable icons need a smaller logo to survive the platform mask).
async function icon(size, fraction, outPath) {
  const logo = await logoBuffer(Math.round(size * fraction));
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(outPath);
}

await icon(192, 0.8, path.join(ICONS_DIR, "icon-192.png"));
await icon(512, 0.8, path.join(ICONS_DIR, "icon-512.png"));
await icon(512, 0.62, path.join(ICONS_DIR, "maskable-512.png")); // 80% safe zone
await icon(180, 0.82, path.join(APP_DIR, "apple-icon.png"));

// favicon.ico bundling 16/32/48 for crisp rendering at small sizes.
const faviconPngs = await Promise.all(
  [16, 32, 48].map(async (s) => {
    const logo = await logoBuffer(Math.round(s * 0.88));
    return sharp({ create: { width: s, height: s, channels: 4, background: BG } })
      .composite([{ input: logo, gravity: "center" }])
      .png()
      .toBuffer();
  }),
);
fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), await pngToIco(faviconPngs));

console.log("icons: icon-192/512, maskable-512, apple-icon (180), favicon.ico");
