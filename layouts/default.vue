<template>
  <div class="flex flex-col min-h-screen bg-[#1B1B1B]">
    <Header />
    <div class="layout-max-width h-full">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Header } from "../components/layout/";

export default defineComponent({ components: { Header } });
</script>
<style>
.layout-max-width {
  @apply max-w-screen-xl w-full mx-auto px-6;
}
</style>
