import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./style.css";
import App from "./AppLayout.vue";
import router from "./routes.js";
createApp(App).use(router).mount("#app");
