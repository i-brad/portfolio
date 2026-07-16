/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure the OG-image route ships its font files in the serverless bundle.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./app/_og-fonts/**"],
  },
  async redirects() {
    return [
      // Preserve old v1 URLs
      { source: "/works", destination: "/work", permanent: true },
      { source: "/about", destination: "/journey", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
    ];
  },
};

export default nextConfig;
