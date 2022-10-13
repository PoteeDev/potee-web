<template>
  <div class="w-full h-screen flex items-center justify-center flex-col">
    <LogoLarge />

    <div
      class="w-[32rem] px-10 py-8 flex flex-col items-center bg-neutral-800 rounded-xl gap-8 mb-20"
    >
      <h1 class="heading-500">Sign in to your team account</h1>

      <div class="flex gap-5 flex-col w-full">
        <BaseInput class="w-full" label="Team name" v-model="login" />

        <BasePassword class="w-full" label="Password" v-model="password" />
      </div>

      <Button
        class="body-700-true !border-0 w-full !rounded-xl !bg-gradient-to-r from-[#1EC9FF] to-[#FF35EA] focus:!shadow-none"
        label="Log in"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "primevue/button";

definePageMeta({
  layout: "empty",
});

export default defineComponent({
  components: { Button },
  setup() {
    const login = ref("");
    const password = ref("");

    return { password, login };
  },
});
</script>
<style lang=""></style>
