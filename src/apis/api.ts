import axios from "axios";
import applyDefaultParams from "./applyDefaultParams";
import { TokenAPI } from "./controller/token.api";

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
  // return "https://www.developorderservice.store/";
  return "http://www.developorderservice.store/";
}

api.interceptors.request.use(applyDefaultParams);
// api.interceptors.response.use(
//   (response) => response,
//   async function (error) {
//     const originalRequest = error.config;
//     if ((error.response.data.code = 444)) {
//       const token = await TokenAPI.tokenRefresh();
//       if (token) {
//         localStorage.setItem("token", `${token}`);

//         return api(originalRequest);
//       }
//     }

//     // If the error is not related to token expiration, handle it as usual
//     return Promise.reject(normalizeAxiosError(error));
//   }
// );
api.interceptors.response.use(undefined, normalizeAxiosError);
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
