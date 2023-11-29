import { tokenService } from "./../../../libs/tokenService";
import { useQueryClient, useMutation } from "react-query";
import { OrderDetailApi } from "../../../apis/controller/orderDetail.api";
import axios from "axios";

type modalStateTypes = {
  modalRole: string;
  state: boolean;
  text: string;
  onClickConfirmButton: () => void;
};

export const useMutationPutStarRatings = ({
  id,
  getModalState,
}: {
  id?: number;
  getModalState: (modalState: modalStateTypes) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(
    "putStarRatings",
    (newRating: number) =>
      axios.put(
        // `https://www.developorderservice.store/orders/detail/${id}/rating`,
        `http://www.developorderservice.store/orders/detail/${id}/rating`,
        {
          rating: newRating,
        },
        {
          headers: {
            Authorization: tokenService.getToken(),
          },
        }
      ),
    {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        getModalState({
          modalRole: "",
          state: false,
          text: "",
          onClickConfirmButton: () => {},
        });
        queryClient.invalidateQueries("getOrderDetail");
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
    }
  );
};
