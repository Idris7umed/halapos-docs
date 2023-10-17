const withMarkdoc = require('@markdoc/next.js')

const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true,
  }
}

module.exports = withMarkdoc()(nextConfig)
