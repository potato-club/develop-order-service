import { useCallback } from "react";
import { useQuery } from "react-query";
import { SchedulerApi } from "../../../apis/controller/scheduler.api";

export interface ScheduleType {
  name: string;
  start: string;
  end: string;
  title: string;
  color: string;
}

export const useQueryGetSchedules = () => {
  const load = useCallback(async () => {
    const response = await SchedulerApi.loadSchedules();
    const schedulesRes: ScheduleType[]
     = response.map((item: ScheduleType) => ({
      name: item.name,
      start: item.start,
      end: item.end,
      title: item.title,
      color: item.color,
    }));
    return schedulesRes;
  }, []);

  return useQuery<ScheduleType[]>(["getSchedules"], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
