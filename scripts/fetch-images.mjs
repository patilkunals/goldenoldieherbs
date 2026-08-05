import fsp from 'fs/promises'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import https from 'https'
import http from 'http'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function download(url, dest, maxRedirects = 5, maxRetries = 5) {
  let attempt = 0
  const sleep = (ms) => new Promise(r => setTimeout(r, ms))

  while (attempt < maxRetries) {
    try {
      await doDownload(url, dest, maxRedirects)
      return
    } catch (err) {
      attempt += 1
      const retryable = /status 503|ECONNRESET|ENOTFOUND|ETIMEDOUT/.test(err.message)
      if (!retryable || attempt >= maxRetries) throw err
      const wait = Math.min(1000 * 2 ** attempt, 10000)
      console.warn(`Download failed (attempt ${attempt}) for ${url}: ${err.message}. Retrying in ${wait}ms`)
      await sleep(wait)
    }
  }
}

function doDownload(url, dest, redirectsLeft) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { headers: { 'User-Agent': 'node-fetch-images/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        if (redirectsLeft <= 0) return reject(new Error('Too many redirects'))
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).toString()
        return resolve(doDownload(next, dest, redirectsLeft - 1))
      }
      if (res.statusCode && res.statusCode >= 400) {
        return reject(new Error(`Failed to download ${url} (status ${res.statusCode})`))
      }
      const stream = fs.createWriteStream(dest)
      res.pipe(stream)
      stream.on('finish', () => stream.close(resolve))
      stream.on('error', reject)
    })
    req.on('error', reject)
  })
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true })
}

const tasks = [
  { file: 'src/data/doctors.ts', outFolder: 'doctors' },
  { file: 'src/data/panchkarma.ts', outFolder: 'panchkarma' },
  { file: 'src/data/products.ts', outFolder: 'products' },
]

const fallbackSpecs = {
  doctors: { size: '400x400', query: 'doctor,ayurveda' },
  panchkarma: { size: '800x600', query: 'ayurveda,therapy' },
  products: { size: '600x400', query: 'herbal,product' },
}

async function processFile(task) {
  const filePath = path.join(process.cwd(), task.file)
  let text = await fsp.readFile(filePath, 'utf8')

  const re = /image:\s*['"]([^'"]+)['"]/g
  let m
  let i = 0
  const downloads = []
  while ((m = re.exec(text)) !== null) {
    const url = m[1]
    if (!url.startsWith('http')) continue
    i += 1
    const extMatch = path.extname(new URL(url).pathname) || '.jpg'
    const filename = `${task.outFolder}-${i}${extMatch}`
    const outDir = path.join(process.cwd(), 'public', 'images', task.outFolder)
    await ensureDir(outDir)
    const dest = path.join(outDir, filename)
    console.log(`Downloading ${url} → ${path.relative(process.cwd(), dest)}`)
    downloads.push(download(url, dest).catch(err => { console.warn('Download failed:', url, err.message); return null }))

    // Replace URL in text with local path
    const localPath = `/images/${task.outFolder}/${filename}`
    text = text.slice(0, m.index) + `image: '${localPath}'` + text.slice(m.index + m[0].length)
    // reset regex lastIndex because we modified text
    re.lastIndex = m.index + localPath.length + 9
  }

  await Promise.all(downloads)
  await fsp.writeFile(filePath, text, 'utf8')
  console.log(`Updated ${task.file}`)
}

async function fillMissingLocalImages() {
  for (const t of tasks) {
    const filePath = path.join(process.cwd(), t.file)
    let text = await fsp.readFile(filePath, 'utf8')
    const re = /image:\s*['"]([^'"]+)['"]/g
    let m
    while ((m = re.exec(text)) !== null) {
      const imgPath = m[1]
      if (!imgPath.startsWith('/images/')) continue
      const abs = path.join(process.cwd(), 'public', imgPath.replace(/^\/|^\//, ''))
      try {
        await fsp.access(abs)
        continue
      } catch (_) {
        // missing — download fallback
        const parts = imgPath.split('/')
        const folder = parts[2] || t.outFolder
        const filename = parts[3] || `fallback-${Date.now()}.jpg`
        const spec = fallbackSpecs[folder] || { size: '600x400', query: 'nature' }
        const fallbackUrl = `https://source.unsplash.com/${spec.size}/?${spec.query}&sig=${Math.floor(Math.random()*10000)}`
        const outDir = path.dirname(abs)
        await fsp.mkdir(outDir, { recursive: true })
        console.log(`Filling missing ${imgPath} from ${fallbackUrl}`)
        try {
          await download(fallbackUrl, abs)
        } catch (e) {
          console.warn('Fallback download failed for', imgPath, e.message)
          // as a last resort, copy the repo placeholder so the UI has a file to load
          const placeholder = path.join(process.cwd(), 'public', 'images', 'placeholder.svg')
          try {
            await fsp.copyFile(placeholder, abs)
            console.log(`Copied placeholder to ${imgPath}`)
          } catch (copyErr) {
            console.warn('Failed to copy placeholder for', imgPath, copyErr.message)
          }
        }
      }
    }
  }
}

async function main() {
  for (const t of tasks) {
    try {
      await processFile(t)
    } catch (e) {
      console.error('Error processing', t.file, e.message)
    }
  }
  // Ensure any local paths referenced actually have image files; if missing, fetch fallbacks
  await fillMissingLocalImages()
  console.log('Done. Please restart dev server to pick up changes.')
}

main().catch(err => { console.error(err); process.exit(1) })
