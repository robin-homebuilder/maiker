/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000",
  }
}

module.exports = nextConfig