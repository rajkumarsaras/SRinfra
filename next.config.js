/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/SRinfra' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SRinfra/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
