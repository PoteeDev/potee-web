import PrimeVue from 'primevue/config';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, {ripple: true, inputStyle: 'filled'})
})