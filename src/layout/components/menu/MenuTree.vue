<template>
  <el-aside :width="isCollapse?'60px':'200px'">
    <!--   展开/收起侧边栏   -->
    <div class="toggle_box" @click="changeCollapseState">
      <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <el-menu
        :default-active="activePath"
        class="el-menu el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#1890ff"
        :collapse="isCollapse"
        :collapse-transition="this.collapseTransition"
        :router="true"
    >
      <menu-sub :menu-list="menuList" />
    </el-menu>
  </el-aside>
</template>

<script>
import MenuSub from "./MenuSub";
export default {
  name: "MenuTree",
  components: {
    MenuSub
  },
  data() {
    return {
      isCollapse: false,
      collapseTransition: false,
      activePath:''
    }
  },
  props:{
    menuList: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeCollapseState() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped>
.el-aside {
  background-color: #304156;
  color: #bfcbd9;
}
.toggle_box {
  background-color: #304156;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}

.el-menu {
  border-right: 0px;
}
.el-aside >.el-menu>.el-menu-item:hover
{
  background-color: #263445 !important;
}
.el-submenu__title:focus,.el-submenu__title:hover {
  outline: none;
  background-color: #e8f4ff !important;
}

/*实现了一个溢出处理*/
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>