/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["a39436.business.ru", "vetervremeni.kz", "mc.yandex.ru"],
    remotePatterns: [
      {
        hostname: 'ivgamblogserver.online',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/api/**',
      },
    ],
  },
  env: {
    api_url: 'https://ivgamblogserver.online/api',
    client_url: 'https://ivgamblogserver.online',
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
