<script lang="ts" setup>
import { reactive } from "vue";
import AppHeader from "./AppHeader.vue";

const state = reactive({
  headerHeight: 45
});
</script>

<template>
  <div class="app-layout">
    <app-header :height="45" />
    <div
      class="main-content-wrapper"
      :style="{ height: `calc(100% - ${state.headerHeight}px)` }"
    >
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.app-layout {
  height: 100vh;
}
</style>
