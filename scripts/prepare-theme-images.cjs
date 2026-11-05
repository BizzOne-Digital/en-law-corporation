const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/images/theme-generation.json'), 'utf8'));
async function main() {
  for (const asset of manifest.assets) {
    const output = path.join(root, 'public', asset.output);
    await sharp(asset.source).resize(asset.name === 'og-image' ? { width: 1200, height: 630, fit: 'cover' } : { width: 1536, withoutEnlargement: true }).jpeg({ quality: 90, mozjpeg: true }).toFile(output);
    const meta = await sharp(output).metadata();
    console.log(`${asset.name}: ${meta.width}x${meta.height}, ${fs.statSync(output).size} bytes`);
  }
  for (const dir of ['app', 'components', 'data', 'lib']) {
    for (const entry of fs.readdirSync(path.join(root, dir), { recursive: true, withFileTypes: true })) {
      if (!entry.isFile() || !/\.(ts|tsx)$/.test(entry.name)) continue;
      const file = path.join(entry.parentPath || entry.path, entry.name);
      const before = fs.readFileSync(file, 'utf8');
      let after = before;
      for (const asset of manifest.assets) after = after.replaceAll(`/images/${asset.name}.jpg`, asset.output);
      if (after !== before) fs.writeFileSync(file, after);
    }
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
