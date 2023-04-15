import { useCallback } from "react";
import { useMutation } from "react-query";
import { SignUpApi } from "../../../apis/controller/signUp.api";

export const useQueryPostSignUp = () => {
  const register = useCallback(async (data: FormData) => {
    const response = await SignUpApi.registerSignUp(data);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: (e) => {
      console.log(e);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
