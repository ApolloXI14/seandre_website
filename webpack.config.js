const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['env', 'react']
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
               loader: 'image-webpack-loader',
               options: {
                 name: '[path][name].[ext]',
                 
               }
             },
           ]
         },
          {
           test: /\.(jpe?g|png|gif|svg)$/i,
           use: [
             'url-loader?limit=10000',
             {
               loader: 'img-loader',
               options: {
                 plugins: [
                   require('imagemin-gifsicle')({
                     interlaced: false
                   }),
                   require('imagemin-mozjpeg')({
                     progressive: true,
                     arithmetic: false
                   }),
                   require('imagemin-pngquant')({
                     floyd: 0.5,
                     speed: 2
                   }),
                   require('imagemin-svgo')({
                     plugins: [
                       { removeTitle: true },
                       { convertPathData: false }
                     ]
                   })
                 ]
               }
             }
           ]
      }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
