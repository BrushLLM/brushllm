/**
 * Regenerates binary brand assets from text sources, so the repo stays
 * 100% text (the GitHub MCP can only push text files; Cloudflare runs this via
 * the prebuild hook before `astro build`).
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// raster favicon fallbacks (Safari does not render SVG favicons)
await sharp(join(root, 'src/assets/brush-mark.svg')).resize(32, 32).png().toFile(join(root, 'public/favicon-32.png'));
await sharp(join(root, 'src/assets/brush-mark.svg')).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));
console.log('gen-brand-assets: wrote public/favicon-32.png + public/apple-touch-icon.png');
