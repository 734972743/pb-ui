<!--
 * @Author: your name
 * @Date: 2020-06-13 22:59:32
 * @LastEditTime: 2020-06-14 03:35:23
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
export default {
  props: {
    refId: String, //ref id
    options: {
      type: Object,
      required: true
    }
  },

  created() {},

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
    // 这个方法已经在pb-echart.js中被全局定义了，所以这里不用写
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
      /*
      let options1 = {
        backgroundColor: "#FBFBFB",
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["充值", "消费"]
        },

        calculable: true,

        xAxis: [
          {
            axisLabel: {
              rotate: 30,
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: "#CECECE"
              }
            },
            type: "category",
            boundaryGap: false,
            data: (function() {
              var list = [];
              for (var i = 10; i <= 18; i++) {
                if (i <= 12) {
                  list.push("2016-" + i + "-01");
                } else {
                  list.push("2017-" + (i - 12) + "-01");
                }
              }
              return list;
            })()
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#CECECE"
              }
            }
          }
        ],
        series: [
          {
            name: "充值",
            type: "line",
            symbol: "none",
            smooth: 0.2,
            color: ["#66AEDE"],
            data: [800, 300, 500, 800, 300, 600, 500, 600]
          },
          {
            name: "消费",
            type: "line",
            symbol: "none",
            smooth: 0.2,
            color: ["#90EC7D"],
            data: [600, 300, 400, 200, 300, 300, 200, 400]
          }
        ]
      };
      */
      let options1 = {
        xAxis: {
          type: "category",
          axisLabel: {
            //x轴文字旋转
            rotate: 25
          },
          data: this.options.xData
            ? this.options.xData
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.options.series
              ? this.options.series
              : [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };

      this.initEchart(this.$refs[this.echartId], options1);
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
