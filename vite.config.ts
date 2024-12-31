import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import cesium from "vite-plugin-cesium";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src")
      }
    ]
  },
  server: {
    host: true
  }
});
