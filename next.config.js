/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/SRinfra' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SRinfra/' : '',
}

module.exports = nextConfig
