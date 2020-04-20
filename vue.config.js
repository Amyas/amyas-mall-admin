const webpack = require('webpack')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    // port: 8888,
    // proxy: {
    //   '/api': {
    //     target: 'http://test-m-api.weimiao.cn',
    //     changeOrigin: true,
    //     secure: true,
    //   }
    // }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/scss/_entry.scss')
      ]
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV)
        }
      })
    ]
  }
}