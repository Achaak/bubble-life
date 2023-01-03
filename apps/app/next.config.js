require('dotenv-flow').config({ path: '../..' });

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@bubble/translate',
  '@bubble/store',
]);

const plugins = [withTM];

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPlugins(plugins, nextConfig);
