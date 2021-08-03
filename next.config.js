const path = require('path');


module.exports = {
	env: {
		POEMS_DIR: '../public/img/poems/',
		HOME_DIR: '../public/txt/home/',
		JOURNAL_DIR: '../../public/txt/journal/'
	},
	sassOptions: {
	  includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, options) => {
	    config.module.rules.push({
	      test: /\.txt$/,
	      use: [
	        options.defaultLoaders.babel,
	        {
	          loader: 'file-rawtxt-loader'
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
                publicPath: 'public/img/',
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
         })
        return config;
	}
};