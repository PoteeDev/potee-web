import PrimeVue from "primevue/config";
import { useAuthState } from "~~/composables";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, { ripple: true, inputStyle: "filled" });
});
