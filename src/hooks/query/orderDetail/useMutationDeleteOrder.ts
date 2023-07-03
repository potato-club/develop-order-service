import axios from "axios";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useMutationDeleteOrder = (id: number) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.deleteOrder(id);
    return response;
  }, [id]);

  return useMutation("deleteOrder", load, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
