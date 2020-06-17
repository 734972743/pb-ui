<!--
 * @Author: your name
 * @Date: 2020-06-12 17:50:29
 * @LastEditTime: 2020-06-18 01:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\App.vue
-->
<template>
  <div id="app">
    <!-- 页面渲染出口 -->
    <!-- <router-view></router-view> -->
    hello
    <pb-bar :refId="ref1" :options="options"></pb-bar>
  </div>
</template>


<script>
// 引入全局的js;

export default {
  data() {
    return {
      ref1: "echart1",
      options: {
        title: "财政收入支出图",
        xData: ["2020-01", "2020-02", "2020-03", "2020-04"],
        series: [100, 200, 150, 300]
      }
    };
  }
};
</script>


<style>
</style>