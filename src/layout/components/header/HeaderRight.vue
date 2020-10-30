<template>
  <div class="right_box">
    <el-dropdown>
      <img src="~assets/logo.png">
      <!--  下拉菜单  -->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-home">系统首页</el-dropdown-item>
        <el-dropdown-item icon="el-icon-edit" divided>修改信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
name: "HeaderRight"
}
</script>

<style scoped>
.el-dropdown>img{
  width: 60px;
  height: 60px;
  border-radius: 5%;
  background: #eeeeee;
  margin: 0px 5px 0px 0px;
  background-size: contain;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>