import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPattern = "public/temp/*.jpg";
const outputDir = "public/temp-2";

// Buat folder output
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Proses semua gambar
const files = await glob(inputPattern);

console.log(`Found ${files.length} images`);

for (const file of files) {
  const filename = path.basename(file, ".JPG");
  const outputPath = path.join(outputDir, `${filename}.webp`);

  await sharp(file)
    .resize(1200, 1200, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`✓ ${filename}.webp`);
}

console.log("🎉 Done!");
