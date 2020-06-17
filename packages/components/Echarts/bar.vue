<!--
 * @Author: your name
 * @Date: 2020-06-13 22:59:32
 * @LastEditTime: 2020-06-14 03:35:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\components\Echarts\index.vue
--> 

<template>
  <div>
    <div :ref="echartId" class="echarts"></div>
  </div>
</template>

<script>
// import echarts from "echarts";

export default {
  props: {
    refId: String, //ref id

    options: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.fetchData();
  },

  data() {
    return {
      //   echartId: ""
      echartId: this.refId
    };
  },

  methods: {
    /**
     * 用来封装echart的函数
     * ref: 用来放置echart的容器
     * options echart的选项值
     */
    // initEchart(ref, options) {
    //   // 基于准备好的dom，初始化echarts实例
    //   console.log("ref", ref);
    //   let myChart = echarts.init(ref);
    //   console.log("myChart", myChart);
    //   // 绘制图表
    //   myChart.setOption(options);
    // },

    fetchData() {
      let options1 = {
        title: {
          text: this.options.title ? this.options.title : "ECharts 折线图"
        },
        tooltip: {},
        xAxis: {
          axisLabel: {
            //x轴文字旋转
            rotate: 25
          },
          data: this.options.xData
            ? this.options.xData
            : ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.options.series
              ? this.options.series
              : [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      this.initEchart(this.$refs[this.echartId], options1, data => {
        console.log(data);
      });
    }
  }
};
</script>

<style  scoped>
.echarts {
  width: 300px;
  height: 300px;
}
</style>
