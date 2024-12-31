<script setup lang="ts">
import { onMounted, inject } from "vue";
import {
  Viewer,
  Cartesian3,
  Model,
  Transforms,
  Math as CesiumMath
} from "cesium";
import { ModelEdit } from "@/utils/@cesium/ModelEdit";

const viewerObj = inject<{ viewer?: Viewer | null }>("viewerObj");

const addModel = async (viewer: Viewer) => {
  const model = await Model.fromGltfAsync({
    url: "./models/uav.glb",
    modelMatrix: Transforms.eastNorthUpToFixedFrame(
      Cartesian3.fromDegrees(116.397428, 39.90923, 100)
    )
  });

  viewer.scene.primitives.add(model);

  model.readyEvent.addEventListener(() => {
    const modelEdit = new ModelEdit(viewer, model);
  });

  viewer.scene.camera.flyTo({
    destination: Cartesian3.fromDegrees(116.397428, 39.90923, 100)
  });
};

onMounted(() => {
  if (!viewerObj) return;

  const viewer = viewerObj.viewer;

  addModel(viewer!);
});
</script>

<template>
  <div class="model-transform">
    <el-button type="primary">模型变换</el-button>
  </div>
</template>

<style lang="scss">
.model-transform {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
