const fs = require('node:fs');
const sharp = require('sharp');
const manifest = require('../public/images/theme-generation.json');
async function main() {
  fs.mkdirSync('tmp', { recursive: true });
  const tiles = await Promise.all(manifest.assets.map(async (asset, i) => ({
    input: await sharp('public' + asset.output).resize(384, 256, { fit: 'cover' }).toBuffer(),
    left: (i % 4) * 384,
    top: Math.floor(i / 4) * 256,
  })));
  await sharp({ create: { width: 1536, height: 1024, channels: 3, background: '#0a2342' } }).composite(tiles).jpeg({ quality: 85 }).toFile('tmp/theme-contact-sheet.jpg');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
