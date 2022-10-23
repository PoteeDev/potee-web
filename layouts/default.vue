<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
<script lang="ts">
import { Header } from "../components/layout/";

export default defineComponent({ components: { Header } });
</script>
<style></style>
