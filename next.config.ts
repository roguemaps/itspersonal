import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/itspersonal/' : '',
  basePath: isProd ? '/itspersonal' : '',
  output: 'export',
  trailingSlash: true
};

export default nextConfig;
