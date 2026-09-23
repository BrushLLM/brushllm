/**
 * Regenerates binary brand assets from text sources, so the repo stays
 * mostly text (the GitHub MCP can only push text files; Cloudflare runs this
 * via the prebuild hook before `astro build`).
 */
import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// raster favicon fallbacks from the official site icon (1024x1024 SVG);
// public/favicon.svg is committed as-is for browsers that support SVG icons
await sharp(join(root, 'src/assets/site-icon.svg'), { density: 96 }).resize(32, 32).png().toFile(join(root, 'public/favicon-32.png'));
await sharp(join(root, 'src/assets/site-icon.svg'), { density: 96 }).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));
// modern browsers get the SVG favicon straight from the source file
copyFileSync(join(root, 'src/assets/site-icon.svg'), join(root, 'public/favicon.svg'));

console.log('gen-brand-assets: wrote favicon-32.png + apple-touch-icon.png from site-icon.svg');
