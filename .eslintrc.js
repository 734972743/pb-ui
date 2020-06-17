/*
 * @Author: your name
 * @Date: 2020-06-10 16:59:38
 * @LastEditTime: 2020-06-10 18:11:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \home\my_music_back\.eslintrc.js
 */

module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
