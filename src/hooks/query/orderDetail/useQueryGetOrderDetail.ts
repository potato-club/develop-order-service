import { useQuery } from "react-query";
import { useCallback } from "react";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useQueryGetOrderDetail = (id: string | string[] | undefined) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.getOrderDetail(id);
    return response;
  }, [id]);

  return useQuery("getOrderDetail", load, {
    enabled: !!id,

    onSuccess: (data) => {
      console.log("onSuccess", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
