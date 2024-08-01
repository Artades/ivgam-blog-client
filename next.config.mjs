/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'ivgamblogserver.online'],
  },
  env: {
    dev_api: 'http://localhost:4000/api',
    prod_api: 'https://ivgamblogserver.online/api',
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
