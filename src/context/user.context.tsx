'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { StorageUtils, getTokensFromLocalStorage } from '@/utils';
import { User } from '@/dtos';
import { AuthStorage, Roles } from '@/enums';

export interface LoggedInUserContextProps {
  isLoading: boolean;
  loggedInFrom: string | undefined;
  loggedInUser?: User;
  isAdmin: () => boolean;
  logout: () => void;
  setLoggedInFrom: (fromUrl: string) => void;
  updateLoggedInUser: (user: User) => void;
  userIsLoggedIn: () => boolean;
}

export const LoggedInUserContext = createContext<LoggedInUserContextProps>({
  isLoading: true,
  loggedInFrom: undefined,
  isAdmin: () => false,
  logout: () => undefined,
  setLoggedInFrom: () => undefined,
  updateLoggedInUser: () => undefined,
  userIsLoggedIn: () => false,
});

export const LoggedInUserProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const [userRole, setUserRole] = useState<Roles | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInFrom, setLoggedInFrom] = useState<string | undefined>();

  const { accessToken } = useMemo(() => getTokensFromLocalStorage(), []);

  const getLoggedInUserWithRoles = useCallback(() => {
    setIsLoading(true);
    try {
      const userInfo = StorageUtils.getUserInfoFromJWT<User>(accessToken || '');
      if (userInfo) {
        setLoggedInUser(userInfo);
      }
    } catch (error) {
      setLoggedInUser(undefined);
    }
    setIsLoading(false);
  }, [accessToken]);

  const updateLoggedInUser = (user: User): void => {
    setLoggedInUser(user);
  };

  const logout = async (): Promise<void> => {
    setLoggedInUser(undefined);
    setLoggedInFrom(undefined);
    setUserRole(undefined);
    StorageUtils.remove(AuthStorage.ACCESS_TOKEN);
  };

  const isAdmin = useCallback((): boolean => {
    if (userRole) {
      return userRole.includes(Roles.ADMIN);
    } else return false;
  }, [userRole]);

  const userIsLoggedIn = useCallback((): boolean => {
    return loggedInUser ? true : false;
  }, [loggedInUser]);

  useEffect(() => {
    getLoggedInUserWithRoles();
  }, [getLoggedInUserWithRoles]);

  return (
    <LoggedInUserContext.Provider
      value={{
        isLoading,
        loggedInFrom,
        loggedInUser,
        logout,
        isAdmin,
        setLoggedInFrom,
        updateLoggedInUser,
        userIsLoggedIn,
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};
