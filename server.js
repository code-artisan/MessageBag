var path = require('path'),
    webpack = require('webpack'),
    configures = require('./webpack.config'),
    WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(configures);

var server = new WebpackDevServer(compiler, {
  publicPath: configures.output.publicPath
});

server.listen(4000);
