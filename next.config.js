const path = require('path');


module.exports = {
	turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
	env: {
		POEMS_DIR: '../public/img/poems/'
	},
	sassOptions: {
	  includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, options) => {
	    config.module.rules.push({
	      test: /\.txt$/
	    })
        return config;
	}
};
