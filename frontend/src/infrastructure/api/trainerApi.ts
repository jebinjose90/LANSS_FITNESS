// \frontend\src\infrastructure\api\trainerApi.ts

import axios from 'axios';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// Create an axios instance
const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: true
});

export const trainerApi = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/trainer/signin`, { email, password });
    return response.data
  },
  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}/trainer/auth/trainer/google`; // Adjust path based on user module
  },
  signup: async (trainername: string, email: string, password: string, phone: number, imageUrl: string, certificatePdfUrl: string) => {
    const response = await axios.post(`${apiUrl}/trainer/signup/request-otp`, { trainername, email, password, phone, imageUrl, certificatePdfUrl});
    return response.data;
  },
  requestResendOtp: async (email: string) => {
    const response = await axios.post(`${apiUrl}/trainer/request-resend-otp`, { email});
    return response.data;
  },
  logout: async () => {
    await axios.post(`${apiUrl}/trainer/logout`);
  },
  verifyOtp: async (email: string, otp: string) => {
    const response = await axios.post(`${apiUrl}/trainer/signup/verify-otp`, { email, otp });
    return response.data; // Ensure the response has the expected shape
  },
  resetPassword: async (email: string) => {
    const response = await axios.post(`${apiUrl}/trainer/reset-password`, { email });
    return response.data;
  },
  verifyEmail: async (token: string) => {
    const response = await axios.post(`${apiUrl}/trainer/verify-email`, { token });
    return response.data;
  },
  profileData: async () => {
    const response = await axios.post(`${apiUrl}/trainer/profile`);
    return response.data;
  },

  usersListData: async () => {
    const response = await axios.post(`${apiUrl}/trainer/usersList`);
    return response.data;
  }
};
