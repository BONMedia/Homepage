/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3-us-west-2.amazonaws.com",
        },
      ],
      minimumCacheTTL: 1500000,
    },
    basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
  }
  
  module.exports = nextConfig
  