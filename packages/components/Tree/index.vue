<!--
 * @Author: your name
 * @Date: 2020-06-13 14:35:09
 * @LastEditTime: 2020-06-13 23:41:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\vue_ui\src\components\tree\index.vue
--> 
<template>
  <div>
    <!-- 使用render-content指定渲染函数 -->
    <el-tree :data="result" :render-content="renderContent" class="pb-tree">
    </el-tree>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    data: {
      type: Array,
      default: () => {} //默认值设为空数组
    },
    fileOpts: Array, //文件操作
    folderOpts: Array, //文件夹操作
    delete: Function //删除文件
  },

  mounted() {
    this.fetchData();
  },

  data() {
    return {
      result: [],
      currentId: 0,
      currentContent: ""
    };
  },

  methods: {
    fetchData() {
      //子组件不是对父组件传来的值直接进行修改
      let treeData = _.cloneDeep(this.data); //克隆一份数据
      let arrData = treeData;

      //把偏平的数据变成有层级的数据
      //   形成 [{1，｛｝}]
      let data = arrData.reduce((d, current) => {
        current["label"] = current["name"];
        d[current["id"]] = current;
        return d;
      }, []);

      let result = arrData.reduce((arr, current) => {
        let pid = current.pid;
        let parent = data[pid];
        if (parent) {
          //如果有父类，说明该元素是子类
          //则把当前元素作为子类，添加到父类里的children集合中
          //   parent.children.push(current);
          parent.children
            ? parent.children.push(current)
            : (parent.children = [current]);
        } else {
          //没有，则说明他就是一个父类
          arr.push(current);
        }
        return arr; //把父类元素返回出去
      }, []);
      this.result = result;
    },

    isParent(data) {
      return !!data.children;
    },

    handleCommand(data, txt) {
      if (txt === "rm") {
        this.deleteFile(data);
      } else if (txt === "rn") {
        this.rename(data);
      }
    },

    //删除数据
    remove(id) {
      let list = _.cloneDeep(this.result);
      this.result = list.filter(i => {
        return i.id !== id;
      });
    },

    deleteFile(data) {
      this.$confirm(`此操作将永久删除${data.name}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //删除数据

          //判断用户是否自定义了删除方法
          console.log("删除成功");
          this.delete
            ? this.delete(data)
                .then(() => {
                  this.remove(data.id);
                })
                .catch(error => {
                  console.log(error);
                })
            : this.remove(data.id, this.result);

          //删除元素后，要告诉父元素要同步数据
          this.$emit("update:data", this.result);

          //删除后的消息提示
          this.$message({
            type: "success",
            message: "删除成功!",
            duration: 1000
          });
        })
        .catch(error => {
          console.log(error);
          this.$message({
            type: "info",
            message: "已取消删除",
            duration: 1000
          });
        });
    },

    rename(data) {
      console.log("文件重命名", data);
      this.currentId = data.id;
      this.currentContent = data.name;
    },

    blur(data) {
      let list = _.cloneDeep(this.data);
      let item = list.find(l => {
        return l.id === data.id;
      });

      item.name = this.currentContent;
      this.currentId = 0;
      //通知父组件
      this.$emit("update:data", list);
    },

    handleInput(val) {
      this.currentContent = val;
    },

    renderContent(h, { node, data, store }) {
      //使用jsx语法

      let list = this.isParent(data) ? this.folderOpts : this.fileOpts;
      //
      return (
        <div class="tree-item" style="width:100%">
          {this.isParent(data) ? (
            node.expanded ? (
              <i class="pb-icon el-icon-folder"></i>
            ) : (
              <i class="pb-icon el-icon-folder-opened"></i>
            )
          ) : (
            <i class="pb-icon el-icon-document"></i>
          )}

          <el-dropdown
            placement="bottom-end"
            on-command={this.handleCommand.bind(this, data)}
          >
            <span class="el-dropdown-link">
              {this.currentId === data.id ? (
                <el-input
                  value={this.currentContent}
                  on-blur={this.blur.bind(this, data)}
                  on-input={this.handleInput}
                ></el-input>
              ) : (
                node.label
              )}

              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              {list.map(item => (
                <el-dropdown-item command={item.txt}>
                  {item.value}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      );
    }
  },

  watch: {
    //监听data属性
    data() {
      this.fetchData();
    }
  }
};
</script>

<style  >
/* .el-dropdown .el-icon--right {
    margin-left: 129px;
  } */

.pb-tree .el-tree-node {
  margin-top: 24px;
  margin-bottom: 5px;
}

.pb-tree .el-icon--right {
  margin-left: 133px;
}

.pb-tree .el-dropdown {
  font-size: 28px;
}

.pb-tree .pb-icon {
  font-size: 28px;
}
</style>