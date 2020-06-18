/*
 * @Author: your name
 * @Date: 2020-06-14 22:52:05
 * @LastEditTime: 2020-06-19 03:36:04
 * @LastEditors: Please set LastEditors
 * @Description: 用来输出组件提示说明文本的
 * @FilePath: \home\vue_ui\src\data\componentCodeData.js
 */
import commonUtils from "./commonUtils.js";

export default {
  getDatePickerHtml() {
    let str =
      "<template> ◐" +
      "   <pb-datepicker ◐" +
      '   :value="now" ◐' +
      '    @selectDate="changeDate" ◐' +
      "    ></pb-datepicker> ◐" +
      "</template> ◐" +
      " ◐" +
      "<script> ◐" +
      "   data() { ◐" +
      "     return { ◐" +
      "       now: new Date() ◐" +
      "     }; ◐" +
      "    } ◐" +
      "   methods： { ◐" +
      "     changeDate(date) { ◐" +
      "       this.now = date; ◐" +
      "     }; ◐" +
      "   } ◐" +
      "</script> ◐";

    return commonUtils.formatHtmlToText(str);
  },

  /** 树形控件的提示文字 */
  getTreeHtml() {
    let str =
      "<template> ◐" +
      " <pb-tree ◐" +
      '   :data.sync="data" ◐' +
      '   :fileOpts="fileOpts" ◐' +
      '   :folderOpts="folderOpts" ◐' +
      " ></pb-tree> ◐" +
      "</template> ◐" +
      " ◐" +
      "<script> ◐" +
      "   data() { ◐" +
      "     return { ◐" +
      "       data: arrData ◐" +
      '       fileOpts: [{ txt: "rm", value: "删除文件" }] ◐' +
      "       folderOpts: [ ◐" +
      '         { txt: "rn", value: "重命名" }, ◐' +
      '         { txt: "rm", value: "删除文件夹" } ◐' +
      "       ] ◐" +
      "     }; ◐" +
      "    } ◐" +
      "   methods： { ◐" +
      "     changeDate(date) { ◐" +
      "       this.now = date; ◐" +
      "     }; ◐" +
      "   } ◐" +
      "</script> ◐";

    return commonUtils.formatHtmlToText(str);
  },

  /** 查询控件的提示文字 */
  getSearchHtml() {
    let str =
      "<template> ◐" +
      " <pb-search ◐" +
      '   :placeholder="placeholder" ◐' +
      '   v-model="searchVal" ◐' +
      '   :tags="tags" ◐' +
      '   @click="handleSearch" ◐' +
      " ></pb-search> ◐" +
      "</template> ◐" +
      " ◐" +
      "<script> ◐" +
      "   data() { ◐" +
      "     return { ◐" +
      '      placeholder: "请输入你要查询的内容" ◐' +
      '       tags: ["啤酒", "花生", "方便面", "可乐", "炸鸡"] ◐' +
      '       searchVal: "" ◐' +
      "     }; ◐" +
      "    } ◐" +
      "   methods： { ◐" +
      "     handleSearch(val) { ◐" +
      "       this.searchVal = val; ◐" +
      "     }; ◐" +
      "   } ◐" +
      "</script> ◐";

    return commonUtils.formatHtmlToText(str);
  },
};
