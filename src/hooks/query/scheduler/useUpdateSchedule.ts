import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { SchedulerApi } from '../../../apis/controller/scheduler.api';
import { SchedulePostType } from "../../../apis/controller/scheduler.api.type";


export const useUpdateSchedule = () => {
  
  const register = useCallback(async ( data :{id:number, body:SchedulePostType}) => {
    const response = await SchedulerApi.updateSchedule(data.id,data.body)
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: () => {
      
    },
    onError: () => {
      
    },
  });
};