/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    APP_S3_BUCKET: "https://maiker-contructions.s3.ap-southeast-2.amazonaws.com"
  },
  images: {
    domains: ['maiker-contructions.s3.ap-southeast-2.amazonaws.com', 'homebuilder.com.au'],
  }
}

module.exports = nextConfig