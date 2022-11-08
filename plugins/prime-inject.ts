import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, { ripple: true, inputStyle: "filled" });
  nuxt.vueApp.use(ToastService)
  return {
    provide: {
      toast: nuxt.vueApp.config.globalProperties.$toast
    }
  }
});
