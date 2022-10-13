import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, {ripple: true, inputStyle: 'filled'})
  nuxt.vueApp.component('InputText', InputText)
  nuxt.vueApp.component('Password', Password)
})