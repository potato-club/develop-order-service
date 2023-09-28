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
  id: number
) => {
  const load = useCallback(async () => {
    const response = await OrderDetailApi.postLikes(id);

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response;
  }, [id]);
  const queryClient = useQueryClient();

  return useMutation("postLikes", load, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
      queryClient.invalidateQueries({ queryKey: ["getOrderDetail"] });
    },
    onError: (error) => {
      getModalState({
        modalRole: "likeMyOrder",
        state: true,
        text: "자신의 발주에 좋아요를 눌렀거나 알 수 없는 이유로 인해 에러가 발생했습니다.",
        onClickConfirmButton: () => {},
      });
      // console.log(error.response.data.code);
    },
  });
};
