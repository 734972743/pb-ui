<!--
 * @Author: your name
 * @Date: 2020-06-14 18:36:01
 * @LastEditTime: 2020-06-19 04:49:27
 * @LastEditors: Please set LastEditors
 * @Description: 这个组件是用来 放置各个组件并给用户展示说明各个组件的使用及用途的
 * @FilePath: \home\vue_ui\src\components\DemoBlock\index.vue
--> 


<template>
  <div>
    <div class="source">
      <!-- 用来存放组件的 -->
      <div slot="component"></div>
    </div>

    <!-- 这是用来放标志信息用的 -->
    <div class="meta">
      <div>
        <div slot="componentDescription"></div>
      </div>

      <div style="background-color:yellow;">
        <!-- 组件示例代码  display:none-->
        <div slot="componentCode"></div>
      </div>
    </div>

    <!-- 用来控制说明是否展示用的 -->
    <div class="demo-block-control">
      <i class="el-icon-caret-bottom caret-bottom"></i>
      <span style="display: none;" class="showCodeBtn">显示代码</span>
      <!-- <button
        type="button"
        class="el-button control-button el-tooltip el-button--text el-button--small"
        aria-describedby="el-tooltip-634"
        tabindex="0"
        style="display: none;"
      >
        <span>
          在线运行
        </span>
      </button> -->
    </div>
  </div>
</template>




<script>
export default {
  props: {
    size: Number, // 组件的个数
    default: 1
  },

  mounted() {
    let isShowMap = new Map();

    for (let i = 0; i < this.size; i++) {
      isShowMap.set(i + "", false);

      let demoBlockControl = document.querySelectorAll(".demo-block-control")[
        i
      ];
      let showCodeBtn = document.querySelectorAll(".showCodeBtn")[i];
      // let controlButton = document.querySelector(".control-button");
      let iconBtn = document.querySelectorAll(".caret-bottom")[i];
      let code = document.querySelectorAll(".code")[i];
      let description = document.querySelectorAll(".description")[i];
      demoBlockControl.onmouseover = function() {
        //设置其背景颜色为黄色
        showCodeBtn.style.display = "inline-block";
        // controlButton.style.display = "inline-block";
        demoBlockControl.style.backgroundColor = "#d3dce6";
      };
      //为li注册鼠标离开事件
      demoBlockControl.onmouseout = function() {
        //恢复到这个标签默认的颜色
        showCodeBtn.style.display = "none";
        // controlButton.style.display = "none";
        demoBlockControl.style.backgroundColor = "#fff";
      };

      demoBlockControl.onclick = function() {
        if (!isShowMap.get(i + "")) {
          code.style.display = "block";
          description.style.display = "block";
          iconBtn.className = "el-icon-caret-top caret-bottom";
          showCodeBtn.innerHTML = "隐藏代码";
        } else {
          code.style.display = "none";
          description.style.display = "none";
          iconBtn.className = "el-icon-caret-bottom caret-bottom";
          showCodeBtn.innerHTML = "显示代码";
        }
        isShowMap.set(i + "", !isShowMap.get(i + "")); //取反
      };
    }
  },

  methods: {}
};
</script>

<style  scoped>
.meta {
  font-size: 1.6rem;
  margin: 20px auto;
}

.demo-block-control {
  font-size: 1rem;
  height: 55px;
  line-height: 55px;
  /* background: red; */
  /* margin: 20px auto; */
}

.demo-block-control .caret-bottom {
  margin-left: 311px;
}

.demo-block-control .control-button {
  margin-left: 230px;
  font-size: 1rem;
}
</style>
