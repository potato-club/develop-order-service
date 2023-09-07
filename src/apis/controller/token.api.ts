import sendApi from "../sendApi";

export const TokenAPI = {
  tokenRefresh: async () => {
    const response = await sendApi.get("/token/refresh");
    return response.headers;
  },
};
