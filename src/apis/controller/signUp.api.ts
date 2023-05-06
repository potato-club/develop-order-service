import sendApi from "../sendApi";

export const SignUpApi = {
  registerSignUp: async (data: FormData) => {
    const response = await sendApi.post("/orders", data);
    return response.data;
  },
  loadMeetings: async () => {
    const response = await sendApi.get("/orders/meeting");
    return response.data;
  },
};
