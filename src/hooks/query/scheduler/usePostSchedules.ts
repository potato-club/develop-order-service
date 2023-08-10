import { SchedulerApi } from "../../../apis/controller/scheduler.api";
import { ScheduleType } from "../../../apis/controller/scheduler.api.type";

export const createSchedule = async (schedule: ScheduleType) => {
    try {
      const response = await SchedulerApi.createSchedule(schedule);
      // 필요한 대로 응답 처리
      console.log("일정이 생성되었습니다:", response);
      // 필요하다면 생성된 일정 데이터를 반환할 수 있습니다
      return response;
    } catch (error) {
      console.error("일정 생성에 실패하였습니다:", error);  
      // 필요한 대로 오류 처리
      throw new Error("일정 생성에 실패하였습니다");
    }
  };
  
  