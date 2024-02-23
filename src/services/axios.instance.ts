import axios, { AxiosError, AxiosResponse } from 'axios';

import { def } from '../utils/generic.utils';
import { getEnvVariable } from '../utils/environment.utils';

import { HttpStatus } from '@/constants';
import {
  getAccessTokenFromLocalStorage,
  getTokensFromLocalStorage,
  removeTokensFromLocalStorage,
} from '@/utils';

const TIMEOUT_BEFORE_REDIRECT_LOGIN = 100;

export const axiosInstance = axios.create({
  baseURL: getEnvVariable('API_BASE_PATH'),
});

export interface ApiResponse<T> extends AxiosResponse<T> {
  message?: string;
  data: T;
}

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken, refreshToken } = getTokensFromLocalStorage();

    if (accessToken || refreshToken) {
      config.headers.set('authorization', `Bearer ${accessToken}`);
    }

    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => {
    handleUnauthorized(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return genericResponseParser(response);
  },
  (error) => {
    handleUnauthorized(error);

    if (error.response) {
      // Request completed but response status code falls outside the range of 2xx
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error);
    }
  },
);

const handleUnauthorized = (error: AxiosError): void => {
  if (
    error &&
    error.response &&
    (error.response.status === HttpStatus.UNAUTHORIZED ||
      error.response.status === HttpStatus.FORBIDDEN)
  ) {
    const token = getAccessTokenFromLocalStorage();

    if (def(token)) {
      const timeout = setTimeout(() => {
        removeTokensFromLocalStorage();
        window.location.href = window.location.origin + '/login';
        clearTimeout(timeout);
      }, TIMEOUT_BEFORE_REDIRECT_LOGIN);
    }
  }
};

const genericResponseParser = <T>(
  response: AxiosResponse<T>,
): ApiResponse<T> => {
  return {
    ...response,
    data: response.data,
    message:
      response.data['message' as keyof T] !== undefined
        ? (response.data as string)
        : response.statusText,
  };
};
