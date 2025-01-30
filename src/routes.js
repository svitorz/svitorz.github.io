import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import About from "./About.vue";

const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(), // Usa o modo de histórico do navegador
  routes,
});

export default router;
