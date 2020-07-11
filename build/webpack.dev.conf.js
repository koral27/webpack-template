const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackCongig = require('./webpack.base.conf');

const devWebpackCongig = merge(baseWebpackCongig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackCongig.externals.paths.dist,
    overlay: {
      port: 8081,
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackCongig)
})


