/**
 * Image compression script.
 * Run: node compress-images.mjs
 * Requires: npm install sharp  (run once before using this script)
 *
 * Resizes all images in public/images to max 1800px wide and compresses to ~80% quality.
 * Originals are left untouched — output goes to public/images/optimized/
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

console.log(`Found ${files.length} images to compress...\n`);

for (const file of files) {
  const input = join(INPUT_DIR, file);
  // Output as .jpg regardless of original extension
  const outName = basename(file, extname(file)) + ".jpg";
  const output = join(OUTPUT_DIR, outName);

  try {
    await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(output);

    console.log(`✓ ${file} → optimized/${outName}`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log("\nDone! Update your image paths to /images/optimized/<filename>.jpg");
