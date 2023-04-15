import sendApi from "../sendApi";

export const SignUpApi = {
  registerSignUp: async (data: FormData) => {
    const response = await sendApi.post(`/orders`, data);
    return response.data;
  },
};
