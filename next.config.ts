import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// GitHub Pages serves under /Credit-Card/. In dev we want root paths.
const basePath = isProd ? "/Credit-Card" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
