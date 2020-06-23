/*
 * @Author: your name
 * @Date: 2020-06-18 01:13:11
 * @LastEditTime: 2020-06-24 04:42:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-ui\packages\index.js
 */

import echarts from "echarts";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import PbBar from "./components/Echarts/bar.vue";
import PbLine from "./components/Echarts/line.vue";
import PbPie from "./components/Echarts/pie.vue";

import Search from "./components/Search";
import DatePicker from "./components/DatePicker";
import Tree from "./components/Tree";
import DemoBlock from "./components/DemoBlock";
import Timer from "./components/Timer";
import Lyric from "./components/Lyric";

const install = function(Vue) {
  Vue.mixin({
    //把initEchart 配置成vue全局方法，在任何地方都可以使用
    methods: {
      /**
       * 把这个方法封装成一个全局方法 ，通过this.initEchart()调用
       * 用来封装echart的函数
       * ref: 用来放置echart的容器
       * options echart的选项值
       */
      initEchart(ref, options, onclick) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(ref);
        // 绘制图表
        myChart.setOption(options);

        //设置点击事件
        if (onclick) myChart.on("click", onclick);
      },
    },
  });

  // 引入组件
  Vue.use(echarts);

  Vue.use(ElementUI);

  //注册组件
  Vue.component("pb-demo-block", DemoBlock);
  Vue.component("pb-bar", PbBar);
  Vue.component("pb-line", PbLine);
  Vue.component("pb-pie", PbPie);
  Vue.component("pb-search", Search);
  Vue.component("pb-datepicker", DatePicker);
  Vue.component("pb-tree", Tree);
  Vue.component("pb-timer", Timer);
  Vue.component("pb-lyric", Lyric);
};

//判断是否是直接引入文件，不过是，就不要直接调用Vue.use();
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
