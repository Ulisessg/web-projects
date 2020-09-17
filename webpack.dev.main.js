const { join } = require('path');
const HtmlWebpackPlugnin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: join(__dirname, 'src', 'pages', 'main', 'index.js'),
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2)$/,
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
    new HtmlWebpackPlugnin({
      template: join(__dirname, 'public', 'main.html'),
      filename: join(__dirname, 'dist', 'index.html'),
    }),
  ],

  devServer: {
    index: 'index.html',
    contentBase: join(__dirname, 'src', 'pages', ' main.js'),
    port: 2001,
    hot: true,
    open: true,
    watchContentBase: true,
    watchOptions: {
      poll: 420,
    },
  },
};
