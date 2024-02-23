import { jwtDecode } from 'jwt-decode';

import { def } from './generic.utils';
import { AuthStorage } from '@/enums';

interface JWTPayload {
  email: string;
  userId: string;
  exp: string;
  iat: string;
}

function getStorage(): Storage | null {
  if (typeof window !== 'undefined') {
    return localStorage;
  }
  return null;
}

const getUserIdFromJWT = (): string => {
  const decoded = jwtDecode<JWTPayload>(
    getString(AuthStorage.AUTH_TOKEN_NAME) || '',
  );
  return decoded.userId;
};

const getUserInfoFromJWT = <T>(token: string): T => {
  const decoded = jwtDecode<JWTPayload>(token);
  return decoded as unknown as T;
};

const exist = (key: string): boolean => {
  const storage = getStorage();
  if (storage) {
    for (let index = 0; index < storage.length; index++) {
      const existentKey = storage.key(index);
      if (existentKey === key) {
        return true;
      }
    }
  }
  return false;
};

const get = <T>(key: string): T | null => {
  const storage = getStorage();
  if (storage) {
    const value = storage.getItem(key);
    if (value !== null) {
      try {
        return JSON.parse(value);
      } catch {
        return value as unknown as T;
      }
    }
  }
  return null;
};

const getString = (key: string): string | null => {
  return get(key);
};

const set = <T>(key: string, object: T): void => {
  const storage = getStorage();
  if (storage && def(object)) {
    storage.setItem(
      key,
      typeof object === 'string' ? object : JSON.stringify(object),
    );
  } else if (storage) {
    storage.removeItem(key);
  }
};

const remove = (key: string): void => {
  const storage = getStorage();
  if (storage) {
    storage.removeItem(key);
  }
};

export interface StorageUtilsDefinition {
  set: <T>(key: string, object: T) => void;
  exist: (key: string) => boolean;
  get: <T>(key: string) => T | null;
  remove: (key: string) => void;
  getUserIdFromJWT: () => string;
  getUserInfoFromJWT: <T>(token: string) => T;
}

export const StorageUtils: StorageUtilsDefinition = {
  set,
  get,
  exist,
  remove,
  getUserIdFromJWT,
  getUserInfoFromJWT,
};
