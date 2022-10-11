import PrimeVue from 'primevue/config';
import Button from 'primevue/button'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, {ripple: true, inputStyle: 'filled'})
  nuxt.vueApp.component('Button', Button)
})