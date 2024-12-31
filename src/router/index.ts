import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    redirect: "/cesium",
    children: [
      {
        path: "/cesium",
        component: () => import("@/views/cesium/index.vue")
      },
      {
        path: "/threejs",
        component: () => import("@/views/threejs/index.vue")
      },
      {
        path: "/babylonjs",
        component: () => import("@/views/babylonjs/index.vue")
      },
      {
        path: "/leaflet",
        component: () => import("@/views/leaflet/index.vue")
      },
      {
        path: "/maplibregl",
        component: () => import("@/views/maplibregl/index.vue")
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
