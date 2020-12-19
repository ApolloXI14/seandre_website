const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index.js'
   },
	devServer: {
		inline: true,
	      port: 8000,
	      historyApiFallback: true,
	      hot: true
	}
});