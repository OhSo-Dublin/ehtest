/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW,
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/marketing', // Add this line to serve the app under /marketing
};

module.exports = nextConfig;
