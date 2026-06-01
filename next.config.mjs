/** @type {import('next').NextConfig} */

// Static export so the site can be hosted on GitHub Pages (no Node server).
//
// Custom domain (www.8-holding.com) serves from the root, so no basePath is
// needed. If you ever deploy WITHOUT a custom domain — i.e. straight to
// https://<user>.github.io/<repo>/ — uncomment the basePath/assetPrefix lines
// below and set them to "/<repo>".
const nextConfig = {
  output: 'export',
  images: {
    // GitHub Pages can't run the Next.js image optimizer, so serve images as-is.
    unoptimized: true,
  },
  // Emit /about/index.html style routes — friendlier for static hosts.
  trailingSlash: true,
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
