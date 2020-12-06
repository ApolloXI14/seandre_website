const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
      path: path.join(__dirname, '/prod'),
      filename: 'index.js'
   },
});