import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
  },
  { path: "/:catchAll(.*)", redirect: "/" }, // fallback
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
