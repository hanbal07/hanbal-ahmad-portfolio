import type { NextConfig } from "next";

// When deploying to GitHub Pages under /hanbal-ahmad-portfolio, the CI build
// sets NEXT_PUBLIC_REPO_NAME so both basePath and assetPrefix are correct.
// Locally (dev / self-hosting at the domain root) it stays undefined.
const repoName = process.env.NEXT_PUBLIC_REPO_NAME ?? "";
const basePath = repoName ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Same value for assets — required when hosting from a sub-path.
  assetPrefix: basePath,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    // Static export has no image optimizer server.
    unoptimized: true,
  },
};

export default nextConfig;