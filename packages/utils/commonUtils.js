/*
 * @Author: your name
 * @Date: 2020-06-12 19:21:54
 * @LastEditTime: 2020-06-14 23:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\data-picker\utils\commonUtils.js
 */

export default {
  getYearMonthDay(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let obj = { year, month, day };
    return obj;
  },

  getDate(year, month, day) {
    return new Date(year, month - 1, day);
  },

  formatHtmlToText(string) {
    // ◐ 表示回车符
    // \s 空白字符
    let entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
      "◐": "&#10;",
      " ": "&nbsp;",
    };

    return String(string).replace(/[&<>"'`=\/◐\s]/g, function(s) {
      return entityMap[s];
    });
  },
};
