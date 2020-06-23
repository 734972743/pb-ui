<!--
 * @Author: your name
 * @Date: 2020-06-24 02:37:04
 * @LastEditTime: 2020-06-24 04:19:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-ui\examples\component\timer.vue
--> 
<template>
  <div>
    <pb-timer @isEnd="isEnd"></pb-timer>
  </div>
</template>

<script>
export default {
  methods: {
    //这个方式是当定时器结束时，触发的事件， 此时，val为true
    //   这里你可以定义你想要在定时器结束时要做的事情
    isEnd(val) {
      console.log("isEnd", val);
    }
  }
};
</script>

<style  scoped>
</style>