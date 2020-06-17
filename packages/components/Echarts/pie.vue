<!--
 * @Author: your name
 * @Date: 2020-06-13 22:59:32
 * @LastEditTime: 2020-06-14 03:26:56
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
      let data = [
        {
          name: "Apples",
          value: 70
        },
        {
          name: "Strawberries",
          value: 68
        },
        {
          name: "Bananas",
          value: 48
        },
        {
          name: "Oranges",
          value: 40
        },
        {
          name: "Pears",
          value: 32
        },
        {
          name: "Pineapples",
          value: 27
        },
        {
          name: "Grapes",
          value: 18
        }
      ];

      let options1 = {
        title: [
          {
            text: this.options.title.text
              ? this.options.title.text
              : "Pie label alignTo"
          },
          {
            subtext: this.options.title.subtext
              ? this.options.title.subtext
              : 'alignTo: "none" (default)',
            left: "16.67%",
            top: "75%",
            textAlign: "center"
          }
        ],
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: this.options.data ? this.options.data : data,
            animation: false,
            label: {
              position: "outer",
              alignTo: "none",
              bleedMargin: 5
            },
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
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
