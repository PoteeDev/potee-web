import { $fetch } from "ohmyfetch";
import { useAuth, useAuthState } from "./use-auth";

export const apiFetch = $fetch.create({
  baseURL: "/api",
  onRequest(fetchContext) {
    const authState = useAuthState();

    if (!fetchContext.options.headers) {
      fetchContext.options.headers = {};
    }

    fetchContext.options.headers = {
      ...fetchContext.options.headers,
      Authorization: `Bearer ${authState.user?.accessToken}`,
    };
  },
  async onResponseError(fetchContext) {
    const auth = useAuth();

    if (fetchContext.response.status === 401) {
      if (auth.authState.user?.refreshToken) {
        try {
          await auth.refresh();
        } catch (error) {
          delete auth.authState.user;
          auth.authState.isAuthenticated = false;
          await useRouter().push("/login");
        }
      } else {
        delete auth.authState.user;
        await useRouter().push("/login");
      }
    }
  },
});
