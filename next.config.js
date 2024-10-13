const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  swcMinify: true,
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
