/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      allowFutureImage: false,
      domains: ['upload.wikimedia.org', 'cdn1.iconfinder.com', 'ibb.co', 'i.ibb.co']
    },
  }

module.exports = nextConfig
