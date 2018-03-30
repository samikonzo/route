const webpack = require('webpack')

module.exports = {
	entry : {
		main : './client/index.jsx'
	},
	output : {
		path: __dirname + 'public',
		publicPath : 'public/',
		filename : 'script.js'
	},
	module : {
		rules : [
			{
				test : /\.jsx$/,
				use  : [
					'react-hot-loader/webpack',
					{
						loader : 'babel-loader',
						options: {
							presets : ['env', 'react']
						}
					}
				]
			}
		]
	},
	devServer : {
		contentBase 		: __dirname + "/public",
		watchContentBase	: true,
		proxy : {
			'*' : {
				target: 'http://localhost:3000'
			}
		}
		/*proxy: {
			'/api' : {
				target: 'http://localhost:3000',
				pathRewrite: {"^/api" : ""}
			}
		},
		historyApiFallback	: true,*/
	}
}