const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

let config = {
  entry: './src/index/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [ 'css-loader?url=false', 'sass-loader' ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new ExtractTextWebpackPlugin('styles.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}

module.exports = config;

if(process.env.NODE_ENV === 'production'){
  module.exports.plugins.push(
    new OptimizeCssAssets()
  )
}
