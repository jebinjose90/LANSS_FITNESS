// \frontend\src\infrastructure\api\axiosInstance.ts

import axios from 'axios';
import { TokenService } from '../services/userService/userTokenService';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && error.response?.data?.message === 'Token expired') {
      // Attempt to refresh token
      try {
        const refreshResponse = await axiosInstance.post('/auth/refresh-token', {
          token: TokenService.getToken(),
        });
        TokenService.setToken(refreshResponse.data.token); // Save new token
        error.config.headers['Authorization'] = `Bearer ${refreshResponse.data.token}`;
        return axiosInstance.request(error.config); // Retry failed request
      } catch (refreshError) {
        TokenService.clearToken();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

