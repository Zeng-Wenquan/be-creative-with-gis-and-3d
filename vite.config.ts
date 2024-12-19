import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import cesium from "vite-plugin-cesium";
import vuetify from "vite-plugin-vuetify";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cesium(), vuetify()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src"),
      },
    ],
  },
});
