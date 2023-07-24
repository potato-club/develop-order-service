import { useCallback } from "react";
import { useQuery } from "react-query";
import { AdminSignUpAPI } from "../../../apis/controller/adminSignUp.api";

export interface ResponseType {
  clientName: string;
  createdDate: string;
  id: number;
  purpose: string;
  siteName: string;
}

export const useQueryGetSignUps = (isCheck: boolean) => {
  const load = useCallback(async () => {
    const response = await AdminSignUpAPI.getSignUps(isCheck);
    const signUpsRes: ResponseType[] = [];
    response.content.map((i: ResponseType) => {
      signUpsRes.push({
        clientName: i.clientName,
        createdDate: i.createdDate,
        id: i.id,
        purpose: i.purpose,
        siteName: i.siteName,
      });
    });
    return signUpsRes;
  }, []);

  return useQuery<ResponseType[]>(["getSignUps"], load, {
    onError: (e) => {},
  });
};
