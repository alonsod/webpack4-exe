const path = require('path')

module.exports = {
  entry: './index.js',
  /* mode: 'development', //se agrego en el package.json */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  }
}