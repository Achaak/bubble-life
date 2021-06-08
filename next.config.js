const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  i18n,
  future: { webpack5: true, },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'x-frame-options',
  //           value: 'deny',
  //         }, {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self' *.starter.com",
  //         }, {
  //           key: 'X-XSS-Protection',
  //           value: "1; mode=block",
  //         }, {
  //           key: 'X-Content-Type-Options',
  //           value: "nosniff",
  //         },
  //       ],
  //     },
  //   ]
  // }
})