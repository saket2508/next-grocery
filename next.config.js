/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.grofers.com', 'webcdn.grofers.com', 'm.media-amazon.com'],
  },
}

module.exports = nextConfig
