const path = require('path');
//import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
//import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    mode: 'development',
    watch: false,
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};