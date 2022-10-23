<template>
  <header class="py-4">
    <div>
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
