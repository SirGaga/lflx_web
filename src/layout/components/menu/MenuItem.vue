<template>
  <div>
      <el-menu-item :disabled="menu.disabled" :index="menu.url" :route="menu.url">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.menuName }}</span>
      </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props:{
    menu: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>

</style>