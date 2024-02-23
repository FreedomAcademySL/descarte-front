import { Roles } from '@/enums';

export interface User {
  role?: keyof typeof Roles | string;
  roleId?: number;
  sub?: string;
  userId?: string;
  email?: string;
}
export interface AuthResponse {
  accessToken?: string;
  refreshToken?: string;
  payload: User;
}

export interface UpdatePasswordBody {
  currentPassword: string;
  newPassword: string;
}

export interface JWTPayload {
  email: string;
  userId: string;
  exp: number;
  iat: number;
}

export interface ResetPasswordBody {
  token: string;
  newPassword: string;
}
