const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  mode: 'production',/* originalmente estaba en modo development, se cambio por  production */
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
        test:/\.js$/,
        use:'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:
         [
          {
            loader: MiniCssExtractPlugin.loader
          },
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
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.less$/,
        use:
         [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          'css-loader',
          'less-loader',
        ]
      },
      {
        test:/\.styl$/,
        use:
         [
          {
            loader: MiniCssExtractPlugin.loader
          },
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
            limit:90000,  /* si le ponia 900 000, me agregaba las imagenes en los archivos js */
          }
        }
      }      
    ]
  },

  /*
  
  */
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title:'webpack-dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
    /*Consumir el DLL  */
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}