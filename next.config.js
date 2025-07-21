const withMarkdoc = require('@markdoc/next.js')

const prod = process.env.NODE_ENV === 'production'
const githubPages = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  ...(githubPages && {
    assetPrefix: '/halapos-docs',
    basePath: '/halapos-docs',
  }),
}

module.exports = withMarkdoc()(nextConfig)
