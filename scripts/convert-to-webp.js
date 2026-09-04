const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function convertDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await convertDir(fullPath)
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      const origSize = fs.statSync(fullPath).size
      await sharp(fullPath).webp({ quality: 85 }).toFile(webpPath)
      const newSize = fs.statSync(webpPath).size
      const pct = Math.round((1 - newSize / origSize) * 100)
      console.log(`${entry.name.padEnd(30)} ${Math.round(origSize/1024)}KB → ${Math.round(newSize/1024)}KB  -${pct}%`)
    }
  }
}

const dir = path.join(__dirname, '..', 'public', 'pictures')
console.log('Converting PNG → WebP...\n')
convertDir(dir).then(() => console.log('\nDone!'))
