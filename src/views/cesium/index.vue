<script lang="ts" setup>
import CesiumMap from "@/components/@cesium/CesiumMap.vue";
import ModelTransform from "@/views/cesium/examples/ModelTransform.vue";
</script>

<template>
  <div class="cesium-app-container">
    <CesiumMap>
      <ModelTransform />
    </CesiumMap>
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
