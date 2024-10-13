const nextConfig = {
  experimental: { optimizeCss: true },
  swcMinify: true,
  reactStrictMode: false,

  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com", "picsum.photos"],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty");
    return config;
  },
};

module.exports = nextConfig;
