// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enables static export
  images: { unoptimized: true }, // allows static image builds
};

export default nextConfig;
