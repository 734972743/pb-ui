<!--
 * @Author: your name
 * @Date: 2020-06-24 02:20:52
 * @LastEditTime: 2020-06-24 02:27:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-ui\examples\component\echarts.vue
--> 
<template>
  <div>
    <h3>柱状图</h3>
    <div class="demo-block">
      <slot name="component">
        <pb-bar :refId="ref1" :options="options"></pb-bar>
      </slot>

      <slot name="componentDescription">
        <div class="description">
          <div><b>refId</b> 元素的id名称,必须不唯一</div>
          <div><b>options</b> 柱状图的选项</div>
        </div>
      </slot>

      <slot name="componentCode">
        <div class="code">
          <pre>
            <div v-html="htmlText"></div>

          </pre>
        </div>
      </slot>

      <pb-demo-block :size="3"></pb-demo-block>
    </div>

    <h3>折线图</h3>
    <div class="demo-block">
      <slot name="component">
        <pb-line :refId="ref2" :options="options"></pb-line>
      </slot>

      <slot name="componentDescription">
        <div class="description">
          <div><b>refId222</b> 元素的id名称,必须不唯一</div>
          <div><b>options222</b> 柱状图的选项</div>
        </div>
      </slot>

      <slot name="componentCode">
        <div class="code">
          <pre>
            <div v-html="htmlText"></div>

          </pre>
        </div>
      </slot>

      <pb-demo-block :size="3"></pb-demo-block>
    </div>

    <h3>饼图</h3>
    <div class="demo-block">
      <slot name="component">
        <pb-pie :refId="ref3" :options="options3"></pb-pie>
      </slot>

      <slot name="componentDescription">
        <div class="description">
          <div><b>refId111</b> 元素的id名称,必须不唯一</div>
          <div><b>options111</b> 柱状图的选项</div>
        </div>
      </slot>

      <slot name="componentCode">
        <div class="code">
          <pre>
            <div v-html="htmlText"></div>

          </pre>
        </div>
      </slot>

      <pb-demo-block :size="3"></pb-demo-block>
    </div>

  </div>

</template>

<script>
import componentCodeData from "../utils/componentCodeData.js";
export default {
  data() {
    return {
      placeholder: "请输入你要查询的内容",
      tags: ["啤酒", "花生", "方便面", "可乐", "炸鸡"],
      searchVal: "",
      ref1: "echart1",
      ref2: "echart2",
      ref3: "echart3",
      options: {
        title: "财政收入支出图",
        xData: ["2020-01", "2020-02", "2020-03", "2020-04"],
        series: [100, 200, 150, 300]
      },
      options3: {
        title: {
          text: "编程语言技能",
          subtext: "PB-UI"
        },
        data: [
          { name: "java", value: 68 },
          { name: "php", value: 30 },
          { name: "js", value: 70 },
          { name: "python", value: 10 }
        ]
      },
      htmlText: componentCodeData.getTreeHtml()
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

<style  scoped>
</style>