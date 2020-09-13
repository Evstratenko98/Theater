const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
	  rules: [
	    {
      	test: /\.s[ac]ss$/i,
      	use: [
      		MiniCssExtractPlugin.loader,
        	'css-loader',
        	'sass-loader',
		    ],
	    },
	    {
      	test: /\.css$/i,
      	use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
	    {
      	test: /\.(png|svg|jpe?g|gif)$/i,
      	loader: 'file-loader',
      	options: {
      		outputPath: 'src/images',
      	},
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //  {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
	  ]
	},
	plugins: [
 		new HtmlWebpackPlugin({
      template: './index.html'
    }),
 		new MiniCssExtractPlugin({
  		filename: '[name].css',
  		chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/images',
            to: 'src/images',
          }
        ]
    }), 
	]
}