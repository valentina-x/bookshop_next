/** @type {import('next').NextConfig} */
const patterns = [{ protocol: "http", hostname: "books.google.com" }];
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: patterns,
  },
};

export default nextConfig;
