const { join } = require('path');
const { DllPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    modules: ['react', 'react-dom', 'react-helmet'],
  },
  output: {
    path: join(__dirname, 'dist', 'js'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },

  plugins: [
    new DllPlugin({
      path: join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
};
