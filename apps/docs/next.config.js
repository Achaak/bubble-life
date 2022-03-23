const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@bubble/styles"]);

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

const plugins = [withTM, withNextra];
const nextConfig = {
  swcMinify: false,
  env: {
    PASSWORD_PROTECT: process.env.ENVIRONMENT !== "development",
  },
};

module.exports = withPlugins(plugins, nextConfig);
