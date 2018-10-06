
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin= require("html-webpack-plugin");

var DEV = path.resolve(__dirname,"dev");
var OUTPUT = path.resolve(__dirname,"public");

var config = {
    entry:DEV+"/index.jsx",

    output:{
      path:OUTPUT,
      filename: "myCode.js"
    },

    module:{
      rules:[
        {
          test:/\.jsx$/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env','@babel/preset-react']
            }
          }
        }
      ]
    },

    devServer: {
      contentBase: "./public",
      historyApiFallback: true,
      inline: true,
      port:4000
  }
  
  // plugins:[
  //   new HtmlWebpackPlugin(
  //     {template:'./public/index.html'}
  //   )
  // ]

};
module.exports=config;
