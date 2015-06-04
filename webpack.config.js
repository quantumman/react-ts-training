var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      './main/app.ts'
    ]
  },
  output: {
    path: './public/js/generated', //Path where bundle.js is generated on the file system
    publicPath: '/js/generated/', //Relative parent URL of the bundle
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'vendor'],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.less', '.css']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader?sourceMap!ts-jsx-loader'},
      {test: /\.less$/, loader: "style!css!less"}
    ]
  }
};
