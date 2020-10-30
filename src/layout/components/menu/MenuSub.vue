<template>
  <div>
    <div v-for="item in menuList">

        <el-submenu :disabled="item.disabled" :index="item.id.toString()" v-if="item.children.length > 0">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.menuName }}</span>
          </template>
          <!--     递归迭代，循环调用生成submenu     -->
          <menu-sub :menu-list="item.children"></menu-sub>
        </el-submenu>
        <menu-item :menu="item" v-else></menu-item>

    </div>
  </div>

</template>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "MenuSub",
  props: {
    menuList: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped>

</style>