import { isLogin } from "./../../../recoil/userInfo";
import { useCallback } from "react";
import Router from "next/router";
import { useQuery } from "react-query";
import { UserAPI } from "../../../apis/controller/user.api";
import { logout, tokenService } from "../../../libs/tokenService";
import { pathName } from "../../../config/pathName";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInformation } from "../../../recoil/userInfo";

interface ResponseType {
  email: string;
  name: string;
  picture: string;
}

export const useQueryGetUserInfo = () => {
  const setIsLoginState = useSetRecoilState(isLogin);
  const [userInfo, setUserInfo] = useRecoilState(userInformation);
  const load = useCallback(async () => {
    const response = await UserAPI.getUserInfo();
    return response;
  }, []);

  return useQuery<ResponseType>(["getUserInfo"], load, {
    onSuccess: (data) => {
      if (!Router.asPath.includes("/admin")) {
        setIsLoginState(tokenService.getToken() !== null);
        if (tokenService.getToken() !== null) {
          if (tokenService.getRole() === "ADMIN") {
            logout();
            localStorage.setItem("prevPath", Router.asPath);
          } else {
            userInfo.picture === "" &&
              setUserInfo({
                email: data.email,
                name: data.name,
                picture: data.picture,
              });
          }
        }
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};
