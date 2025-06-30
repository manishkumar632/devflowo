// File: next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/devflowo' : '',
  assetPrefix: isProd ? '/devflowo/' : '',
};

export default nextConfig;