var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
  }
}