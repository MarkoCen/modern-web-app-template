/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true,
    swcPlugins: [],
  },
};

module.exports = nextConfig;
