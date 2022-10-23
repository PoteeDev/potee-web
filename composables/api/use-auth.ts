import decode from "jwt-decode";

const AUTH_LOCAL_STORAGE_KEY = "AUTH:USER";
const localStorageUser = window.localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);

const user: AuthState["user"] = localStorageUser
  ? JSON.parse(localStorageUser)
  : undefined;

const authState = reactive<AuthState>({
  isAuthenticated: !!user,
  user,
  error: undefined,
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
  error?: Error;
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

  authState.isAuthenticated = true;
}

export function useAuth() {
  const apifetch = $fetch.create({ baseURL: "/api" });

  async function loginWithPassword(body: LoginWithPassword) {
    const loginResponse = await apifetch<CredentialsResponse>("/auth/login", {
      body,
      method: "POST",
    });

    credentialsResponseSave(loginResponse);

    return authState;
  }

  async function refresh() {
    const refreshResponse = await apifetch<CredentialsResponse>(
      "/auth/refresh",
      {
        body: { refresh_token: authState.user?.refreshToken },
        method: "POST",
      }
    );

    credentialsResponseSave(refreshResponse);

    return authState;
  }

  return { loginWithPassword, authState, refresh };
}

export function useAuthState() {
  return authState;
}
