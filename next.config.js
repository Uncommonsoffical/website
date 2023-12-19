/* eslint-disable @typescript-eslint/no-var-requires */
const { withIpfsGateway } = require('@crossbell/ipfs-gateway-next')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = withBundleAnalyzer(withIpfsGateway(nextConfig))
