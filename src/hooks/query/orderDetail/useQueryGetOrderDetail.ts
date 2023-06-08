import { useQuery } from "react-query";
import { useCallback } from "react";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useQueryGetOrderDetail = (
  id: string | string[] | undefined,
  getDetailDataState: (detailDataState: any) => void
) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.getOrderDetail(id);
    return response;
  }, [id]);

  return useQuery("getOrderDetail", load, {
    enabled: !!id,
    onSuccess: (data) => {
      console.log("onSuccess", data);
      getDetailDataState(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
