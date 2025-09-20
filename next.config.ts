/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks']
  },
  // Дополнительная оптимизация
  webpack: (config) => {
    config.optimization.sideEffects = false
    return config
  }
}

module.exports = nextConfig