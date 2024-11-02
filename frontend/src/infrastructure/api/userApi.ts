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
    console.log(`${apiUrl}/sigin`)
    console.log(email, password)
    const response = await axios.post(`${apiUrl}/signin`, { email, password });
    const { token, user } = response.data;
    // Store JWT token in localStorage
    localStorage.setItem('token', token);
    return user;
  },
  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}/auth/user/google`; // Adjust path based on user module
  },
  signup: async (username: string, email: string, password: string, phone: number) => {
    const response = await axios.post(`${apiUrl}/signup/request-otp`, { username, email, password, phone });
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
  // Example of an authenticated request
  fetchUserProfile: async () => {
    const response = await apiClient.get(`/user/profile`);
    return response.data;
  },
};
