/*
 * @Author: your name
 * @Date: 2019-10-13 14:21:54
 * @LastEditTime: 2020-06-18 01:57:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-music\vue.config.js
 */

const Webpack = require("webpack");

const path = require("path");

//const uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  pages: {
    index: {
      //entry:项目的入口文件
      entry: "examples/main.js",
      //outputDir: "PB-UI", //打包的文件目录

      //the source template
      template: "public/index.html",

      //output as dist/index.html
      filename: "index.html",
    },
  },

  devServer: {
    port: 8889, // 端口号，如果端口号被占用，会自动提升1
    host: "localhost", //主机名， 127.0.0.1，  真机 0.0.0.0
    https: false, //协议
    open: true, //启动服务时自动打开浏览器访问
  },

  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度

  //css 配置
  // css: {
  //   //是否使用css分离插件 ExtracTextPlugin
  //   extract: true,
  //   sourceMap: false,
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "./src/styles/main.scss;"`,
  //     },
  //   },

  //   modules: false, //是否启动 css modules for all css
  // },

  //扩展webpack 配置 ，让packages加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        //修改它的选项
        return options;
      });
  },
};
