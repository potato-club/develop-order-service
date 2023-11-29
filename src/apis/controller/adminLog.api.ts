import sendApi from "../sendApi";

export const AdminLogAPI = {
  login: async (data: { adminId: string; adminPw: string }) => {
    const response = await sendApi.post("/admin/login", data);
    return response.data;
  },
};
