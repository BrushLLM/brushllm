/**
 * Regenerates binary brand assets from text sources, so the repo stays
 * mostly text (the GitHub MCP can only push text files; Cloudflare runs this
 * via the prebuild hook before `astro build`).
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// raster favicons from the official site icon (1024x1024 PNG)
await sharp(join(root, 'src/assets/site-icon.png')).resize(32, 32).png().toFile(join(root, 'public/favicon-32.png'));
await sharp(join(root, 'src/assets/site-icon.png')).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));
console.log('gen-brand-assets: wrote public/favicon-32.png + public/apple-touch-icon.png from site-icon.png');
