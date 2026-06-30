// Post-build step for the static export:
//  1. Move the Next.js export from `out/` to `docs/` (GitHub Pages serves /docs).
//  2. Add `.nojekyll` so Pages serves the `_next/` directory.
//  3. Generate `sitemap.xml` and `robots.txt` from the exported pages.
import { rm, rename, writeFile, readdir } from 'node:fs/promises'

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.halapos.com'
).replace(/\/+$/, '')

await rm('docs', { recursive: true, force: true })
await rename('out', 'docs')
await writeFile('docs/.nojekyll', '')

// Derive sitemap URLs from the exported HTML files.
const entries = await readdir('docs', { recursive: true })
const paths = entries
  .filter((f) => f.endsWith('.html') && !f.endsWith('404.html'))
  .map(
    (f) =>
      '/' +
      f
        .replace(/\\/g, '/')
        .replace(/index\.html$/, '')
        .replace(/\.html$/, '')
  )
  .map((p) => (p === '/' ? '/' : p.replace(/\/$/, '')))
  .sort()

const urlset = paths
  .map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '' : p}</loc></url>`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`
await writeFile('docs/sitemap.xml', sitemap)

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
await writeFile('docs/robots.txt', robots)

console.log(
  `Exported static site to docs/ (sitemap: ${paths.length} URLs, base ${SITE_URL})`
)
