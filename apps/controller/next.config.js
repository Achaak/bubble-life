const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@bubble/ui',
  '@bubble/types',
  '@bubble/styles',
  '@bubble/translate',
  '@bubble/modules',
  '@bubble/common',
])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const runtimeCaching = require('next-pwa/cache')
require('dotenv-flow').config({ path: '../..' })

const plugins = [withBundleAnalyzer, withTM, withPWA]
const nextConfig = {
  swcMinify: false,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
}

module.exports = withPlugins(plugins, nextConfig)
