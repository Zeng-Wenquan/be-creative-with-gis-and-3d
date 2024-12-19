<script lang="ts" setup>
import CesiumMap from "@/components/@cesium/CesiumMap.vue";
</script>

<template>
  <div class="cesium-app-container">
    <CesiumMap></CesiumMap>
  </div>
</template>

<style lang="scss">
.cesium-app-container {
  height: 100%;
  position: relative;
  .left {
    width: 360px;
  }
}
</style>
