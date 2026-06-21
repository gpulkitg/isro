# ISRO (unofficial)

A content-driven site for the Indian Space Research Organisation, built with Next.js.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Bootstrap 5** dark theme via **Dart Sass**
- **Content**: YAML in `src/data/` (markdown-in-YAML through a custom `!markdown` tag), loaded by `lib/content/`
- **Media**: images/videos/PDFs served from **Cloudflare R2** (CDN), referenced via `NEXT_PUBLIC_ASSET_BASE_URL`
- Hosted on **Vercel**

## Develop

Requires Node ≥ 20.9 (`.nvmrc` → 24).

```bash
nvm use
npm install
echo 'NEXT_PUBLIC_ASSET_BASE_URL=https://<your-bucket>.r2.dev' > .env.local
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Content & routing

- **Static / landing pages** are explicit routes under `app/` (e.g. `app/about/page.tsx`).
- **Templated content** (spacecraft, launchers, missions, chairmen, ISRO centres, autonomous bodies, AstroSat/MOM pages, publications, general posts, showcases, image galleries) is served by a single catch-all `app/[...slug]/page.tsx`. Its `resolve()` maps each absolute slug to the right collection + template; all pages are statically generated via `generateStaticParams`.
- Add or edit content by editing the YAML in `src/data/` — no code changes needed for new entries.

## Media

All media lives in Cloudflare R2 (not committed to the repo). `lib/content/image-manifest.json` holds intrinsic image dimensions for `next/image`. To regenerate after adding images locally:

```bash
node scripts/generate-image-manifest.mjs   # needs src/images/ present locally
# then upload new files to R2, e.g.:
rclone copy ./src/images r2:isro-media/images --checksum --s3-no-check-bucket
```
