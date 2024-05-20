import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Solutions from "./components/Solutions.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/solutions", component: Solutions },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
