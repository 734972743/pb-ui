<!--
 * @Author: your name
 * @Date: 2020-06-12 17:50:29
 * @LastEditTime: 2020-06-18 03:48:29
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
    <pb-search
      :placeholder="placeholder"
      width="600px"
      v-model="searchVal"
      :tags="tags"
      @click="handleSearch"
    ></pb-search>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ref1: "echart1",
      options: {
        title: "财政收入支出图",
        xData: ["2020-01", "2020-02", "2020-03", "2020-04"],
        series: [100, 200, 150, 300]
      },
      placeholder: "请输入你要查询的内容",
      tags: ["啤酒", "花生", "方便面", "可乐", "炸鸡"],
      searchVal: ""
    };
  },

  methods: {
    handleSearch(val) {
      this.searchVal = val;
      console.log("this.searchVal", this.searchVal);
    }
  }
};
</script>


<style>
</style>