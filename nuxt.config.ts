// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  alias: {
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/style/global.css',
    'primevue/resources/themes/vela-purple/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
})
