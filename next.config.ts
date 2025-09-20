/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  webpack: (config, { isServer }) => {
    config.optimization.sideEffects = false;
    return config;
  },
};

module.exports = nextConfig;
