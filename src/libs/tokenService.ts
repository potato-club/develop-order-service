const key = {
  token: "token",
  refresh: "refreshToken",
  role: "role",
};

export const tokenService = {
  //token
  getToken: () => localStorage.getItem(key.token),
  setToken: (token: string) => localStorage.setItem(key.token, token),
  resetToken: () => localStorage.removeItem(key.token),
  //refreshToken
  getRefresh: () => localStorage.getItem(key.refresh),
  setRefresh: (refresh: string) => localStorage.setItem(key.refresh, refresh),
  resetRefresh: () => localStorage.removeItem(key.refresh),
  //role
  getRole: () => localStorage.getItem(key.role),
  setRole: (role: string) => localStorage.setItem(key.role, role),
  resetRole: () => localStorage.removeItem(key.role),
};
