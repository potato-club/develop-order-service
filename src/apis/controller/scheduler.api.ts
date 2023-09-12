
import sendApi from "../sendApi";
import { SchedulePostType, ScheduleType } from "./scheduler.api.type";

export const SchedulerApi = {
  loadSchedules: async () => {
    const response = await sendApi.get("/admin/schedule");
    return response.data;
  },
  createSchedule: async (scheduleData: ScheduleType) => {
    const response = await sendApi.post(
      "/admin/schedule/register",
      scheduleData
    );
    return response.data;
  },
  deleteSchedule: async (id: number) => {
    const response = await sendApi.delete(`/admin/schedule?AdminScheduleId=${id}`);
    return response.data;
  },

  


};
