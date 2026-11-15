import type { NextConfig } from "next";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/buzzvel-fe-test-2026" : "",
  },
  ...(isGitHubPages
    ? {
        assetPrefix: "/buzzvel-fe-test-2026/",
        basePath: "/buzzvel-fe-test-2026",
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
