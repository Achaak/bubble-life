require('dotenv-flow').config({ path: '../..' });

const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')([
  '@bubble/translate',
  '@bubble/store',
]);

const plugins = [withBundleAnalyzer, withTM, withPWA];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
};

module.exports = withPlugins(plugins, nextConfig);
