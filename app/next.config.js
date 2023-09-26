/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  transpilePackages: ['@georgian/ui'],
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
