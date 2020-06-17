/*
 * @Author: your name
 * @Date: 2020-06-14 02:25:04
 * @LastEditTime: 2020-06-17 18:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\pb-echart.js
 */

//混入pb-echarts组件

import Vue from "vue";
import PbBar from "./components/Echarts/bar.vue";
import PbLine from "./components/Echarts/line.vue";
import PbPie from "./components/Echarts/pie.vue";
import echarts from "echarts";

import Search from "./components/Search";
import DatePicker from "./components/DatePicker";
import Tree from "./components/Tree";
import DemoBlock from "./components/DemoBlock";

// export default HelloWorld;

export default {
  install(Vue) {
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

    //注册组件
    //这个是说明模板组件
    Vue.component("pb-demo-block", DemoBlock);

    //这个是echarts组件图
    Vue.component("pb-bar", PbBar);
    Vue.component("pb-line", PbLine);
    Vue.component("pb-pie", PbPie);

    //这是我开发的组件
    Vue.component("pb-search", Search);
    Vue.component("pb-datepicker", DatePicker);
    Vue.component("pb-tree", Tree);
  },
};
