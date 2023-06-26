import sendApi from "../sendApi";

type contentsFilterType = "onGoing" | "finished" | "myOrder";

export const OrderReviewApi = {
  getOrderList: async (
    contentsFilterState: contentsFilterType,
    pageState: number
  ) => {
    let url = `${
      contentsFilterState !== "myOrder" ? "orders/detail" : "users/orders"
    }`;
    const response = await sendApi.reviewGet(
      `${
        url +
        (pageState !== 1 ? "?page=" + pageState : "") +
        (contentsFilterState === "finished" ? "?state=complete" : "")
      }`
    );

    return response.data;
  },
};
