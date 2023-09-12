import sendApi from "../sendApi";

export const UserAPI = {
  getUserInfo: async () => {
    const response = await sendApi.get("/users");
    return response.data;
  },
  withdrawal: async () => {
    const response = await sendApi.delete("/users");
    return response.data;
  },
};
