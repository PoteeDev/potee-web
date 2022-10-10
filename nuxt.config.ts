// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  alias: {
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  },
  modules: ['@nuxtjs/tailwindcss']
})
