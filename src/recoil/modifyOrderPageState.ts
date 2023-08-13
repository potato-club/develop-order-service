import { atom } from "recoil";

type contentsFilterType = "onGoing" | "finished";

export const modifyOrderPageState = atom<number>({
  key: "reviewPageState",
  default: 1,
});

export const modifyOrderContentsFilterState = atom<contentsFilterType>({
  key: "reviewContentsFilterState",
  default: "onGoing",
});

export const modifyOrderSortOptionState = atom<string>({
  key: "reviewSortOptionState",
  default: "noSort",
});
