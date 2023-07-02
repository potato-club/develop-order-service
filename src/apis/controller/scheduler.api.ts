import { ScheduleType } from "../../hooks/query/scheduler/useQueryGetSchedules";
import sendApi from "../sendApi";

export const SchedulerApi = {
  loadSchedules: async () => {
    const response = await sendApi.get("/admin/schedule");
    return response.data;
  },
  createSchedule: async (scheduleData: ScheduleType) => {
    const response = await sendApi.post("/admin/schedule/register", scheduleData);
    return response.data;
  }
}