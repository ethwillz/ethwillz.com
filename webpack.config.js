const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

let config = {
  entry: '../src/index/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?name=/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }
        ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
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
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;

if(process.env.NODE_ENV === 'production'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssets()
  )
}
