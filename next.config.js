module.exports = {
	env: {
		HOME_DIR: '../www/txt/home/'
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
	    })
        return config;
	}
};