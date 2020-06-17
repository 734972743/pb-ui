/*
 * @Author: your name
 * @Date: 2020-06-10 16:59:38
 * @LastEditTime: 2020-06-18 01:24:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\my_music_back\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import PbUi from "../packages";

Vue.use(ElementUI);

Vue.use(PbUi);

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
