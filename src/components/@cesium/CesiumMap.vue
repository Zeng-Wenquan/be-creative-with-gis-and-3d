<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import * as Cesium from "cesium";
import { defaultViewerOption } from "@/utils/constant";

const props = defineProps({
  options: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  }
});

const container = `viewer-${+new Date()}`;
const viewObj: any = {};

const loaded = ref(false);

const init = async () => {
  const viewer = new Cesium.Viewer(container, {
    ...(defaultViewerOption as any),
    baseLayer: new Cesium.ImageryLayer(
      // @ts-ignore
      await Cesium.SingleTileImageryProvider.fromUrl(
        "./images/GlobalBkLayer1.jpg"
      )
    ),
    ...props.options
  });

  viewObj.viewer = viewer;

  loaded.value = true;
};

onMounted(() => {
  init();
});
</script>

<template>
  <div
    :id="container"
    class="cesium-container"
    :style="{ height: props.height, width: props.width }"
  ></div>
  <div
    class="map-contents"
    v-if="loaded"
    :style="{ height: props.height, width: props.width }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.map-contents {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  color: #fff;
}
</style>
