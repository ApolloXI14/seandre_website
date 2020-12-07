const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry: './main.js',
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },
         {
           test: /\.less$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
                {
                 loader: 'resolve-url-loader',
               },
                {
                  loader: 'less-loader',
                  options: {
                    lessOptions: {
                      strictMath: true,
                    },
                  },
                },
              ],
         },
         {
           test: /.*\.(gif|png|jpe?g|svg)$/i,
           use: [
             {
               loader: 'file-loader',
               options: {
                 name: '[name].[ext]',
                outputPath: 'static/assets/',
                publicPath: 'prod/static/assets/',
                 emitFile: true,
                 byPassOnDebug: true,
                 disable: true
               }
             },
             {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            }
           ]
         }
          
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html',
         hash: true
      }),
      new webpack.DefinePlugin({
        POEMS_DIR: JSON.stringify('../www/img/poems/')
      })
   ]
}
