import axios from 'axios';
import applyDefaultParams from './applyDefaultParams';

import normalizeAxiosError, {
  SERVER_ERROR,
  TIMEOUT_ERROR,
  NETWORK_ERROR,
  CLIENT_ERROR,
  UNAUTH_ERROR,
} from './normalizeAxiosError';
import { settings } from '@street-vendor/core';

const API_TIMEOUT = 50000; // 50s

const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: API_TIMEOUT,
  withCredentials: false,
});

function getBaseUrl() {
  return settings.api.baseUrl;
}

api.interceptors.request.use(applyDefaultParams);
api.interceptors.response.use(undefined, normalizeAxiosError);
api.interceptors.response.use(undefined, function (err) {
  console.log('ERR :: ', err);

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
