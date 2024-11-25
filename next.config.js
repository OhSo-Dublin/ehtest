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
    async rewrites() {
        return [
            {
                source: '/test1/:path*',
                destination: '/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
