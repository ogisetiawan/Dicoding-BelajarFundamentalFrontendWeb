const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/app.js', //? entry point
  output: {
    path: path.resolve(__dirname, 'dist'), //? set path folder bundle
    filename: 'bundle.js',//? berkas untuk bundling
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //? tipe berkas yang akan ditransformasikan.
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
      filename: "index.html", //? output html in folder dist
    }),
  ],
}
