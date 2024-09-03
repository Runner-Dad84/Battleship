const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { hash } = require('crypto');

module.exports = {
    mode: 'development',
    watch: false,
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
        compress: true,
        port: 9000,
        open: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
        }),
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader' ],
      },
      /*
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name.[hash].[ext]',
              outputPath: 'images/',
            }
          }
        ]
      }
      */
      {
        test:/\.(mp3|wav|ogg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]'
        },
        exclude: /\.(png|jpe?g|gif|svg)$/i,
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    }
  },
};