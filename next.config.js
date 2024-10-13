const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "velog.velcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/assetlinks",
        destination: "/api/assetlinks",
      },
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/apple-app-site-association",
      },
    ];
  },
  experimental: { optimizeCss: true },
};

module.exports = nextConfig;
