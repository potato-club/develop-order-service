import { sessionService } from "../libs/sessionService";
import api from "./api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params?: any) => {
    const idSession = await sessionService.getIdSession();

    return params !== undefined
      ? api({
          url: url,
          method: "get",
          params: params,
          headers: {
            Authorization: `${idSession}`,
          },
        })
      : api({
          url: url,
          method: "get",
          headers: {
            Authorization: `${idSession}`,
          },
        });
  },
  post: async (url: string, params: any) => {
    const idSession = await sessionService.getIdSession();

    return params !== undefined
      ? api({
          url: url,
          method: "post",
          data: params,
          headers: {
            Authorization: `${idSession}`,
          },
        })
      : api({
          url: url,
          method: "post",
          headers: {
            Authorization: `${idSession}`,
          },
        });
  },
  put: async (url: string, params: any) => {
    const idSession = await sessionService.getIdSession();

    return params !== undefined
      ? api({
          url: url,
          method: "put",
          params: params,
          headers: {
            Authorization: `${idSession}`,
          },
        })
      : api({
          url: url,
          method: "put",
          headers: {
            Authorization: `${idSession}`,
          },
        });
  },
  delete: async (url: string, params?: any) => {
    const idSession = await sessionService.getIdSession();

    return params !== undefined
      ? api({
          url: url,
          method: "delete",
          data: params,
          headers: {
            Authorization: `${idSession}`,
          },
        })
      : api({
          url: url,
          method: "delete",
          headers: {
            Authorization: `${idSession}`,
          },
        });
  },
};
