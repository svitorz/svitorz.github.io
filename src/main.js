import { createApp } from "vue";
import "./style.css";
import App from "./AppLayout.vue";
import router from "./routes.js";
createApp(App).use(router).mount("#app");
