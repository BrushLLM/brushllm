/**
 * Regenerates binary brand assets (the GitHub MCP can only push text files;
 * Cloudflare runs this via the prebuild hook before `astro build`).
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// favicon-32: rasterized with a rounded mask matching the in-page logo
// (12px on a 36px icon); apple-touch-icon stays square — iOS rounds it itself
const roundedMask = (size) =>
  Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${Math.round((size * 12) / 36)}" ry="${Math.round((size * 12) / 36)}" fill="#fff"/></svg>`);
await sharp(join(root, 'src/assets/logo.png')).resize(32, 32).png()
  .composite([{ input: roundedMask(32), blend: 'dest-in' }])
  .png().toFile(join(root, 'public/favicon-32.png'));
await sharp(join(root, 'src/assets/logo.png')).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));

// 72px nav/footer logo (Retina 2x for the 36px display) — the 1024px source
// stays untouched for favicon/og generation
await sharp(join(root, 'src/assets/logo.png')).resize(72, 72).png({ palette: true, compressionLevel: 9 }).toFile(join(root, 'src/assets/logo-nav.png'));

console.log('gen-brand-assets: wrote favicon-32.png + apple-touch-icon.png + logo-nav.png from logo.png');
