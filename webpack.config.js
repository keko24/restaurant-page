const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		home: './src/home.js',
		contact: './src/contact.js',
		menu: './src/menu.js',
	},
  	output: {
    		filename: '[name].bundle.js',
    		path: path.resolve(__dirname, 'dist'),
		clean: true,
  	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			],
	},
};
