/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
