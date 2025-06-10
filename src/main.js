import { createApp } from "vue";

import routes from "./routes/index.js";

import "./style.css";

import App from "./App.vue";

const redirectPath = sessionStorage.getItem("redirect");
if (redirectPath) {
  // Limpa o item para que não redirecione novamente sem motivo
  sessionStorage.removeItem("redirect");
  // Usa o router para navegar para a rota que o usuário queria originalmente
  router.push(redirectPath);
}

createApp(App).use(routes).mount("#app");
