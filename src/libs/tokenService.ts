const key = {
  token: "token",
  refresh: "refreshToken",
  role: "role",
};

export const tokenService = {
  //token
  getToken: () =>
    typeof window !== "undefined" && localStorage.getItem(key.token),
  setToken: (token: string) =>
    typeof window !== "undefined" && localStorage.setItem(key.token, token),
  resetToken: () =>
    typeof window !== "undefined" && localStorage.removeItem(key.token),
  //refreshToken
  getRefresh: () =>
    typeof window !== "undefined" && localStorage.getItem(key.refresh),
  setRefresh: (refresh: string) =>
    typeof window !== "undefined" && localStorage.setItem(key.refresh, refresh),
  resetRefresh: () =>
    typeof window !== "undefined" && localStorage.removeItem(key.refresh),
  //role
  getRole: () =>
    typeof window !== "undefined" && localStorage.getItem(key.role),
  setRole: (role: string) =>
    typeof window !== "undefined" && localStorage.setItem(key.role, role),
  resetRole: () =>
    typeof window !== "undefined" && localStorage.removeItem(key.role),
};

export const logout = () => {
  tokenService.resetToken();
  tokenService.resetRefresh();
  tokenService.resetRole();
};
