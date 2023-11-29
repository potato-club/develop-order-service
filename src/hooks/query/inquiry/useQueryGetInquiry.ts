import { useCallback } from "react";
import { useQuery } from "react-query";
import { sendApi } from "../../../apis";

interface Question {
  requestKey: string;
  responseKey: string;
}

export const useInquiry = () => {
  const loadQuestions = useCallback(async () => {
    const request = await sendApi.get("/inquiry");
    return request.data;
  }, []);

  const loadResponse = useCallback(async (responseKey: string) => {
    const response = await sendApi.get(`/inquiry?option=${responseKey}`);
    return response.data;
  }, []);

  return {
    questions: useQuery("questions", loadQuestions),
    loadResponse,
  };
};
