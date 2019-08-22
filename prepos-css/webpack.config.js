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
          {
            loader: 'css-loader',
            options:{
              importLoaders:1 /* Primero se ejecuta la carga por css-loader */
            }
          },
          'postcss-loader'
        ]
      },  
      {
        test:/\.scss$/,
        use:
         [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.less$/,
        use:
         [
          'style-loader', 
          'css-loader',
          'less-loader',
        ]
      },
      {
        test:/\.styl$/,
        use:
         [
          'style-loader', 
          'css-loader',
          'stylus-loader',
        ]
      },                     
      {
        /* Conversión e inserción de archivos a texto base 64 dentro del JS. 
        Solo para archivos pequeños.  
        Si no cumple los requisitos(limit:), utiliza el file-loader, el cual debe estar dentro del package-json
        */
        test:/\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use:{
          loader: 'url-loader',
          options: {
            limit:900000,
          }
        }
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