import { atom } from "recoil";

export const inquiryLog = atom<any[]>({
  key: "atomInquiryLog",
  default: [],
});
