import sendApi from "../sendApi";

export const OrderDetailApi = {
  getOrderDetail: async (id?: string | string[]) => {
    const response = await sendApi.get(`orders/detail/${id}`);

    return response.data;
  },

  putStarRating: async (
    newRating: {
      rating: number;
    },
    id?: number
  ) => {
    const response = await sendApi.put(`orders/detail/${id}/rating`, newRating);

    return response;
  },

  deleteOrder: async (id?: number) => {
    const response = await sendApi.delete(`orders/${id}`);

    return response;
  },

  postLikes: async (id?: number) => {
    const response = await sendApi.post(
      //
      `orders/detail/${id}/likes`,
      {}
    );

    return response;
  },
};
