import sendApi from "../sendApi";

export const OrderDetailApi = {
  getOrderDetail: async (id: string | string[] | undefined) => {
    const response = await sendApi.get(
      `http://localhost:8080/orders/detail/${id}`
    );

    return response.data;
  },
};
