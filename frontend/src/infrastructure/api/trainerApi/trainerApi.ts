// \frontend\src\infrastructure\api\trainerApi.ts
import trainerEndUrls from '../../../core/constants/endUrl/trainerEndUrls';
import apiClient from '../baseUrl';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const trainerApi = {
  login: (email: string, password: string) => 
    apiClient.post(trainerEndUrls.login, { email, password }),

  loginWithGoogle: async () => {
    window.location.href = `${apiUrl}${trainerEndUrls.signupWithGoogle}`; // Adjust path based on user module
  },
  signup: (trainername: string, email: string, password: string, phone: number, imageUrl: string, certificatePdfUrl: string) => 
    apiClient.post(`${trainerEndUrls.signup}`, { trainername, email, password, phone, imageUrl, certificatePdfUrl}),

  requestResendOtp: (email: string) => 
    apiClient.post(`${trainerEndUrls.requestResendOtp}`, { email}),

  logout: () =>
    apiClient.post(`${trainerEndUrls.logout}`),

  verifyOtp: (email: string, otp: string) =>
    apiClient.post(`${trainerEndUrls.verifyOtp}`, { email, otp }),

  resetPassword: (email: string) =>
    apiClient.post(`${trainerEndUrls.resetPassword}`, { email }),

  verifyEmail: (token: string) =>
    apiClient.post(`${trainerEndUrls.verifyEmail}`, { token }),

  profileData: () =>
    apiClient.post(`${trainerEndUrls.profile}`),

  usersListData: () =>
    apiClient.post(`${trainerEndUrls.userList}`),
};
