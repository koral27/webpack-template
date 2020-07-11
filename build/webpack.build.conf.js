const merge = require('webpack-merge');
const baseWebpackCongig = require('./webpack.base.conf');

const buildWebpackCongig = merge(baseWebpackCongig, {
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackCongig)
})