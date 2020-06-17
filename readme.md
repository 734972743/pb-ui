<!--
 * @Author: your name
 * @Date: 2020-06-15 11:37:19
 * @LastEditTime: 2020-06-17 16:24:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-ui\readme.md
 -->

# datetime-format-wsy

npm config set registry http://registry.npmjs.org/ 官方镜像
npm config set registry https://registry.npm.taobao.org 淘宝镜像

格式化时间，获取 2019-08-07 15:06:32 或 2019-08-07 或 15:06:32

# install

npm install pb-ui -S

<!-- #github
https://github.com/ -->

#usage
let formatter = require('./index')
formatter.init('2018-6-9')
console.info(formatter.getDateTime())

### npm version patch : 提升一个版本
