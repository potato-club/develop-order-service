import { QueryClient, useMutation } from "react-query";
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
  id: number;
  getModalState: (modalState: modalStateTypes) => void;
}) => {
  const queryClient = new QueryClient();

  return useMutation(
    "putStarRatings",
    (newRating: number) =>
      axios.put(
        `https://www.developorderservice.store/orders/detail/${id}/rating`,
        {
          rating: newRating,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      ),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("getOrderDetail");
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
    }
  );
};
