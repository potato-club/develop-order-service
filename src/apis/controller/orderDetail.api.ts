import sendApi from "../sendApi";

export const OrderDetailApi = {
  getOrderDetail: async (id: string | string[] | undefined) => {
    const response = await sendApi.get(`orders/detail/${id}`);

    return response.data;
  },

  putStarRating: async (
    id: number,
    newRating: {
      rating: number;
    }
  ) => {
    const response = await sendApi.put(`orders/detail/${id}/rating`, newRating);

    return response;
  },

  deleteOrder: async (id: number) => {
    const response = await sendApi.delete(
      `https://www.developorderservice.store/orders/${id}`
    );

    return response;
  },
};
