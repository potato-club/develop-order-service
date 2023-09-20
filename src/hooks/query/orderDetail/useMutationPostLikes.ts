import { useCallback } from "react";
import { useQueryClient, useMutation } from "react-query";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";

export const useMutationPostLikes = (
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void,
  id?: number
) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.postLikes(id);
    return response;
  }, [id]);
  const queryClient = useQueryClient();

  return useMutation("postLikes", load, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getOrderDetail"] });
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
