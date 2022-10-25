<template>
  <header class="py-4 bg-[#1B1B1B]">
    <div class="layout-max-width">
      <HeaderIcon />
    </div>
  </header>
</template>

<script lang="ts">
import HeaderIcon from "./header-icon.vue";

export default defineComponent({
  name: "Header",
  components: {
    HeaderIcon,
  },
});
</script>
<style lang=""></style>
