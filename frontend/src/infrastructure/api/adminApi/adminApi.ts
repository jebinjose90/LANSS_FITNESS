// \frontend\src\infrastructure\api\adminApi.ts
import adminEndUrls from '../../../core/constants/endUrl/adminEndUrls'; 
import apiClient from '../baseUrl';

export const adminApi = {
  login: async (email: string, password: string) =>
    apiClient.post(`${adminEndUrls.login}`, { email, password }),
  logout: () =>
    apiClient.post(`${adminEndUrls.logout}`),
}