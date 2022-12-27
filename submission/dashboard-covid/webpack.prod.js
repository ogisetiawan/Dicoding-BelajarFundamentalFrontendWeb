const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
 
module.exports = merge(common, { //? export mode to common.js 
  mode: 'production',
  module: {
    rules: [
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
});