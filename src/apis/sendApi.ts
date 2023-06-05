import { tokenService } from "../libs/tokenService";
import api from "./api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params?: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? token !== null
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
            params: params,
          })
      : token !== null
      ? api({
          url: url,
          method: "get",
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "get",
          headers: {},
        });
  },
  post: async (url: string, params: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? token !== null
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
            data: params,
            headers: {},
          })
      : token !== null
      ? api({
          url: url,
          method: "post",
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "post",
          headers: {},
        });
  },
  put: async (url: string, params: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? token !== null
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
            params: params,
            headers: {},
          })
      : token !== null
      ? api({
          url: url,
          method: "put",
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "put",
          headers: {},
        });
  },
  delete: async (url: string, params?: any) => {
    const token = await tokenService.getToken();

    return params !== undefined
      ? token !== null
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
            data: params,
            headers: {},
          })
      : token !== null
      ? api({
          url: url,
          method: "delete",
          headers: {
            Authorization: `${token}`,
          },
        })
      : api({
          url: url,
          method: "delete",
          headers: {},
        });
  },
};
