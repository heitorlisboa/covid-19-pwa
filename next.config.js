const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
