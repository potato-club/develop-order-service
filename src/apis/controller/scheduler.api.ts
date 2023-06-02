import sendApi from "../sendApi";

export const SchedulerApi = {
  loadSchedules: async () => {
    const response = await sendApi.get("/admin/info");
    return response.data;
  }
};
