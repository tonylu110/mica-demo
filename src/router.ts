import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Home.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () => import("./pages/Info.vue")
  },
  {
    path: "/fold",
    name: "fold",
    component: () => import("./pages/Fold/Fold.vue"),
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import("./pages/Fold/FoldPage1.vue"),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import("./pages/Fold/FoldPage2.vue"),
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import("./pages/Buttons.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;