/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['../../packages/components', '../../packages/graphql'],
  experimental: {
    swcMinify: true,
    swcPlugins: [],
  },
};

module.exports = nextConfig;
