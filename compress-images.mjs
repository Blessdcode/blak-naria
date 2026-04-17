/**
 * Image compression script.
 * Run: node compress-images.mjs
 *
 * - Skips images that are already optimized (no re-processing).
 * - Resizes to max 1800px wide, 80% JPEG quality.
 * - Originals stay untouched. Output goes to public/images/optimized/
 *
 * After running, add the new image to placeholder.ts using the path:
 *   /images/optimized/<your-filename>.jpg
 */

import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/images";
const OUTPUT_DIR = "./public/images/optimized";
const MAX_WIDTH = 1800;
const QUALITY = 80;

const SUPPORTED = [".jpg", ".jpeg", ".png", ".webp"];

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter((f) => {
  const ext = extname(f).toLowerCase();
  return SUPPORTED.includes(ext);
});

let skipped = 0;
let compressed = 0;

for (const file of files) {
  const input = join(INPUT_DIR, file);
  const outName = basename(file, extname(file)) + ".jpg";
  const output = join(OUTPUT_DIR, outName);

  // Skip if already optimized
  if (existsSync(output)) {
    skipped++;
    continue;
  }

  try {
    await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(output);

    console.log(`✓ ${file} → optimized/${outName}`);
    compressed++;
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

if (compressed === 0 && skipped > 0) {
  console.log(`All ${skipped} images already optimized. Nothing to do.`);
} else {
  console.log(`\n✓ Compressed: ${compressed}  Skipped (already done): ${skipped}`);
  console.log(`Add new images to placeholder.ts using path: /images/optimized/<filename>.jpg`);
}
