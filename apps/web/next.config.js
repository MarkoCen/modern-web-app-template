/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['../../packages/components', '../../packages/graphql'],
};

module.exports = nextConfig;
