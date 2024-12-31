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

const emits = defineEmits(["ready"]);

const container = `viewer-${+new Date()}`;

const loaded = ref(false);

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

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

  loaded.value = true;
  emits("ready", viewer);
  if (!isMobile()) {
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [
      Cesium.CameraEventType.WHEEL,
      Cesium.CameraEventType.PINCH
    ];
    // 鼠标右键旋转
    viewer.scene.screenSpaceCameraController.tiltEventTypes = [
      Cesium.CameraEventType.RIGHT_DRAG,
      Cesium.CameraEventType.PINCH
    ];
  }
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
