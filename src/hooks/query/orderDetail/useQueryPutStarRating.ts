import { useMutation, useQuery } from "react-query";
import { useCallback } from "react";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useQueryPutStarRating = (
  id: number,
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void
) => {
  const load = useCallback(
    async (newRating: number) => {
      const response = await OrderDetailApi.putStarRating(id, {
        rating: newRating,
      });
      return response;
    },
    [id]
  );

  return useMutation("setStarRatings", load, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
    },
    onError: (error: { response: { data: { error: string } } }) => {
      console.log(error);
      getModalState({
        modalRole: "alreadyRated",
        state: true,
        text: error.response.data.error,
        onClickConfirmButton: () => {},
      });
      console.log("onError", error);
    },
  });
};
