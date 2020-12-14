const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [new MiniCssExtractPlugin()],
	output: {
      path: path.join(__dirname, '/prod'),
      filename: 'index.js'
   },
   module: {
   	rules: [
      {
        test: /\.less$|\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
   },
   optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  }
});