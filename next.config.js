const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCss = require('@zeit/next-css');

const plugins = [withImages, withCss];

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]--[hash:base64:5]'
  }
};

module.exports = withPlugins(plugins, config);
