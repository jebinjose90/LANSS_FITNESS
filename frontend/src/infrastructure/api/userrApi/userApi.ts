// \frontend\src\infrastructure\api\userApi.ts
import axios from 'axios';
import userEndUrls from '../../../core/constants/endUrl/userEndUrls';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const userApi = {
  login: (email: string, password: string) => 
    apiClient.post(userEndUrls.login, { email, password }),

  loginWithGoogle: () => {
    window.location.href = `${apiUrl}${userEndUrls.loginWithGoogle}`;
  },

  signup: (username: string, email: string, password: string, phone: number, imageUrl: string) =>
    apiClient.post(userEndUrls.signup, { username, email, password, phone, imageUrl }),

  requestResendOtp: (email: string) =>
    apiClient.post(userEndUrls.requestResendOtp, { email }),

  logout: () =>
    apiClient.post(userEndUrls.logout),

  verifyOtp: (email: string, otp: string) =>
    apiClient.post(userEndUrls.verifyOtp, { email, otp }),

  resetPassword: (email: string) =>
    apiClient.post(userEndUrls.resetPassword, { email }),

  verifyEmail: () =>
    apiClient.post(userEndUrls.verifyEmail),

  homeData: () =>
    apiClient.post(userEndUrls.homeData),

  profileData: () =>
    apiClient.post(userEndUrls.profileData),

  updateProfile: (email: string, username: string, age: string, gender: string, height: string, weight: string, place: string) =>
    apiClient.post(userEndUrls.updateUserProfile, { email, username, age, gender, height, weight, place }),

  submitBMI: (weight: string, heightCm: string, age: string, gender: string) =>
    apiClient.post(userEndUrls.submitBMI, { weight, heightCm, age, gender }),
};
