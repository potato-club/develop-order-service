import { useCallback } from "react";
import { useMutation } from "react-query";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useMutationPostLikes = (
  id: number,
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void
) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.postLikes(id);
    return response;
  }, [id]);

  return useMutation("postLikes", load, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
    },
    onError: (error: any) => {
      getModalState({
        modalRole: "likeMyOrder",
        state: true,
        text: "자신의 발주는 추천할 수 없습니다.",
        onClickConfirmButton: () => {},
      });
      console.log(error);
    },
  });
};
