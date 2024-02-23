import { User } from '@/dtos';

import { StorageUtils } from '../utils/storage.utils';
import { ApiResponse, axiosInstance } from './axios.instance';

const basePath = '/users';

const getLoggedInUser = (): Promise<ApiResponse<User>> => {
  const userId = StorageUtils.getUserIdFromJWT();

  return axiosInstance.get(`${basePath}/${userId}`);
};

const getUsers = (): Promise<ApiResponse<User[]>> => {
  return axiosInstance.get(`${basePath}`);
};

const createUser = (user: Partial<User>): Promise<ApiResponse<User[]>> => {
  return axiosInstance.post(`${basePath}`, user);
};

const updateUser = (
  id: number,
  body: Partial<User>,
): Promise<ApiResponse<User[]>> => {
  return axiosInstance.put(`${basePath}/${id}`, body);
};

const getUser = (id: string): Promise<ApiResponse<User>> => {
  return axiosInstance.get(`${basePath}/${id}`);
};

const deleteUser = (id: number): Promise<ApiResponse<User>> => {
  return axiosInstance.delete(`${basePath}/${id}`);
};

export const UsersService = {
  getLoggedInUser,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
