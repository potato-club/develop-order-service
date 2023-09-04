import { useMutation } from 'react-query';
import { SchedulerApi } from '../../../apis/controller/scheduler.api';

export const useDeleteSchedule = () => {
  const deleteScheduleMutation = useMutation((id: number) =>
    SchedulerApi.deleteSchedule(id)
  );

  const deleteSchedule = async (id: number) => {
    try {
      await deleteScheduleMutation.mutateAsync(id);
    } catch (error) {
      throw new Error('스케줄 삭제 중에 오류가 발생했습니다.');
    }
  };

  return deleteSchedule;
};
