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

  // orderReview 페이지에서 로그인 하지 않은 상태에서는 토큰이 필요없고 로그인 되어있는 상태에서는 토큰이 필요해서 만든 메소드
  reviewGet: async (url: string, params?: any) => {
    const token = await tokenService.getToken();
    const headers: { [key: string]: string } = {};

    if (token) {
      headers["Authorization"] = `${token}`;
    }

    return api({
      url: url,
      method: "get",
      headers: headers,
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
  put: async (url: string, params?: any) => {
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
