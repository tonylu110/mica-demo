import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Home.vue"),
    meta: {
      index: 0
    }
  },
  {
    path: "/info",
    name: "info",
    component: () => import("./pages/Info.vue"),
    meta: {
      index: 0
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;