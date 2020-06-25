<!--
 * @Author: your name
 * @Date: 2020-06-12 17:50:29
 * @LastEditTime: 2020-06-25 15:27:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\App.vue
-->
<template>
  <div id="app">
    <!-- 页面渲染出口 -->
    <!-- <router-view></router-view> -->
    <!-- hello -->
    <!-- <echarts></echarts> -->
    <!-- <timer></timer> -->
    <lyric></lyric>
  </div>
</template>


<script>
import Echarts from "./component/echarts";
import Timer from "./component/timer";
import Lyric from "./component/lyric";
export default {
  components: { Echarts, Timer, Lyric }
};
</script>


<style>
</style>