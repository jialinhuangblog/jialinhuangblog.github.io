/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '',
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  output: 'export',
}
export default nextConfig
