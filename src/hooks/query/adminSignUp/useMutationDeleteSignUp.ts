import { useCallback } from "react";
import { useMutation } from "react-query";
import { AdminSignUpAPI } from "../../../apis/controller/adminSignUp.api";
import Router from "next/router";

export const useMutationDeleteSignUp = (id: number) => {
  const load = useCallback(async () => {
    const response = await AdminSignUpAPI.deleteSignUp(id);
    return response;
  }, [id]);

  return useMutation("deleteOrder", load, {
    onSuccess: (data) => {
      Router.back();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
