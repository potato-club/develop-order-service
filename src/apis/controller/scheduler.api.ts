import sendApi from "../sendApi";

export const SchedulerApi = {
  loadSchedules: async () => {
    const response = await sendApi.get("/admin/schedule");
    return response.data;
  }
};
