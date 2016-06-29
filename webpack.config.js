var path = require('path');

module.exports = {
  cache: true,
  entry: './example.es6',
  module: {
    loaders: [
      {
        test: /\.(es6)$/,
        loader: 'babel'
      }
    ]
  },
  output: {
    publicPath: '/dist',
    filename: 'message-bag-example.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Str: 'Str.js'
    }
  }
};
