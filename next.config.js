/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    loader: "imgix",
    path: "/",
  },
  trailingSlash: true
};

module.exports = nextConfig;
