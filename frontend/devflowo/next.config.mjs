// File: next.config.mjs
import 'dotenv/config';
const isProd = true;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/devflowo' : '',
  assetPrefix: isProd ? '/devflowo/devflowo/' : '',
};

export default nextConfig;