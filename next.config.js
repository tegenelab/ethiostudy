/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kehulum.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
