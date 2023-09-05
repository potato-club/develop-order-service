import { useCallback } from "react";
import { useQueryClient, useMutation } from "react-query";
import { AdminSignUpAPI } from "../../../apis/controller/adminSignUp.api";
import Router from "next/router";

export const useMutationPutCheckSignUp = (id: number) => {
  const load = useCallback(async () => {
    const response = await AdminSignUpAPI.checkSignUp(id);
    return response;
  }, [id]);
  const queryClient = useQueryClient();

  return useMutation("", load, {
    onSuccess: (data) => {
      Router.back();
    },
    onError: (error: any) => {
      console.log("useMutationPutCheckSignUp 실패");
    },
  });
};
