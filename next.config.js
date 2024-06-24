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
	    })
        return config;
	}
};