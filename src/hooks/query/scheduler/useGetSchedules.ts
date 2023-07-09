import { useCallback } from "react";
import { useQuery } from "react-query";
import { SchedulerApi } from "../../../apis/controller/scheduler.api";

export interface ScheduleType {
  id : string,
  name: string;
  start: string;
  end: string;
  title: string;
  color: string;
}

export const useQueryGetSchedules = () => {
  const load = useCallback(async () => {
    try {
      const response = await SchedulerApi.loadSchedules();
      const schedulesRes: ScheduleType[] = response.map((item: ScheduleType) => ({
        id : item.id,
        name: item.name,
        start: item.start,
        end: item.end,
        title: item.title,
        color: item.color,
      }));

      return schedulesRes;
    } catch (error) {
      throw new Error("Failed to load schedules");
    }
  }, []);

  return useQuery<ScheduleType[]>(["getSchedules"], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};

