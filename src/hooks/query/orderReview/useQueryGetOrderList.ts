import { useQuery } from "react-query";
import { useCallback } from "react";
import { OrderReviewApi } from "../../../apis/controller/orderReview.api";

type contentsFilterType = "onGoing" | "finished" | "myOrder";

export const useQUeryGetOrderList = (
  contentsFilterState: contentsFilterType,
  pageState: number,
  getContentsDataState: (contentsDataState: object) => void
) => {
  const load = useCallback(async () => {
    const response = await OrderReviewApi.getOrderList(
      contentsFilterState,
      pageState
    );
    return response;
  }, [contentsFilterState, pageState]);

  return useQuery("getOrderList", load, {
    onSuccess(data) {
      getContentsDataState(data);
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
