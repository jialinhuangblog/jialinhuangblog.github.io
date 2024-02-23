/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '',
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  // images: {
  //   domains: ['https://lh3.googleusercontent.com'],
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'lh3.googleusercontent.com',
  //   //     port: '',
  //   //   },
  //   // ],
  // },
  output: 'export', //production
}
export default nextConfig
