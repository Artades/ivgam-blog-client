/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["a39436.business.ru", "vetervremeni.kz", "mc.yandex.ru"],
    remotePatterns: [
      {
        hostname: '185.170.198.127',
        hostname: 'localhost',
      },
    ],
  },
  env: {
    api_url: 'http://localhost:4000/api',
  },
  async rewrites() {
    return [
      {
        source: '/next-api/:path',
        destination: '/api/:path',
      },
    ];
  },
};

export default nextConfig;
