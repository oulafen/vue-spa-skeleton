var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    // filename: 'build.js',
    chunkFilename: 'chunks/[name]-[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.resolve(__dirname, './src/components'),
      'util': path.resolve(__dirname, './src/util'),
      'assets': path.resolve(__dirname, './src/assets'),
      'partials': path.resolve(__dirname, './src/partials'),
      'views': path.resolve(__dirname, './src/views')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        // 使用用户自定义插件
        postcss: [require('postcss-cssnext')()]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // 指定公共 bundle 的名称。
    }),
    new CleanWebpackPlugin(['dist/*.js'])
  ],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.output.filename = `[name]-${Date.parse(new Date())}.build.js`;

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index_template.html',
    }),
  ])
}

if (process.env.NODE_ENV === 'development') {
  module.exports.output.publicPath = '/dist/';
  module.exports.output.filename = '[name].build.js';

  /** mock data 模拟本地开发api **/
  var mock = require('./src/mock/index.js');
  mock.api(module);
}
