import { useMutation, useQueryClient } from 'react-query';
import { SchedulerApi } from '../../../apis/controller/scheduler.api';
import { ScheduleType } from './useGetSchedules';

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();

  const updateScheduleMutation = useMutation((scheduleData: ScheduleType) =>
    SchedulerApi.updateSchedule(scheduleData.id, scheduleData) // id를 문자열로 변환하지 않고 그대로 사용
  );

  const updateSchedule = async (scheduleData: ScheduleType) => {
    try {
      await updateScheduleMutation.mutateAsync(scheduleData);
      queryClient.invalidateQueries('schedules'); // 'schedules'로 invalidateQueries 호출
    } catch (error) {
      throw new Error('에러');
    }
  };

  return updateSchedule;
};

