<!--
 * @Author: your name
 * @Date: 2020-06-12 19:11:03
 * @LastEditTime: 2020-06-14 19:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\data-picker\component\data-picker\index.vue
--> 
<template>
  <!-- 自定义指令 -->
  <div v-click-outside>
    <input type="text" :value="formateDate" class="date-picker-input" />
    <div v-if="isVisible" class="pnanel">
      <div class="pannel-nav">
        < <span @click="preMonth()"><<</span> {{ time.year }}年
        {{ time.month }}月<span @click="nextMonth()">>></span>
        >
      </div>
      <div class="pannel-body">
        <!-- 6*7 的表格 -->
        <div>
          <span class="cell-header">日</span>
          <span class="cell-header">一</span>
          <span class="cell-header">二</span>
          <span class="cell-header">三</span>
          <span class="cell-header">四</span>
          <span class="cell-header">五</span>
          <span class="cell-header">六</span>
        </div>
        <div v-for="i in 6" :key="i">
          <span
            class="cell"
            v-for="j in 7"
            :key="j"
            :class="[
              {
                notCurrentMonth: !isCurrentMonth(
                  visibeDays[(i - 1) * 7 + (j - 1)]
                )
              },
              {
                currentDay: isCurrentDay(visibeDays[(i - 1) * 7 + (j - 1)])
              },
              { select: isSelect(visibeDays[(i - 1) * 7 + (j - 1)]) }
            ]"
            @click="selectDate(visibeDays[(i - 1) * 7 + (j - 1)])"
          >
            {{ visibeDays[(i - 1) * 7 + (j - 1)].getDate() }}
          </span>
        </div>
      </div>
      <div class="pannel-foot" @click="getCurrentDay()">今天</div>

      <!-- <button>sdfdsfd</button> -->
    </div>
  </div>
</template>

<script>
import commonUtils from "../../utils/commonUtils.js";
export default {
  directives: {
    //自定义指令   指令与上面的v-指令一一对应  clickOutside = v-click-outside
    clickOutside: {
      //指令生命周期
      /**
       *el: 指令所绑定的元素，可以用来直接操作 DOM。
       binding: 一个对象 ,包含执行对象信息
       vnode：Vue 编译生成的虚拟节点。
       */
      bind(el, bindings, vnode) {
        //把事件绑定到document上
        let handler = e => {
          if (el.contains(e.target)) {
            //包含，点击了组件内
            //调用vnode里的focus()
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            //不包含，说明没有点击组件
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };

        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el, bindings, vnode) {
        document.removeEventListener("click", el.handler);
      }
    }
  },
  props: {
    value: {
      type: Date
      //返回的默认值必须是一个函数类型
    }
  },

  data() {
    return {
      isVisible: false, // 这个面板是否可见
      date: null,
      time: {
        year: commonUtils.getYearMonthDay(this.value).year,
        month: commonUtils.getYearMonthDay(this.value).month,
        day: commonUtils.getYearMonthDay(this.value).day
      }
    };
  },

  mounted() {},

  methods: {
    //显示面板
    focus() {
      this.isVisible = true;
    },

    //影藏面板
    blur() {
      this.isVisible = false;
    },

    //判断日期是不是当前月的
    isCurrentMonth(date) {
      let { year, month } = commonUtils.getYearMonthDay(
        commonUtils.getDate(this.time.year, this.time.month, 1)
      );
      let { year: y, month: m } = commonUtils.getYearMonthDay(date);
      return year === y && month === m;
    },

    //判断是否是今天
    isCurrentDay(date) {
      let { year, month, day } = commonUtils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = commonUtils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },

    isSelect(date) {
      let { year, month, day } = commonUtils.getYearMonthDay(
        commonUtils.getDate(this.time.year, this.time.month, this.time.day)
      );
      let { year: y, month: m, day: d } = commonUtils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },

    //选择日期
    selectDate(date) {
      //子传父
      this.$emit("selectDate", date);
      //父组件更新，子组件中的prop值也会更新，但子组件不能修改由父组件传递过来的值
      this.blur();
    },

    //今天
    getCurrentDay() {
      let { year, month, day } = commonUtils.getYearMonthDay(new Date());
      this.time.year = year;
      this.time.month = month;
      this.time.day = day;
      // console.log("getCurrentDay", this.time.month, this.time.day);
    },
    preMonth() {
      this.time.month--;
      if (this.time.month < 1) {
        this.time.year--;
        this.time.month = 12;
      }
    },

    nextMonth() {
      this.time.month++;
      if (this.time.month > 12) {
        this.time.year++;
        this.time.month = 1;
      }
    }
  },

  watch: {
    value: function(newVal, oldVal) {
      let { year, month, day } = commonUtils.getYearMonthDay(newVal);
      this.time.year = year;
      this.time.month = month;
      this.time.day = day;
    }
  },

  computed: {
    //显示每个月分的所有天数
    visibeDays() {
      //根据传入的日期，获取这个月的第一号
      //   2020 06 12     2020 06 01
      let { year, month } = commonUtils.getYearMonthDay(
        commonUtils.getDate(this.time.year, this.time.month, this.time.day)
      );
      let currentFirstDay = commonUtils.getDate(year, month, 1);
      let week = currentFirstDay.getDay(); //获取当月第一天是周几
      //获取今天是周几
      // 今天是周几，就把日期往前移几天，要保证每月的周一要显示出来

      //要加上格林威治时间 8小时
      let startDay = currentFirstDay - week * 24 * 3600 * 1000;

      let dayArr = [];

      //一个月要显示 6*7 = 42 天信息
      for (let i = 0; i < 42; i++) {
        dayArr.push(new Date(startDay + i * 24 * 3600 * 1000));
      }
      return dayArr;
    },

    formateDate() {
      // let { year, month, day } = commonUtils.getYearMonthDay(this.value);
      let { year, month, day } = commonUtils.getYearMonthDay(
        commonUtils.getDate(this.time.year, this.time.month, this.time.day)
      );
      this.time.year = year;
      this.time.month = month;
      this.time.day = day;

      return `${year}/${month}/${day}`;
    }
  }
};
</script>

<style  scoped>
.date-picker-input {
  height: 34px;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  padding-left: 11px;
}

.pnanel {
  position: absolute;
  background: #fff;
  width: 232px;
  height: 284px;
  box-shadow: 2px 2px 2px pink;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
}

.pannel-nav {
  height: 30px;
  justify-content: space-around;
  text-align: center;
}

.pannel-body .cell,
.cell-header {
  display: inline-flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none; /* 禁止选中 */
  font-weight: bold;
}

.cell:hover,
.select {
  border: 0.5px solid red;
}

.pannel-foot {
  height: 30px;
  text-align: center;
}

.notCurrentMonth {
  color: gray;
}

.currentDay {
  background-color: red;
  color: #fff;
}
</style>