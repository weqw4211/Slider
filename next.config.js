/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/loader.ts",
  },
};

module.exports = nextConfig;
