const withMarkdoc = require('@markdoc/next.js');

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/halapos-docs' : '',
  assetPrefix: isGithubPages ? '/halapos-docs/' : '',
};

module.exports = withMarkdoc()(nextConfig);
