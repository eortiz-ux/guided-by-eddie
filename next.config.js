/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This replaces the need for 'next export'
  images: {
    unoptimized: true, // required for static exports on Netlify
  },
};

module.exports = nextConfig;
