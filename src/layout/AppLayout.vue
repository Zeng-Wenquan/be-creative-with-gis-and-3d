<script lang="ts" setup></script>

<template>
  <v-app>
    <v-app-bar title="Be Creative with GIS and 3D"></v-app-bar>
    <v-navigation-drawer expand-on-hover rail>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="My Files"
          value="myfiles"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          title="Starred"
          value="starred"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container max-width="100%" max-height="100%" :style="{ padding: 0 }">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>
