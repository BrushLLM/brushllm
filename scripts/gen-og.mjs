// Renders public/og.png (1200x630) from og-source.svg using sharp, then
// composites the brand logo (rounded) where the old brush mark used to sit.
// Runs automatically before every build (see "prebuild" in package.json).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const LOGO = 110;
const roundedMask = Buffer.from(`<svg width="${LOGO}" height="${LOGO}"><rect width="${LOGO}" height="${LOGO}" rx="36" ry="36" fill="#fff"/></svg>`);
const logo = await sharp(join(root, 'src/assets/logo.png')).resize(LOGO, LOGO).png()
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png().toBuffer();

try {
  await sharp(join(root, 'og-source.svg'), { density: 72 })
    .resize(1200, 630)
    .composite([{ input: logo, left: 92, top: 196 }])
    .png()
    .toFile(join(root, 'public', 'og.png'));
  console.log('og.png generated (1200x630, logo composited)');
} catch (err) {
  console.error('Failed to generate og.png:', err.message);
  process.exit(1);
}
