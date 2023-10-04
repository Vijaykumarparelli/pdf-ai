import million from 'million/compiler';
/** @type {import ('next').NextConfig} */

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production',
  images: {
    domains: ['source.unsplash.com'],
  },
};
export default million.next(nextConfig);
