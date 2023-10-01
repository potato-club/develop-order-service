import { atom } from "recoil";

export const myLikesPageState = atom<number>({
  key: "myLikesPageStateKey",
  default: 1,
});
