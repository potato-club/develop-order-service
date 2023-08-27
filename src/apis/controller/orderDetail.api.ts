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
    const response = await sendApi.delete(
      `https://www.developorderservice.store/orders/${id}`
    );

    return response;
  },

  postLikes: async (id?: number) => {
    const response = await sendApi.post(
      `https://www.developorderservice.store/orders/detail/${id}/likes`,
      {}
    );

    return response;
  },
};
