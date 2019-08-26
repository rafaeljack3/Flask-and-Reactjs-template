const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
Source:
https://wanago.io/courses/webpack-4-course/
*/

const config = {
	//use it to begin the module bundling
	entry: './static/index.jsx',
	output:{
		path: path.resolve(__dirname,'public/js/'),
		filename: 'main.js',
		publicPath: '/public/js/'
	},
	resolve: {
		extensions: ['.js','.jsx','.css']
	},
	module: {
		rules:[
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: { presets: ["@babel/env"] }
		},
		{
         	test: /\.css$/,
         	loader: 'style-loader!css-loader?modules'
  		},
  		{
        	test: /\.(png|jpg|gif)$/,
        	use:[{
            	loader: 'url-loader',
            	options: {
              		limit: 5000
              	}
          	}]
      	}]
 	},
 	devtool: 'eval-source-map',
 	devServer: {
 		contentBase: path.join(__dirname, "public/"),
 		port: 3000,
 		publicPath: "http://localhost:3000/public/",
 		hotOnly: true
 	},
 	//dont need to refresh the browser
 	plugins: [
 		new webpack.HotModuleReplacementPlugin(),
 		new HtmlWebpackPlugin({
 			filename: path.join(__dirname, "public/index.html"),
 			template: './static/index.html'
 		})
 	]
};

module.exports = config;