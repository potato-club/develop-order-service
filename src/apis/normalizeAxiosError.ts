import { sessionService } from '../libs/sessionService';
import axios from 'axios';

export const UNAUTH_ERROR = 'UNAUTH_ERROR';
export const CLIENT_ERROR = 'CLIENT_ERROR';
export const SERVER_ERROR = 'SERVER_ERROR';
export const CANCEL_ERROR = 'CANCEL_ERROR';
export const TIMEOUT_ERROR = 'TIMEOUT_ERROR';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

function xhrError({ code, status = 0, data = {} }: any) {
  const err: any = new Error();
  err.name = 'XhrError';
  err.message = err.code = code;
  err.data = data;
  err.status = status;
  return Promise.reject(err);
}

export default function normalizeAxiosError(error: any) {
  // timeout
  if (error.code === 'ECONNABORTED') {
    return xhrError({
      code: TIMEOUT_ERROR,
    });
  }

  // cancel
  if (axios.isCancel(error)) {
    // return xhrError({
    //   code: CANCEL_ERROR
    // })
    return; /** ignore */
  }

  // service error, 400 401 404 500 502...
  if (error.response) {
    if ([401, 423].includes(error.response.status)) {
      sessionService.resetIdSession();
      location.replace('/login?warn');

      return xhrError({
        code: UNAUTH_ERROR,
        status: error.response.status,
        data: error.response.data,
      });
    }
    if (error.response.status >= 400 && error.response.status < 500) {
      return xhrError({
        code: CLIENT_ERROR,
        status: error.response.status,
        data: error.response.data,
      });
    }
    if (error.response.status >= 500 && error.response.status < 600) {
      return xhrError({
        code: SERVER_ERROR,
        status: error.response.status,
        data: error.response.data,
      });
    }
    return xhrError({
      code: UNKNOWN_ERROR,
    });
  }

  // network error
  if (error.request) {
    return xhrError({
      code: NETWORK_ERROR,
    });
  }

  // throw error on request config?
  return xhrError({
    code: UNKNOWN_ERROR,
  });
}
