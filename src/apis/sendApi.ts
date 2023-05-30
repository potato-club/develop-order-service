import { tokenService } from "../libs/tokenService";
import api from "./api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params?: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? api({
          url: url,
          method: "get",
          params: params,
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "get",
          headers: {
            Authorization: `${token}`,
          },
        });
  },
  reviewGet: async (url: string, params?: any) => {
    return api({
      url: url,
      method: "get",
    });
  },
  post: async (url: string, params: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? api({
          url: url,
          method: "post",
          data: params,
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "post",
          headers: {
            Authorization: `${token}`,
          },
        });
  },
  put: async (url: string, params: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? api({
          url: url,
          method: "put",
          params: params,
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "put",
          headers: {
            Authorization: `${token}`,
          },
        });
  },
  delete: async (url: string, params?: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? api({
          url: url,
          method: "delete",
          data: params,
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "delete",
          headers: {
            Authorization: `${token}`,
          },
        });
  },
};
