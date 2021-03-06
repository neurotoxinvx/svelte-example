const path = require('path');

const { readFileSync } = require('fs');

const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    'main': [ './src/main.js' ]
  },
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelSettings
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'svelte-loader'
      }
    ]
  },
  devtool: false,
  watch: true
};