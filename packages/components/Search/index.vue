<!--
 * @Author: your name
 * @Date: 2020-06-14 15:17:05
 * @LastEditTime: 2020-06-14 18:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\components\Search\index.vue
--> 
<template>
  <div>
    <el-input :placeholder="placeholder" v-model="searchVal" :style="style">
      <!-- 可通过 slot 来指定在 input 中前置或者后置内容。  -->
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="seachHandler"
      ></el-button>
    </el-input>
    <br />

    <el-tag
      v-for="(item, index) in tags"
      :key="index"
      :type="item.type"
      effect="dark"
      closable
      @close="closeTag(index)"
      @click="selectTag(index)"
    >
      <span>{{ item }}</span>
    </el-tag>
  </div>
</template>

<script>
export default {
  props: {
    //输入框的宽度
    width: {
      type: String,
      default: "600px"
    },
    placeholder: {
      type: String,
      default: "请输入..."
    },
    tags: {
      type: Array,
      required: false,
      default: () => {
        //props default 数组／对象的默认值应当由一个工厂函数返回
        return [];
      }
    }
  },

  //默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，
  model: {
    prop: "searchVal", //对应子组件的v-model 的属性名
    event: "handleSearch" //对应的事件名
  },

  data() {
    return {
      style: {
        width: this.width
      },
      searchVal: ""
      //   tags: ["买一送一", "第二杯半价", "全场5折"]
    };
  },

  methods: {
    //点击搜索按钮，搜索事件
    seachHandler() {
      //这里 this.$emit(事件名)  == 父组件件调用是的@事件名，而不是后面的那个方法值
      this.$emit("click", this.searchVal);
    },
    //删除标签
    closeTag(index) {
      this.tags.splice(index, 1);
    },
    selectTag(index) {
      let tag = this.tags[index];
      this.searchVal = tag;
    }
  }
};
</script>

<style  scoped>
.el-tag + .el-tag {
  margin-left: 10px;
  margin-top: 10px;
}
.el-tag:first-of-type {
  margin-left: 101px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>