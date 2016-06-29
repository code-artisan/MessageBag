var path = require('path');

module.exports = {
  cache: true,
  entry: './examples/message-bag-example.es6',
  module: {
    loaders: [
      {
        test: /\.(es6)$/,
        loader: 'babel'
      }
    ]
  },
  output: {
    filename: 'message-bag-example.js',
    path: path.join(__dirname, 'examples')
  },
  resolve: {
    alias: {
      Str: 'Str.js'
    }
  }
};
