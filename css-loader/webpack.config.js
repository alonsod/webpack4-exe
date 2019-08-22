const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'js/[name].js'
  },
  /*
  css-loader: Solo sirve para interpretar
  style-loader:inyectar el css al html
  En array se ejecuta del último al primero.
  */
  module:{
    rules :[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}