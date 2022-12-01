const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
 
module.exports = merge(common, { //? export mode to common.js 
  mode: 'production',
  module: {
    rules: [
      /* babel loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});