import { LocalStorageVars } from '../constants/storage.constants';
import { StorageUtils } from './storage.utils';

//Get tokens from local storage
export const getTokensFromLocalStorage = (): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  const accessToken = getAccessTokenFromLocalStorage();
  const refreshToken = getRefreshTokenFromLocalStorage();

  return { accessToken, refreshToken };
};

export const getAccessTokenFromLocalStorage = (): string | null =>
  StorageUtils.get(LocalStorageVars.ACCESS_TOKEN);

export const getRefreshTokenFromLocalStorage = (): string | null =>
  StorageUtils.get(LocalStorageVars.REFRESH_TOKEN);

//Set tokens into local storage
export const setTokensIntoLocalStorage = (
  accessToken: string,
  refreshToken: string,
): void => {
  setAccessTokenIntoLocalStorage(accessToken);
  setRefreshTokenIntoLocalStorage(refreshToken);
};

export const setAccessTokenIntoLocalStorage = (accessToken: string): void => {
  StorageUtils.set(LocalStorageVars.ACCESS_TOKEN, accessToken);
};

export const setRefreshTokenIntoLocalStorage = (refreshToken: string): void => {
  StorageUtils.set(LocalStorageVars.REFRESH_TOKEN, refreshToken);
};

// Remove tokens from local storage
export const removeTokensFromLocalStorage = (): void => {
  removeAccessTokenFromLocalStorage();
  removeRefreshTokenFromLocalStorage();
};

export const removeAccessTokenFromLocalStorage = (): void => {
  StorageUtils.remove(LocalStorageVars.ACCESS_TOKEN);
};

export const removeRefreshTokenFromLocalStorage = (): void => {
  StorageUtils.remove(LocalStorageVars.REFRESH_TOKEN);
};
