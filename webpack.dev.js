//@ts-check
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: join(__dirname, 'src', 'react', 'pages', process.env.FILE),
  },
  output: {
    path: join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(styl|css)$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[hash].[ext]',
            limit: 9000,
          },
        },
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(
        __dirname,
        'public',
        process.env.FILE.split('.')[0].concat('.html'),
      ),
      filename: join(
        __dirname,
        'dist',
        process.env.FILE.split('.')[0].concat('.html'),
      ),
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
    }),
  ],
  devServer: {
    index: process.env.FILE.split('.')[0].concat('.html'),
    contentBase: join(__dirname, 'src', 'react', 'pages', process.env.FILE),
    watchContentBase: true,
    port: 2001,
    hot: true,
    open: true,
    watchOptions: {
      poll: 420,
    },
  },
};
