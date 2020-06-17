<!--
 * @Author: your name
 * @Date: 2020-06-15 11:37:19
 * @LastEditTime: 2020-06-18 03:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-ui\readme.md
 -->

<!-- npm config set registry http://registry.npmjs.org/ 官方镜像
npm config set registry https://registry.npm.taobao.org 淘宝镜像

### npm version patch : 提升一个版本 -->

# <center>pb-ui 组件 </center>

## github 地址

https://github.com/734972743/pb-ui

## 0.1.11 是真正意义上的第一个版本

## 安装

npm install element-ui echarts pb-ui -S

### 在 main.js 文件中进行配置

```js
import Vue from "vue";
import App from "./App.vue";

import PbUi from "pb-ui";
import "pb-ui/dist/pb-ui.css";

Vue.use(PbUi);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

#### pb-ui 使用方法可以参考官网 [pb-ui](http://www.panbang123.com:8804)
