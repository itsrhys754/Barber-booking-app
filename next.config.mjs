/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  basePath: '/details',
  // output: "export",  // <=== enables static exports
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['media.graphassets.com', 'lh3.googleusercontent.com']
  }
};

export default nextConfig;