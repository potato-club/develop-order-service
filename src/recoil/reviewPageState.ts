import { atom } from "recoil";

type contentsFilterType = "onGoing" | "finished" | "myOrder";

export const reviewPageState = atom<number>({
  key: "reviewPageState",
  default: 1,
});

export const reviewContentsFilterState = atom<contentsFilterType>({
  key: "reviewContentsFilterState",
  default: "onGoing",
});

export const reviewSortOptionState = atom<string>({
  key: "reviewSortOptionState",
  default: "noSort",
});


