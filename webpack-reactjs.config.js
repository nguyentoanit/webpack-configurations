const path = require("path");
var config = {
    entry: './assets/js/main.js',
    output: {
       path: path.resolve(__dirname, "dist/js"),
       filename: 'index.js',
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;