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
  getMyOrders: async () => {
    const response = await sendApi.get("/users/orders");
    return response.data;
  },
  getMyLikes: async (page: number) => {
    const response = await sendApi.get(`/users/orders/like?page=${page}`);
    return response.data;
  },
};
