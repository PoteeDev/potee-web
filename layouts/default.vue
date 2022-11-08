<template>
  <div class="flex flex-col min-h-screen bg-[#1B1B1B]">
    <Header />
    <div class="layout-max-width h-full">
      <slot />
    </div>
  </div>
  <Toast />
</template>
<script lang="ts">
import { Header } from "../components/layout/";
import Toast from "primevue/toast";

export default defineComponent({ components: { Header, Toast } });
</script>
<style>
.layout-max-width {
  @apply max-w-screen-xl w-full mx-auto px-6;
}

.p-toast .p-toast-message .p-toast-message-content {
  border: 0;
}
</style>
