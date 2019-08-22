const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'js/[name].js'
  },
  /* configuración del servidor virtual. Open, abre de manera automática el navegador default */
  devServer: {
    hot: true, /*hotModuleReplacement */
    open: true,
    port: 9001,
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
        test:/\.js$/,
        use:'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:
         [
           /*  *Este caso es para producción, en conjunto con MiniCSSExtractPlugin
          {
            loader: MiniCSSExtractPlugin.loader
          },
          */
          'style-loader', /* Para desarrollo */
          'css-loader'
        ]
      }
    ]
  },

  /*
  Extraer el css
  */
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title:'webpack-dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
    /*  En modo de desarrollo, no es necesario generar archivos .css 
        Se quita esta sección y se agrega en la sección module/use */
    /*
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
    */
  ]
}