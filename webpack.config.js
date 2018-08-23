var path = require('path');

module.exports = {
  cache: true,
  entry: './examples/message-bag-example.es6',
  module: {
    loaders: [
      {
        test: /\.(es6|js)$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'index.es6'),
          path.resolve(__dirname, 'examples'),
          path.resolve(__dirname, 'node_modules/str-help'),
        ]
      }
    ]
  },
  output: {
    filename: 'message-bag-example.js',
    path: path.join(__dirname, 'examples')
  },
};
