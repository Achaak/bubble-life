const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack: (config) => Object.assign(config, {
    target: 'electron-renderer',
  }),
};
