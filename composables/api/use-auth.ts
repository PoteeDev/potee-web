import axios from "axios";
import decode from "jwt-decode";

const AUTH_LOCAL_STORAGE_KEY = "AUTH:USER";
const localStorageUser = window.localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);

const user: AuthState["user"] = localStorageUser
  ? JSON.parse(localStorageUser)
  : undefined;

const authState = reactive<AuthState>({
  isAuthenticated: !!user,
  user,
  refreshError: false,
});

interface DecodeToken {
  user_id: string;
  exp: number;
  access_uuid: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user?: {
    id: string;
    accessToken: string;
    refreshToken: string;
  };
  refreshError: boolean;
}

interface LoginWithPassword {
  username: string;
  password: string;
}

interface CredentialsResponse {
  access_token: string;
  expires_at: number;
  refresh_token: string;
}

function decodeJwtToken<T>(token: string) {
  return decode<T>(token);
}

function credentialsResponseSave(credentialsResponse: CredentialsResponse) {
  const { user_id: id } = decodeJwtToken<DecodeToken>(
    credentialsResponse.access_token
  );

  authState.user = {
    id,
    accessToken: credentialsResponse.access_token,
    refreshToken: credentialsResponse.refresh_token,
  };

  window.localStorage.setItem(
    AUTH_LOCAL_STORAGE_KEY,
    JSON.stringify(authState.user)
  );

  authState.refreshError = false;
  authState.isAuthenticated = true;
}

export function useAuth() {
  const baseAxios = axios.create({ baseURL: "/api" });

  async function loginWithPassword(body: LoginWithPassword) {
    const { data } = await baseAxios.post<CredentialsResponse>(
      "/auth/login",
      body
    );

    credentialsResponseSave(data);

    return authState;
  }

  async function refresh() {
    const { data } = await baseAxios.post<CredentialsResponse>(
      "/auth/refresh",
      {
        refresh_token: authState.user?.refreshToken,
      }
    );

    credentialsResponseSave(data);

    return authState;
  }

  async function logout() {
    try {
      await baseAxios.post(
       "/auth/logout",
       {}, {headers: {'Authorization': `Bearer ${authState.user?.accessToken}`}}
     );
    } catch (error) {
    }

    window.localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)

    authState.user = undefined
    authState.refreshError = false;
    authState.isAuthenticated = false;

  }

  return { loginWithPassword, authState, refresh, logout };
}

export function useAuthState() {
  return authState;
}
