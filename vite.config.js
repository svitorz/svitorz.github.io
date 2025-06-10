import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      // sempre use path.resolve para evitar problemas de path
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
