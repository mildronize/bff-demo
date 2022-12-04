// Helper for combining webpack config objects
// Ref: https://github.com/nrwl/nx/issues/3175
const { merge } = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.

module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,

  return merge(config, {
    plugins: [
      ...config.plugins,
      new WebpackNotifierPlugin({title: 'Frontend Project build completed'}),
    ]
  });
};
