<!--
 * @Author: your name
 * @Date: 2020-06-24 04:20:47
 * @LastEditTime: 2020-06-24 05:15:55
 * @LastEditors: Please set LastEditors
 * @Description: 这个是歌词组件
 * @FilePath: \home\pb-ui\packages\components\Lyric\index.vue
--> 
<template>
  <div class="lyric">
    <!-- 这个标签只是为了刷新页面而已 -->
    <div style="display:none;">{{ currentTime }}</div>
    <div class="lyricTip">
      <a href="#isSelect" id="tiaozhuang" style="display:none;"></a>
      <!-- 歌词 -->
      是否歌词跟随
      <span class="isCyricFollow">
        <el-radio v-model="isCyricFollow" label="1">是</el-radio>
        <el-radio v-model="isCyricFollow" label="0">否</el-radio>
      </span>
    </div>

    <div class="cyricContent">
      <div v-if="cyricObj">
        <div v-for="cyric in cyricObj.ms">
          <div v-if="cyric.isSelect" class="isSelect" id="isSelect">
            {{ cyric.c }}
          </div>
          <div v-else>{{ cyric.c }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var oLRC = {
  ti: "", //歌曲名
  ar: "", //演唱者
  al: "", //专辑名
  by: "", //歌词制作人
  offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
  ms: [] //歌词数组{t:时间,c:歌词}
};

let times = null;

let tiaozhuang = null;
export default {
  props: {
    //  cyricContent: 这个是歌词 lrc文本字符串
    cyricContent: {
      type: String,
      default: ""
    },

    //歌词是否开始播放
    start: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    tiaozhuang = document.getElementById("tiaozhuang");
    this.showLyric();
  },

  data() {
    return {
      currentTime: 0,
      isCyricFollow: "1",
      cyricObj: null //歌词对象
    };
  },

  methods: {
    /**
     * 用于显示歌词
     *
     */
    showLyric() {
      let times = setInterval(() => {
        if (this.start) {
          this.currentTime++;
        }

        let ms = this.cyricObj.ms;
        for (let i = 0; i < ms.length; i++) {
          let se1 = parseInt(this.timeFormatToSecond(ms[i].t));

          let se2 = 0;
          if (i === ms.length - 1) {
            se2 = parseInt(this.timeFormatToSecond(ms[i].t));
          } else {
            se2 = parseInt(this.timeFormatToSecond(ms[i + 1].t));
          }

          if (this.currentTime >= se1 && this.currentTime < se2) {
            ms[i].isSelect = true; //被选中
          } else {
            ms[i].isSelect = false;
          }
        }
        this.cyricObj.ms = ms;
        if (this.isCyricFollow == "1") {
          tiaozhuang.click(); //模拟使用a标签点击跳转
        }
      }, 1000);

      //显示歌词
      this.initCyric();
      if (this.cyricContent) {
        this.cyricObj = this.parseCyric(this.cyricContent);
      } else {
        this.cyricObj = {};
        this.cyricObj.ms = [
          {
            c: "没有找到歌词"
          }
        ];
      }
    },

    /**
     * 初始化歌词对象
     */
    initCyric() {
      var oLRC = {
        ti: "", //歌曲名
        ar: "", //演唱者
        al: "", //专辑名
        by: "", //歌词制作人
        offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
        ms: [] //歌词数组{t:时间,c:歌词}
      };
    },

    /**
     * 歌词解析
     * 解析后的歌词位于oLRC对象的ms数组中：
      oLRC.ms[i].t 是第i行歌词的时间，以秒计；
      oLRC.ms[i].c 是第i行歌词。
     */
    parseCyric(str) {
      //初始化
      oLRC.ms = [];

      let lrcs = []; //字符串数组，
      lrcs = str.split("\n");
      for (let l in lrcs) {
        lrcs[l] = lrcs[l].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
        var t = lrcs[l].substring(
          lrcs[l].indexOf("[") + 1,
          lrcs[l].indexOf("]")
        ); //取[]间的内容
        var s = t.split(":"); //分离:前后文字
        if (isNaN(parseInt(s[0]))) {
          //不是数值
          for (var i in oLRC) {
            if (i != "ms" && i == s[0].toLowerCase()) {
              oLRC[i] = s[1];
            }
          }
        } else {
          //是数值
          var arr = lrcs[l].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
          var start = 0;
          for (var k in arr) {
            start += arr[k].length; //计算歌词位置
          }
          var content = lrcs[l].substring(start); //获取歌词内容
          for (var k in arr) {
            var t = arr[k].substring(1, arr[k].length - 1); //取[]间的内容
            var s = t.split(":"); //分离:前后文字
            oLRC.ms.push({
              //对象{t:时间,c:歌词}加入ms数组
              t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
              c: content
            });
          }
        }
      }

      oLRC.ms.sort(function(a, b) {
        //按时间顺序排序
        return a.t - b.t;
      });

      return oLRC;
    },

    //将时间转为秒： mm:ss ==> ss
    //  [00:02.00]  这里我们只比较前面2组数据，第三组数据我们不看
    timeFormatToSecond(str) {
      if (!str) return;
      str = str.substring(0, str.indexOf(".")); //去掉.以后的字符串
      let timeStrArr = str.split(":");
      let second = 0;
      if (timeStrArr.length === 3) {
        second =
          parseInt(timeStrArr[0]) * 3600 +
          parseInt(timeStrArr[1]) * 60 +
          parseInt(timeStrArr[2]);
      } else if (timeStrArr.length === 2) {
        second = parseInt(timeStrArr[0]) * 60 + parseInt(timeStrArr[1]);
      } else if (timeStrArr.length === 1) {
        second = parseInt(timeStrArr[0]);
      }
      return second;
    }
  }
};
</script>

<style lang="less"  scoped>
.lyric {
  .lyricTip {
    text-align: center;
    font-size: 25px;
  }

  // element UI组件css穿透
  .isCyricFollow {
    /deep/.el-radio .el-radio__label {
      font-size: 25px;
    }
  }

  .cyricContent {
    // width: 38vw;
    // float: left;
    color: #829194;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
    margin-top: 59px;
    line-height: 44px;
    max-height: 600px;
    /* overflow: hidden; */
    overflow-y: auto;
  }

  .isSelect {
    color: #31c27c;
  }

  .isCyricFollow {
    margin-left: 27px;
  }
}
</style>