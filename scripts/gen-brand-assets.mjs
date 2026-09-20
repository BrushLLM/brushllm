/**
 * Regenerates binary brand assets from base64 text sources, so the repo stays
 * 100% text (the GitHub MCP can only push text files; Cloudflare runs this via
 * the prebuild hook before `astro build`).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const glmB64 = readFileSync(join(root, 'scripts/assets/glm-logo.b64'), 'utf8').trim();
const glmPng = Buffer.from(glmB64, 'base64');
writeFileSync(join(root, 'src/assets/brands/glm.png'), glmPng);
console.log(`gen-brand-assets: wrote src/assets/brands/glm.png (${glmPng.length} bytes)`);
