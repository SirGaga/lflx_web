<template>
  <div class="left_box">
    <slot name="sys_icon"></slot>
    <slot name="sys_name"></slot>
  </div>
</template>

<script>
export default {
name: "HeaderLeft"
}
</script>

<style scoped>
.left_box {
  display: flex;
  width: 200px;
  align-items: center;
  background: #2b2f3a;
}
</style>