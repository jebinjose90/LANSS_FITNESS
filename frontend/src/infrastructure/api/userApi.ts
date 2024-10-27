import axios from 'axios';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const userApi = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    return response.data;
  },
  signup: async (name: string, email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/signup`, { name, email, password });
    return response.data;
  },
  resetPassword: async (email: string) => {
    const response = await axios.post(`${apiUrl}/reset-password`, { email });
    return response.data;
  },
  verifyEmail: async (token: string) => {
    const response = await axios.post(`${apiUrl}/verify-email`, { token });
    return response.data;
  },
};
