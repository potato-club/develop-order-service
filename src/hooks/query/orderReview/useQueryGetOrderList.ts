import { useQuery } from "react-query";
import { useCallback } from "react";
import { OrderReviewApi } from "../../../apis/controller/orderReview.api";
import { contentsDataType } from "../../../../pages/orderReview";

type contentsFilterType = "onGoing" | "finished" | "myOrder";

export const useQueryGetOrderList = (
  contentsFilterState: contentsFilterType,
  pageState: number,
  getContentsDataState: (contentsDataState: contentsDataType) => void
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
