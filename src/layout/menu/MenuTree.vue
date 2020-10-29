<template>
  <el-aside :width="isCollapse?'60px':'200px'">
    <!--   展开/收起侧边栏   -->
    <div class="toggle_box" @click="changeCollapseState">
      <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <el-menu
        default-active="2"
        class="el-menu el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#1890ff"
        :collapse="isCollapse"
        collapse-transition="false"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-location"></i>
          <span>用户列表</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">部门管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
name: "MenuTree",
  data() {
    return {
      isCollapse:false
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
</style>