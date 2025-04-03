import axiosInstance from '../axiosInstance';
import { LoginRequest, LoginResponse } from '../../../core/models/Userr/userAuthModel';
import userEndUrls from './userEndUrls';

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(`${userEndUrls.login}`, data);
  return response.data;
};
