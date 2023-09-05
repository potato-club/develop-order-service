import sendApi from "../sendApi";

export const AdminSignUpAPI = {
  getSignUps: async (isCheck: boolean) => {
    const response = await sendApi.get("/orders", { check: isCheck });
    return response.data;
  },
  getSignUpDetail: async (id: number) => {
    const response = await sendApi.get(`/orders/${id}`);
    return response.data;
  },
  checkSignUp: async (id: number) => {
    const response = await sendApi.put(`/orders/${id}/checked`);
    return response.data;
  },
};
