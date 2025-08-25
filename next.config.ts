/** @type {import('next').NextConfig} */
const nextConfig = {
  // For local development, basePath is '/'
  // This file will be overwritten during deployment with the appropriate basePath
  images: {
		unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  output: "export",
};

export default nextConfig;
