import sendApi from "../sendApi";

export const AdminSignUpAPI = {
  getSignUps: async () => {
    const response = await sendApi.get("/orders");
    return response.data;
  },
  getSignUpDetail: async (id: number) => {
    const response = await sendApi.get(`/orders/${id}`);
    return response.data;
  },
};
