const p = require('path')
const root = require('app-root-path').toString()
module.exports = {
  entry: './index',
  output: {
    path: p.join(root, 'test', 'fixtures'),
    filename: 'webpack-bundle.js'
  },
  module: {
    loaders: [
      {
        test: require.resolve(p.join(root, 'index')),
        loader: 'expose?wGetElement'
      }
    ]
  }
}
