<script lang="ts" setup>
const props = defineProps({
  height: {
    type: Number,
    default: 45
  },
  backgroundColor: {
    type: String,
    default: "#282828"
  },
  title: {
    type: String,
    default: "Be Creative with GIS and 3D"
  }
});
</script>

<template>
  <header
    class="app-header"
    :style="{ height: `${height}px`, backgroundColor }"
  >
    <span> {{ title }}</span>
  </header>
</template>

<style lang="scss">
.app-header {
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #282828;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
</style>
