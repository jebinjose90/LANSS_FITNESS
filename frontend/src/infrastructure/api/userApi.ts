// \frontend\src\infrastructure\api\userApi.ts

import axios from 'axios';
import userEndUrls from '../../core/constants/endUrl/userEndUrls';

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
  // login: async (email: string, password: string) => {
  //   const response = await axios.post(`${apiUrl}${userEndUrls.login}`, { email, password });
  //   return response.data
  // },
  login: (email: string, password: string) =>
    axios.post(`${apiUrl}${userEndUrls.login}`, { email, password }),

  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}${userEndUrls.loginWithGoogle}`; // Adjust path based on user module
  },
  signup: async (username: string, email: string, password: string, phone: number, imageUrl: string) => {
    const response = await axios.post(`${apiUrl}${userEndUrls.signup}`, { username, email, password, phone, imageUrl });
    return response.data;
  },
  requestResendOtp: async (email: string) => {
    const response = await axios.post(`${apiUrl}${userEndUrls.requestResendOtp}`, { email});
    return response.data;
  },
  logout: async () => {
    await axios.post(`${apiUrl}${userEndUrls.logout}`);
  },
  verifyOtp: async (email: string, otp: string) => {
    const response = await axios.post(`${apiUrl}${userEndUrls.verifyOtp}`, { email, otp });
    return response.data; // Ensure the response has the expected shape
  },
  resetPassword: async (email: string) => {
    const response = await axios.post(`${apiUrl}${userEndUrls.resetPassword}`, { email });
    return response.data;
  },
  verifyEmail: async (token: string) => {
    const response = await axios.post(`${apiUrl}${userEndUrls.verifyEmail}`, { token });
    return response.data;
  },
  // Example of an authenticated request
  homeData: async () => {
    const response = await apiClient.post(`${apiUrl}${userEndUrls.homeData}`);
    return response.data;
  },
  profileData: async () => {
    const response = await apiClient.post(`${apiUrl}${userEndUrls.profileData}`);
    console.log("DATA",response.data);
    return response.data;
  },
  updateProfile: async (email: string ,username: string, age: string, gender: string, height: string, weight: string, place: string) => {
    const response = await apiClient.post(`${apiUrl}${userEndUrls.updateUserProfile}`,{email,username, age, gender, height, weight, place});
    console.log("DATA",response.data);
    return response.data;
  },
  submitBMI: async (weight: string, heightCm: string, age: string, gender: string) => {
    const response = await apiClient.post(`${apiUrl}${userEndUrls.submitBMI}`,{weight, heightCm, age, gender});
    return response.data;
  },
};
