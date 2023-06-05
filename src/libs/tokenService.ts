const key = {
  token: "token",
};

export const tokenService = {
  /** ID session */
  getToken: () => localStorage.getItem(key.token),
  setToken: (token: string) => localStorage.setItem(key.token, token),
  resetToken: () => localStorage.setItem(key.token, ""),
};
