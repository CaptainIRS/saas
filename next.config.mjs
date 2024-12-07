/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.sol$/,
        // This is the asset module.
        type: 'asset/source',
      }
    )
    return config
  },
};

export default nextConfig;
