/**
 * Regenerates binary brand assets from text sources, so the repo stays
 * mostly text (the GitHub MCP can only push text files; Cloudflare runs this
 * via the prebuild hook before `astro build`).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// favicon.svg: the site icon wrapped in a rounded-corner clip, matching the
// rounded-xl treatment of the in-page logo (12px on a 36px icon = 340/1024)
const icon = readFileSync(join(root, 'src/assets/site-icon.svg'), 'utf8');
const inner = icon
  .replace(/<\?xml[^>]*\?>\s*/g, '')
  .replace(/<!--[\s\S]*?-->\s*/g, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .trim();
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
<defs><clipPath id="rr"><rect width="1024" height="1024" rx="340" ry="340"/></clipPath></defs>
<g clip-path="url(#rr)">${inner}</g>
</svg>
`;
writeFileSync(join(root, 'public/favicon.svg'), faviconSvg);

// favicon-32.png: rasterized with the same rounded mask (browsers show it
// square otherwise); apple-touch-icon stays square — iOS rounds it itself
const roundedMask = (size) =>
  Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${Math.round((size * 12) / 36)}" ry="${Math.round((size * 12) / 36)}" fill="#fff"/></svg>`);
await sharp(join(root, 'src/assets/site-icon.svg'), { density: 96 }).resize(32, 32).png()
  .composite([{ input: roundedMask(32), blend: 'dest-in' }])
  .png().toFile(join(root, 'public/favicon-32.png'));
await sharp(join(root, 'src/assets/site-icon.svg'), { density: 96 }).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));

console.log('gen-brand-assets: wrote rounded favicon.svg + favicon-32.png, square apple-touch-icon');
