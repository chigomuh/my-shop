/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["demo.vercel.store"],
  },
};

module.exports = nextConfig;
