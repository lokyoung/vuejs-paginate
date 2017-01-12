const path = require('path')
const webpack = require("webpack");
const modulesDir = path.join(__dirname, '..', 'node_modules')

module.exports = {
  entry: path.join(__dirname, 'demo.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: __dirname
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vuejs-paginate': path.join(__dirname, '..', 'src'),
      'vue$': path.join(modulesDir, 'vue/dist/vue.common.js')
    }
  },
  resolveLoader: {
    modulesDirectories: [
      modulesDir
    ]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
