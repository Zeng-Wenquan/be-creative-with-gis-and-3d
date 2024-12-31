<script lang="ts" setup>
import { provide } from "vue";
import { Viewer } from "cesium";
import CesiumMap from "@/components/@cesium/CesiumMap.vue";
import ModelTransform from "@/views/cesium/examples/ModelTransform.vue";

const viewerObj: { viewer?: Viewer | null } = {};

const onReady = (viewer: Viewer) => {
  viewerObj.viewer = viewer;
};

provide("viewerObj", viewerObj);
</script>

<template>
  <div class="cesium-app-container">
    <CesiumMap @ready="onReady">
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
