<template>
  <el-container class="main_container">
    <!--  头部布局  -->
    <el-header>
      <!--   logo和项目名称   -->
      <div class="left_box">
        <img src="~assets/logo.png">
        <span>后台管理系统</span>
      </div>
      <!--   用户登录展示的头像   -->
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

    </el-header>
    <el-container>
      <!--   侧边栏   -->
      <MenuTree/>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuTree from "./menu/MenuTree";
export default {
  name: "Main",
  components: {
    MenuTree
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  color: #5a5e66;
  padding-left: 0px;
  align-items: center;
  font-size: 20px;
}
.el-header>.left_box {
  display: flex;
  width: 200px;
  align-items: center;
  background: #2b2f3a;
}

.el-header>.left_box>img {
  height: 60px;
  width: 60px;
  margin: 0px 0px 0px 5px;
}

.el-header>.left_box>span {
  margin-left: 10px;
  color: #eeeeee;
}

.el-header>.right_box>.el-dropdown>img{
  width: 60px;
  height: 60px;
  border-radius: 5%;
  background: #eeeeee;
  margin: 0px 5px 0px 0px;
  background-size: contain;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}



</style>