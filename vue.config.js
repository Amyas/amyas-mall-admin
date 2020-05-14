const webpack = require("webpack");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 8050,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8052',
        changeOrigin: true,
        secure: true,
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [resolve("src/scss/_entry.scss")],
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV),
        },
      }),
      new webpack.ProvidePlugin({
        _: "lodash",
      }),
    ],
  },
};
