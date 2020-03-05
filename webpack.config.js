const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './public',
    open: true,
  },
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
};
