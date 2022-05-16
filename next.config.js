// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "",
  swcMinify: true,
  experimental: {
    emotion: true,
  },
};

module.exports = nextConfig;
