/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: 'class',
  images: {
    dangerouslyAllowSVG: true,
    domains: ['rb.gy', 'public'],
  },
};

module.exports = nextConfig;
