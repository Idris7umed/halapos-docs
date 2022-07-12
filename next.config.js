const withMarkdoc = require('@markdoc/next.js')

const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: prod ? '/docs' : '',
  assetPrefix: prod ? '/docs/' : '',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    loader: 'custom',
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = withMarkdoc()(nextConfig)
