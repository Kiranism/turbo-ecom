/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io']
  },
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  transpilePackages: ["@turbo-ecom/ui", "@turbo-ecom/db"],
};

module.exports = nextConfig;
