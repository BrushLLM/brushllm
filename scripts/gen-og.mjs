// Renders public/og.png (1200x630) from og-source.svg using sharp.
// Runs automatically before every build (see "prebuild" in package.json),
// so the binary PNG stays out of version control.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

try {
  await sharp(join(root, 'og-source.svg'), { density: 72 })
    .resize(1200, 630)
    .png()
    .toFile(join(root, 'public', 'og.png'));
  console.log('og.png generated (1200x630)');
} catch (err) {
  // sharp is a devDependency used at build time; failure here should stop the build
  console.error('Failed to generate og.png:', err.message);
  process.exit(1);
}
