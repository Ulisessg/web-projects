const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: join(__dirname, 'src', 'react', 'pages', 'design-index.js'),
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
      template: join(__dirname, 'public', 'design-system.html'),
      filename: join(__dirname, 'dist', 'design-system.html'),
    }),
  ],
  devServer: {
    index: 'design-system.html',
    contentBase: join(__dirname, 'src', 'react', 'pages', 'design-index.js'),
    watchContentBase: true,
    port: 2001,
    hot: true,
    open: true,
    watchOptions: {
      poll: 420,
    },
  },
};
