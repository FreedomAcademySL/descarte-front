import { AxiosResponse } from 'axios';

import { axiosInstance } from './axios.instance';
import { LoginSchemaType, SignUpSchemaType } from '@/components';
import { ResetPasswordBody } from '@/dtos';

const authLogin = async (body: LoginSchemaType): Promise<AxiosResponse> => {
  return await axiosInstance.post('/auth/login', body);
};

const authSignUp = async (
  body: Partial<SignUpSchemaType>,
): Promise<AxiosResponse> => {
  return await axiosInstance.post('/auth/signup', body);
};

const mailPasswordCreation = async (
  body: ResetPasswordBody,
): Promise<AxiosResponse> => {
  return await axiosInstance.post('/auth/mail-password-creation', body);
};

export const AuthService = {
  authLogin,
  authSignUp,
  mailPasswordCreation,
};
