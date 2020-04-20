const postImport = require('postcss-import')
const postUrl = require('postcss-url')
const autoprefixer = require('autoprefixer')

module.exports = () => {
  return {
    plugins:[
      autoprefixer(),
      postImport(),
      postUrl(),
    ]
  }
}