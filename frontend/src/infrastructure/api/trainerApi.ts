// \frontend\src\infrastructure\api\trainerApi.ts

import axios from 'axios';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// Create an axios instance
const apiClient = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const trainerApi = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/trainer/signin`, { email, password });
    return response.data
  },
  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}/trainer/auth/trainer/google`; // Adjust path based on user module
  },
  signup: async (username: string, email: string, password: string, phone: number, imageUrl: string) => {
    const response = await axios.post(`${apiUrl}/trainer/signup/request-otp`, { username, email, password, phone, imageUrl });
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
  // Example of an authenticated request
  profileData: async () => {
    const response = await apiClient.post(`${apiUrl}/trainer/profile`);
    return response.data;
  },
};
