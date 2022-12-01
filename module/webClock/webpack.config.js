const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //? entry points
  output: {
    path: path.resolve(__dirname, "dist"), //? folder dist
    filename: "bundle.js", //? berkas main js in dist
  },
  mode: "development", //? actually default mode is production
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // publicPath: 'http://localhost:8081/dist/',
    // port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    //? dengan loader we can use import css file or others
    rules: [
      {
        //? style and css loader
        test: /\.css$/, //? tipe berkas yang akan ditransformasikan.
        use: [
          //? loader mana yang akan digunakan untuk mentransformasikan berkas terkait.
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      //? babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/, //? kita mengecualikan webpack untuk memproses seluruh berkas .js yang berada di folder “node_modules”
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  /* plugin */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./src/template.html", 
      filename: "index.html", //? output html in folder dist
    }),
  ],
};
