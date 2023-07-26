import sendApi from "../sendApi";

export const TokenAPI = {
  tokenRefresh: async () => {
    const response = await sendApi.post("/token/refresh", {});
    return response.headers;
  },
};
