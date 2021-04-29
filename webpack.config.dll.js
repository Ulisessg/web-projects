const { join } = require('path');
const { DllPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    modules: ['react', 'react-dom', 'styled-components'],
  },
  output: {
    path: join(__dirname, 'dist', 'auto'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  target: ['web'],
  plugins: [
    new DllPlugin({
      path: join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]',
      context: __dirname,
    }),
  ],
};
