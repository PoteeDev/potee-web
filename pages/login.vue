<template>
  <div class="w-full h-screen flex items-center justify-center flex-col">
    <LogoLarge />

    <div
      class="w-[32rem] px-10 py-8 flex flex-col items-center bg-neutral-800 rounded-xl gap-8 mb-20"
    >
      <h1 class="heading-500">Sign in to your team account</h1>

      <form
        @submit.prevent="loginSubmit"
        autocomplete="on"
        class="flex gap-5 flex-col w-full"
      >
        <BaseInput
          autocomplete="username"
          class="w-full"
          label="Team name"
          v-model="username"
        />

        <BasePassword
          autocomplete="current-password"
          class="w-full"
          label="Password"
          v-model="password"
        />

        <button
          v-ripple
          :class="[
            'p-button p-component body-700-true !border-0 w-full !rounded-xl !bg-gradient-to-r from-[#1EC9FF] to-[#FF35EA] focus:!shadow-none',
            { 'p-button-loading': isLoadingLoginButton },
          ]"
          label="Log in"
        >
          <span
            v-if="isLoadingLoginButton"
            style="font-size: 1.3rem; font-weight: 600"
            :class="[
              'p-button-icon',
              {
                'p-button-loading-icon pi pi-spinner pi-spin':
                  isLoadingLoginButton,
              },
            ]"
          />

          <span class="p-button-label"> Log in </span>
        </button>

        <div class="body-400-true text-center" v-if="loginError">
          {{ loginError }}
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { BaseInput, BasePassword } from "@/components/base";
import { useAuth, apiFetch } from "@/composables";
import Button from "primevue/button";
import Ripple from "primevue/ripple";

import LogoLarge from "@/components/logo/logo-large.vue";
import { FetchError } from "ohmyfetch";
import { AxiosError } from "axios";

const errors = {
  "invalid credentials": "This user does not exist or the data is invalid",
} as Record<string, any>;

definePageMeta({
  layout: "empty",
});

export default defineComponent({
  components: { Button, LogoLarge, BaseInput, BasePassword },

  setup() {
    const username = ref("");
    const password = ref("");
    const loginError = ref("");

    const isLoadingLoginButton = ref(false);

    const { loginWithPassword } = useAuth();

    async function loginSubmit() {
      try {
        isLoadingLoginButton.value = true;

        const authState = await loginWithPassword({
          username: username.value,
          password: password.value,
        });

        await useRouter().push(`/profile/${authState.user?.id}`);
      } catch (error) {
        if (
          error instanceof AxiosError &&
          typeof error.response?.data?.datail === "string"
        ) {
          loginError.value = errors[error.response.data.datail];
        }
        !loginError.value &&
          (loginError.value = "Login failed, please try again");
      }

      isLoadingLoginButton.value = false;
    }

    return {
      loginSubmit,
      password,
      username,
      loginWithPassword,
      isLoadingLoginButton,
      loginError,
    };
  },
  directives: {
    ripple: Ripple,
  },
});
</script>
<style lang=""></style>
