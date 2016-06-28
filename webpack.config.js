var path = require('path');

module.exports = {
  cache: true,
  entry: './test/index.es6',
  module: {
    loaders: [
      {
        test: /\.(es6|js)$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    publicPath: '/dist',
    filename: 'MessageBag.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Str: 'Str.js'
    }
  }
};
