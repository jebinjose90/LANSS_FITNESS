//LANSS_FITNESS\frontend\src\infrastructure\services\userService\userTokenService.ts
export const TokenService = {
    setToken: (token: string) => {
      localStorage.setItem('userAuthToken', token);
    },
    getToken: (): string | null => {
      return localStorage.getItem('userAuthToken');
    },
    clearToken: () => {
      localStorage.removeItem('userAuthToken');
    },
  };
  