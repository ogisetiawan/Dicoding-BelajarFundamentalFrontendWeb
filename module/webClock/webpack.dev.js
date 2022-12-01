const { merge } = require('webpack-merge');
const common = require('./webpack.common.js'); 
 
module.exports = merge(common, { //? export mode to common.js
  mode: 'development',
});