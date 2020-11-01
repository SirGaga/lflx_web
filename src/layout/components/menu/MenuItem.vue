<template>
  <div>
      <el-menu-item @click="savePath(menu.url)" :disabled="menu.disabled" :index="menu.url" :route="menu.url">
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
  },
  methods: {
    savePath(path){
      window.sessionStorage.setItem('activePath',path);
      this.activePath = path
    }
  }
}
</script>

<style scoped>

</style>