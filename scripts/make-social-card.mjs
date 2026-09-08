/**
 * Build a 1200×630 social-preview card from an edition cover without cropping it.
 *
 * Open Graph / LinkedIn / X previews are a fixed 1.91:1 frame; the editorial covers
 * are ~16:9. Cropping a cover to that frame would cut into its headline or date, so
 * this script *contains* the whole cover inside the frame on a padded background
 * instead. The source PNG is left untouched at its native resolution.
 *
 *   node scripts/make-social-card.mjs <cover.png> <out.png> [background=#ffffff]
 */
import sharp from "sharp";

const [, , input, output, background = "#ffffff"] = process.argv;
if (!input || !output) {
  console.error("usage: node scripts/make-social-card.mjs <cover.png> <out.png> [background]");
  process.exit(1);
}

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 22;

const cover = await sharp(input)
  .resize({ width: WIDTH - PADDING * 2, height: HEIGHT - PADDING * 2, fit: "inside", withoutEnlargement: true })
  .png()
  .toBuffer();
const { width, height } = await sharp(cover).metadata();

await sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background } })
  .composite([{ input: cover, left: Math.round((WIDTH - width) / 2), top: Math.round((HEIGHT - height) / 2) }])
  .png({ compressionLevel: 9, palette: false })
  .toFile(output);

console.log(`${output}: ${WIDTH}×${HEIGHT}, cover contained at ${width}×${height}`);
