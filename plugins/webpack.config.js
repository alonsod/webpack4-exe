const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  style-loader:inyectar el css al html.Para esta versión ya no se ocupa.
                En su lugar se usa el plugin
  En array se ejecuta del último al primero.
  */
  module:{
    rules :[
      {
        test:/\.css$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },

  /*
  Extraer el css
  */
  plugins:[
    new HtmlWebpackPlugin({
      title:'Plugins'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}