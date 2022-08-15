require('dotenv-flow').config({ path: '../..' });

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')([
  '@bubble/translate',
  '@bubble/store',
]);

const plugins = [withBundleAnalyzer, withTM];

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPlugins(plugins, nextConfig);
