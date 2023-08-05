import sendApi from "../sendApi";

export const UserAPI = {
  withdrawal: async () => {
    const response = await sendApi.delete("/users");
    return response.data;
  },
};
