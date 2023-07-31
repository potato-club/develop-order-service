import sendApi from "../sendApi";

export const MainApi = {
  loadMainRankings: async () => {
    const response = await sendApi.get("/orders/main");
    return response.data;
  },
};
