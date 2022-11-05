import axios, { AxiosError } from "axios";
import { useAuth, useAuthState } from "./use-auth";

const apiFetch = axios.create({
  baseURL: "/api",
});

apiFetch.interceptors.request.use((requestConfig) => {
  const authState = useAuthState();
  if (!requestConfig.headers) {
    requestConfig.headers = {};
  }
  requestConfig.headers.Authorization = `Bearer ${authState.user?.accessToken}`;

  return requestConfig;
});

apiFetch.interceptors.response.use(
  (r) => r,
  async (error) => {
    if (error instanceof AxiosError) {
      const auth = useAuth();
      if (!auth.authState.refreshError && error.response?.status === 401) {
        if (auth.authState.user?.refreshToken) {
          auth.authState.refreshError = true;
          try {
            await auth.refresh();
            return error.config
              ? await apiFetch({
                  ...error.config,
                  headers: {
                    ...JSON.parse(JSON.stringify(error.config.headers)),
                  },
                })
              : error;
          } catch (error) {
            if (error instanceof AxiosError && error.response?.status !== 401) {
              return Promise.reject(error);
            }

            delete auth.authState.user;
            auth.authState.isAuthenticated = false;
            await useRouter().push("/login");
          }
        } else {
          delete auth.authState.user;
          await useRouter().push("/login");
        }
      }
    }

    return Promise.reject(error);
  }
);

export { apiFetch };
