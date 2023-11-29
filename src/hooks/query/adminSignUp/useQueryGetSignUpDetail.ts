import { FieldErrors } from "react-hook-form";
import { useCallback } from "react";
import { useQuery } from "react-query";
import { AdminSignUpAPI } from "../../../apis/controller/adminSignUp.api";

export interface ResponseType {
  database: boolean;
  email: string;
  etc: string;
  hotLine: string;
  login: boolean;
  mainColor: string[];
  meeting: string;
  name: string;
  owner: "COMPANY" | "PERSONAL" | "PUBLIC";
  page: number;
  purpose: string;
  siteName: string;
  subColor: string[];
  subLine: string;
  files: { fileName: string; id: number; s3Url: string }[];
}

export const useQueryGetSignUpDetail = (id: number) => {
  const load = useCallback(async () => {
    const response = await AdminSignUpAPI.getSignUpDetail(id);
    const signUpsRes: ResponseType = {
      database: response.database,
      email: response.email,
      etc: response.etc,
      hotLine: response.hotLine,
      login: response.login,
      mainColor: response.mainColor,
      meeting: response.meeting,
      name: response.name,
      owner: response.owner,
      page: response.page,
      purpose: response.purpose,
      siteName: response.siteName,
      subColor: response.subColor,
      subLine: response.subLine,
      files: response.files,
    };
    return signUpsRes;
  }, []);

  return useQuery<ResponseType>(["getSignUpDetail"], load, {
    onError: (e) => {},
  });
};
