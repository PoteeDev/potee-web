import { useAuthState } from "~~/composables";

export default defineNuxtRouteMiddleware((to) => {
  const authState = useAuthState();

  if (to.path === "/login" && authState.isAuthenticated) {
    return navigateTo(`/profile/${authState.user?.id}`);
  }

  if (!authState.isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});
