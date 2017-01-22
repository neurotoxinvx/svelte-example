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
        use: 'babel-loader',
        query: babelSettings
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: false,
  watch: true
};