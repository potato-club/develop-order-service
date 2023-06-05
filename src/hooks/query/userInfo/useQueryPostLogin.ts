import { AdminLogAPI } from "../../../apis/controller/adminLog.api";
import { useCallback } from "react";
import { useMutation } from "react-query";

export const useQueryPostLogin = (
  successFunc: (data: { accessToken: string; refreshToken: string }) => void,
  failFunc: () => void
) => {
  const register = useCallback(
    async (data: { adminId: string; adminPw: string }) => {
      console.log(data);

      const response = await AdminLogAPI.login(data);
      return response;
    },
    []
  );

  return useMutation(register, {
    onSuccess: (e) => {
      successFunc(e);
    },
    onError: () => {
      failFunc();
    },
  });
};
