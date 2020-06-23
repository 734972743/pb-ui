<!--
 * @Author: your name
 * @Date: 2020-06-24 02:28:19
 * @LastEditTime: 2020-06-24 05:49:37
 * @LastEditors: Please set LastEditors
 * @Description: 定时器组件
 * @FilePath: \home\pb-ui\packages\components\Timer\index.vue
--> 

<template>
  <div class="pb-timer">
    <!--  定时弹出框  -->
    <el-dialog title="定时关闭" :visible.sync="clockVisible" class="el-dialog_1" width="500px">
      <el-select v-model="clockTimeStr" placeholder="定时开关" @change="changeClockTime">
        <el-option v-for="time in clockTimes" :key="time.value" :label="time.label" :value="time.value">
        </el-option>
      </el-select>
    </el-dialog>

    <el-dialog title="自定义时间" :visible.sync="customVisible" class="el-dialog_1" width="500px">
      <el-time-picker v-model="customTime" :picker-options="{
        selectableRange: '00:00:00 - 23:59:59'
        }" placeholder="任意时间点" @change="changeCustomTime">
      </el-time-picker>
    </el-dialog>

    <!-- 定时器显示的图标和文字 -->
    <i class="el-icon-alarm-clock clockImg" @click="clockVisible = true"></i>
    <span :class="['clockTime',{'isShowClockTime':clockTimeStr != ''}]" @click="clockVisible = true"
      v-text="clockTimeStr"></span>

  </div>
</template>

<script>
let clockTimesInterval = null;
export default {
  mounted() {
    //设置闹钟定时开关定时器
    this.clockTimesInterval = setInterval(() => {
      if (this.clockDate) {
        let t_s = this.clockDate.getTime(); //转化为时间戳毫秒数
        let nt = this.clockDate; //定义一个新时间
        nt.setTime(t_s - 1000); //设置新时间比旧时间少一秒
        nt = new Date(nt);

        let hour = nt.getHours();
        let minute =
          nt.getMinutes() >= 10 ? nt.getMinutes() : `0${nt.getMinutes()}`;
        let second =
          nt.getSeconds() >= 10 ? nt.getSeconds() : `0${nt.getSeconds()}`;

        if (hour > 0) {
          this.clockTimeStr = hour + ":" + minute + ":" + second;
        } else {
          this.clockTimeStr = minute + ":" + second;
        }

        if (
          nt.getHours() <= 0 &&
          nt.getMinutes() <= 0 &&
          nt.getSeconds() <= 0
        ) {
          // 不能使用window.clearInterval 来关闭定时函数，这样下次就不会再次启动定时函数了
          //   window.clearInterval(this.clockTimesInterval);
          this.clockTimeStr = "";
          this.clockDate = null;

          this.$emit("isEnd", true); //返回结果： 告诉父组件，这个定时器结束了
        }
      }
    }, 1000);
  },

  data() {
    return {
      clockVisible: false,
      clockTimeStr: "",
      clockDate: null,
      clockTimes: [
        { value: "", label: "不开启" },
        { value: "10", label: "10分钟" },
        { value: "20", label: "20分钟" },
        { value: "30", label: "30分钟" },
        { value: "60", label: "60分钟" },
        { value: "90", label: "90分钟" },
        { value: "custom", label: "自定义" }
      ],
      customVisible: false,
      customTime: new Date(2016, 9, 10, 1, 30)
    };
  },

  methods: {
    //根据选择的时间来设置关闭的时间
    setClock(clockTimeStr) {
      let date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      this.clockTimeStr = "";
      switch (clockTimeStr) {
        case "":
          this.clockTimeStr = "";
          this.clockDate = null;
          break;
        case "10":
          date.setMinutes(10);
          //   date.setMinutes(10);
          break;
        case "20":
          date.setMinutes(20);
          break;
        case "30":
          date.setMinutes(30);
          break;
        case "60":
          date.setHours(1);
          date.setMinutes(0);
          break;
        case "90":
          date.setHours(1);
          date.setMinutes(30);
          break;
        case "custom":
          this.customVisible = true;
          break;
      }

      this.clockVisible = false;
      return date;
    },

    changeClockTime(val) {
      let date = this.setClock(val);
      if (val != "" && val != "custom") {
        this.clockDate = date;
      }
    },

    //更改自定义时间触发事件
    changeCustomTime(val) {
      this.customVisible = false;
      this.customTime = val;
      this.clockDate = val;
      let nt = val;
      if (nt.getHours() > 0) {
        this.clockTimeStr =
          nt.getHours() + ":" + nt.getMinutes() + ":" + nt.getSeconds();
      } else {
        this.clockTimeStr = nt.getMinutes() + ":" + nt.getSeconds();
      }
    }
  }
};
</script>

<style  scoped>
.pb-timer {
  position: relative;
}

.pb-timer .clockImg {
  font-size: 53px;
}

.pb-timer .clockTime {
  font-size: 26px;
  position: absolute;
  color: #6c5ce7;
  left: 35px;
  top: -3px;

  width: 73px;
  height: 36px;
  padding-left: 4px;
}

.pb-timer .isShowClockTime {
  background: white;
}
</style>