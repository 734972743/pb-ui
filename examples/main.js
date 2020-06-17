/*
 * @Author: your name
 * @Date: 2020-06-10 16:59:38
 * @LastEditTime: 2020-06-18 03:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\my_music_back\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

//因为package/index.js文件中已经引入了，所以在外面就不需要再次引入。
// import Echarts from "echarts";
import PbUi from "../packages";

// Vue.use(ElementUI);
Vue.use(PbUi);

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
