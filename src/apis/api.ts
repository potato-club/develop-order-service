import { tokenService } from "./../libs/tokenService";
import axios from "axios";
import Router from "next/router";
import { pathName } from "../config/pathName";
import applyDefaultParams from "./applyDefaultParams";

import normalizeAxiosError, {
  SERVER_ERROR,
  TIMEOUT_ERROR,
  NETWORK_ERROR,
  CLIENT_ERROR,
  UNAUTH_ERROR,
} from "./normalizeAxiosError";

const API_TIMEOUT = 50000; // 50s

const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: API_TIMEOUT,
  withCredentials: false,
});

function getBaseUrl() {
  return "http://www.developorderservice.store/";
}

api.interceptors.request.use(applyDefaultParams);
api.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    console.log(error.response.data.code);

    if (error.response.data && error.response.data.code == 444) {
      await axios
        .get("http://www.developorderservice.store/token/refresh", {
          headers: { refresh: tokenService.getRefresh() },
        })
        .then((data) => {
          if (data) {
            tokenService.setToken(`${data.data["accessToken"]}`);
            tokenService.setRefresh(`${data.data["refreshToken"]}`);
            originalRequest.headers["Authorization"] = tokenService.getToken();
            originalRequest.headers["refresh"] = tokenService.getRefresh();
            return api(originalRequest);
          }
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    } else if (error.response.data && error.response.data.code == 445) {
      tokenService.resetToken();
      tokenService.resetRefresh();
      tokenService.resetRole();
      Router.push(pathName.MAIN);
      return;
    }
  }
);
// api.interceptors.response.use(undefined, normalizeAxiosError);
api.interceptors.response.use(undefined, function (err) {
  console.log("ERR :: ", err);

  if (err.code === TIMEOUT_ERROR || err.code === NETWORK_ERROR) {
    //
  }
  if (err.code === UNAUTH_ERROR) {
    //
  }
  if (err.code === SERVER_ERROR) {
    //
  }
  if (err.code === CLIENT_ERROR) {
    //
  }
  return Promise.reject(err);
});

export default api;
