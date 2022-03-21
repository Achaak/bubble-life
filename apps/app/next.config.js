require('dotenv-flow').config({ path: '../..' })
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@bubble/ui', '@bubble/styles'])

const plugins = [withTM]
const nextConfig = {
  swcMinify: false,
}

module.exports = withPlugins(plugins, nextConfig)
