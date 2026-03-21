/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lotto',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
