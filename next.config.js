/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW,
    },
    //trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: '/test1', // Prefix for static assets
};

module.exports = nextConfig;
