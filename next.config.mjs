/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["a39436.business.ru", "vetervremeni.kz", "mc.yandex.ru"],
    remotePatterns: [
      {
        hostname: '185.170.198.127',
        hostname: 'localhost',
        hostname: 'ivgamblogserver.online',
      },
    ],
  },
  env: {
    api_url: 'https://ivgamblogserver.online/api',
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
