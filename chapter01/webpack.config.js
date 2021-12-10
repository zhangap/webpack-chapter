const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: 'babel-loader'
			},
			{
				test: /.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'px2rem-loader',
						options: {
							remUnit: 75,
							remPrecision:8
						}
					}
				]
			}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html'
		})
	],
	mode: 'production'
}
