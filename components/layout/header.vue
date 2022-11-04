<template>
  <header class="py-4 bg-[#282828]">
    <div class="layout-max-width flex justify-between items-center">
      <HeaderIcon />
      <div v-if="user" class="flex items-center gap-2">
        <nav>
          <ul class="flex gap-4">
            <li>
              <nuxt-link
                class="flex gap-2 items-center"
                :to="`/profile/${user.id}`"
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.62921 0.466794C4.83279 1.2974 3.89434 2.90615 3.89434 5.15485C3.89434 8.30653 6.53466 10.6473 9.46513 10.0936C12.487 9.52267 14.1725 5.77826 12.7811 2.72729C12.212 1.47941 11.6311 0.920257 10.3398 0.376836C9.07991 -0.153208 7.9086 -0.124884 6.62921 0.466794ZM5.84782 12.9272C5.13154 13.1034 3.84225 13.5721 2.98272 13.9686C0.298388 15.2079 -0.663764 16.6084 0.463782 17.6359C0.88417 18.0191 1.83981 18.07 8.628 18.07C15.7452 18.07 16.3479 18.0343 16.7469 17.5903C17.7135 16.515 16.9076 15.3018 14.3829 14.0311C11.6957 12.6785 8.52616 12.2686 5.84782 12.9272Z"
                    fill="white"
                  />
                </svg>

                Profile
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="flex gap-2 items-center" :to="`/scoreboard`">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.146438 1.76707C0.30901 3.72691 0.917597 5.26732 2.5103 7.74975C3.07496 8.62977 3.67337 9.73092 3.83991 10.197C4.10772 10.946 4.24646 11.0442 5.03822 11.0442C5.86026 11.0442 6.01291 11.1679 6.89749 12.5502L7.86126 14.0562H10H12.1387L13.1025 12.5502C13.9871 11.1679 14.1397 11.0442 14.9618 11.0442C15.7535 11.0442 15.8923 10.946 16.1601 10.197C16.3266 9.73092 16.925 8.62977 17.4897 7.74975C19.0824 5.26732 19.691 3.72691 19.8536 1.76707L20 0H10H0L0.146438 1.76707ZM4.48672 4.47866C4.64433 5.83735 4.84289 7.16466 4.92777 7.42796C5.04542 7.79267 4.96078 7.75728 4.5721 7.27912C3.85331 6.39483 2.58526 3.79393 2.3996 2.8238C2.24497 2.01481 2.25168 2.00803 3.22189 2.00803H4.20005L4.48672 4.47866ZM17.6004 2.8238C17.4147 3.79393 16.1467 6.39483 15.4279 7.27912C15.0479 7.74649 14.9566 7.78614 15.0697 7.43449C15.1534 7.1747 15.347 5.84739 15.5001 4.48519L15.7786 2.00803H16.7674C17.7496 2.00803 17.7553 2.01355 17.6004 2.8238ZM5.03599 17.0683V18.0723H10H14.964V17.0683V16.0643H10H5.03599V17.0683Z"
                    fill="#B0B0B0"
                  />
                </svg>

                Scoreboard
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <Divider layout="vertical" />
        <div class="flex items-center gap-4">
          {{ user?.id }}
          <Button
            :loading="isLoadingLogoutButton"
            class="p-button-sm"
            @click="logout"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { useAuth, useAuthState } from "~~/composables";
import HeaderIcon from "./header-icon.vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
export default defineComponent({
  name: "Header",
  components: {
    HeaderIcon,
    Button,
    Divider,
  },
  setup() {
    const user = useAuthState().user;
    const isLoadingLogoutButton = ref(false);
    async function logout() {
      isLoadingLogoutButton.value = true;
      await useAuth().logout();
      isLoadingLogoutButton.value = false;

      await useRouter().push("/login");
    }

    return { user, logout, isLoadingLogoutButton };
  },
});
</script>
<style scoped>
nav .router-link-active {
  color: white;
}

nav .router-link-active svg {
  fill: white;
}

nav .router-link-active svg path {
  fill: white;
}

nav a {
  color: #b0b0b0;
  cursor: pointer;
}

nav a svg {
  fill: #b0b0b0;
}
nav a svg path {
  fill: #b0b0b0;
}
</style>
