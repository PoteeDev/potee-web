<template>
  <div class="underline heading-300">StartPage</div>
</template>
<script lang="ts">
import { useAuthState } from "~~/composables";

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    const authState = useAuthState();
    if (useAuthState().isAuthenticated) next(`/profile/${authState.user?.id}`);
    else next("/login");
  },
});
</script>
<style lang=""></style>
