import axios from 'axios';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const userApi = {
  login: async (email: string, password: string) => {
    console.log(`${apiUrl}/sigin`)
    console.log(email, password)
    const response = await axios.post(`${apiUrl}/signin`, { email, password });
    return response.data;
  },
  signup: async (username: string, email: string, password: string, phone: number) => {
    const response = await axios.post(`${apiUrl}/signup/request-otp`, { username, email, password, phone});
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
