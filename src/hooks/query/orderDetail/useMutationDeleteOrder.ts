import { useCallback } from "react";
import { useMutation } from "react-query";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";
import { useRouter } from "next/router";

export const useMutationDeleteOrder = (id: number) => {
  const router = useRouter();
  const load = useCallback(async () => {
    const response = await OrderDetailApi.deleteOrder(id);
    return response;
  }, [id]);

  return useMutation("deleteOrder", load, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
      router.back();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
