const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin  = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'index.js',
   library: 'myLibrary',
   libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src')]
  },
  stats: 'verbose',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    injectClient: false
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new WorkboxPlugin.GenerateSW()
  ]
}