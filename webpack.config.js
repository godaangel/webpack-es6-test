var path = require('path')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-3']
      }
    }]
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      'demo': resolve('src/demo')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: { // 配置接口转发规则
      '/test': {  
        target: 'http://your ip:port', 
        secure: false,
        changeOrigin: true
      }  
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}