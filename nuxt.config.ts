// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  alias: {
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  },
  modules: ['@nuxtjs/tailwindcss','@vueuse/nuxt',],
  css: [
    'primevue/resources/primevue.css',
    'primevue/resources/themes/arya-purple/theme.css',
    'primeicons/primeicons.css',
    '@/assets/style/global.css',
  ],
  build: {
    transpile: ['primevue']
  }
})
