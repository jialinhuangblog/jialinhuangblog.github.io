/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '',
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}
export default nextConfig
