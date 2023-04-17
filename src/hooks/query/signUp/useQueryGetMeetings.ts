import { useCallback } from "react";
import { useQuery } from "react-query";
import { SignUpApi } from "../../../apis/controller/signUp.api";

export interface ResponseType {
  date: String;
  name: String;
  time: String;
}

export const useQueryGetMeetings = () => {
  const load = useCallback(async () => {
    const response = await SignUpApi.loadMeetings();
    const meetingsRes: ResponseType[] = [];
    response.map((i: ResponseType) => {
      meetingsRes.push({ date: i.date, name: i.name, time: i.time });
    });
    return meetingsRes;
  }, []);

  return useQuery<ResponseType[]>(["getMeetings"], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
