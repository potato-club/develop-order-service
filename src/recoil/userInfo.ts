import { atom } from "recoil";

export interface UserInfo {
  email: string;
  name: string;
  picture: string;
}

export const isLogin = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const userInformation = atom<UserInfo>({
  key: "userInformation",
  default: { email: "", name: "", picture: "" },
});
