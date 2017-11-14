// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const paths = require('../config/paths');

module.exports = {
  resolve: {
    extensions: [
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx'
    ]
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.(ts|tsx)$/,
        include: [paths.appSrc, paths.appPackages],
        loader: require.resolve('ts-loader')
      }
    ]
  }
};
