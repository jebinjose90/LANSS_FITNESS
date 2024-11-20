// \frontend\src\infrastructure\api\userApi.ts

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

export const userApi = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/signin`, { email, password });
    return response.data
  },
  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}/auth/user/google`; // Adjust path based on user module
  },
  signup: async (username: string, email: string, password: string, phone: number, imageUrl: string) => {
    const response = await axios.post(`${apiUrl}/signup/request-otp`, { username, email, password, phone, imageUrl });
    return response.data;
  },
  requestResendOtp: async (email: string) => {
    const response = await axios.post(`${apiUrl}/request-resend-otp`, { email});
    return response.data;
  },
  logout: async () => {
    await axios.post(`${apiUrl}/logout`);
  },
  verifyOtp: async (email: string, otp: string) => {
    const response = await axios.post(`${apiUrl}/signup/verify-otp`, { email, otp });
    return response.data; // Ensure the response has the expected shape
  },
  resetPassword: async (email: string) => {
    const response = await axios.post(`${apiUrl}/reset-password`, { email });
    return response.data;
  },
  verifyEmail: async (token: string) => {
    const response = await axios.post(`${apiUrl}/verify-email`, { token });
    return response.data;
  },
  // Example of an authenticated request
  homeData: async () => {
    const response = await apiClient.post(`${apiUrl}/home`);
    return response.data;
  },

  submitBMI: async (weight: string, heightCm: string, age: string, gender: string) => {
    const response = await apiClient.post(`${apiUrl}/calculate-bmi`,{weight, heightCm, age, gender});
    return response.data;
  },
};
