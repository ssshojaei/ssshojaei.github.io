import withMDX from '@next/mdx'

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/ssshojaei.github.io' : '',
  assetPrefix: isProd ? '/ssshojaei.github.io/' : '',
  reactStrictMode: true,
  output: 'standalone',
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
  // Optionally, add any other Next.js config below
}

export default withMDXConfig(nextConfig)
