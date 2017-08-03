const webpack = require('webpack');

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = [{
  entry: {
    app: './src/index.js',
  },
  output: {
    path: __dirname,
    filename: './index.js'
  },
  devServer: {
    port: 8010
  },
  plugins: process.env.NODE_ENV === 'production' ?
    BASE_PLUGINS.concat([
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compressor: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]) :
    BASE_PLUGINS.concat([
      new webpack.NamedModulesPlugin()
    ]),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-flow-strip-types'],
          presets: ['es2015', 'es2016', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}];
