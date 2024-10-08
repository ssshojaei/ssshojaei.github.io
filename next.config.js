const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  output: 'export',
  reactStrictMode: true,
  output: 'standalone',
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  }
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
