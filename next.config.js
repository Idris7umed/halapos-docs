const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true,
  },
}

module.exports = withMarkdoc()(nextConfig)
