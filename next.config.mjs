/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost"]
    },
    env: {
        "dev_api": "http://localhost:4000/api"
    }
};

export default nextConfig;
