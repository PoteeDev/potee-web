// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  alias: {
    style: fileURLToPath(new URL("./assets/style", import.meta.url)),
  },
  modules: ["@nuxtjs/tailwindcss"],
  components: {
    global: false,
  },
  css: [
    "primevue/resources/primevue.css",
    "primevue/resources/themes/arya-purple/theme.css",
    "primeicons/primeicons.css",
    "@/assets/style/global.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost/api/v1",
        changeOrigin: true,
      },
    },
  },
});
