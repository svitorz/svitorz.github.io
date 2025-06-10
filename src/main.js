import { createApp } from "vue";

import routes from "./routes/index.js";

import "./style.css";

import App from "./App.vue";

createApp(App).use(routes).mount("#app");
