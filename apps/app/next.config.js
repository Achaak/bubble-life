require('dotenv-flow').config({ path: '../..' })
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@bubble/ui',
  '@bubble/styles',
  '@bubble/configs',
  '@bubble/types',
  '@bubble/common',
  '@bubble/store',
  '@bubble/core',
  '@bubble/modules',
])

const plugins = [withTM]
const nextConfig = {
  swcMinify: false,
}

module.exports = withPlugins(plugins, nextConfig)
