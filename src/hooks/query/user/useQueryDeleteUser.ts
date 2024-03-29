import { useCallback } from "react";
import { useMutation } from "react-query";
import Router from "next/router";
import { UserAPI } from "../../../apis/controller/user.api";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../../../recoil/userInfo";
import { pathName } from "../../../config/pathName";
import { logout, tokenService } from "../../../libs/tokenService";

export const useQueryDeleteUser = (failFunc: (error: string) => void) => {
  const setIsLoginState = useSetRecoilState(isLogin);
  const load = useCallback(async () => {
    const response = await UserAPI.withdrawal();
    return response;
  }, []);

  return useMutation("deleteUser", load, {
    onSuccess: () => {
      logout();
      setIsLoginState(false);
      Router.push(pathName.MAIN);
    },
    onError: (error) => {
      failFunc(`${error}`);
    },
  });
};
