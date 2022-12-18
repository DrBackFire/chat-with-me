/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ssl.gstatic.com", "pngkey.com"],
  },
};

module.exports = nextConfig;
