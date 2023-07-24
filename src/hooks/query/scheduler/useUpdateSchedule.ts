import { useMutation, useQueryClient } from 'react-query';
import { SchedulerApi } from '../../../apis/controller/scheduler.api';
import { ScheduleType } from './useGetSchedules';

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();

  const updateScheduleMutation = useMutation((scheduleData: ScheduleType) =>
    SchedulerApi.updateSchedule(scheduleData.id, scheduleData) 
  );

  const updateSchedule = async (scheduleData: ScheduleType) => {
    try {
      await updateScheduleMutation.mutateAsync(scheduleData);
      queryClient.invalidateQueries('schedules');
    } catch (error) {
      throw new Error('에러');
    }
  };

  return updateSchedule;
};

