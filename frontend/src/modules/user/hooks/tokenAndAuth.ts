import { useState, useEffect } from 'react';
import { TokenService } from '../../../infrastructure/services/userService/userTokenService';
import userCRM from '../../../router/UserRoute/userCRM';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = TokenService.getToken();
    setIsAuthenticated(!!token); // Check if token exists
  }, []);

  const logout = () => {
    TokenService.clearToken();
    setIsAuthenticated(false);
    window.location.href = `/${userCRM.UserLogin}`; // Redirect to login page
  };

  return { isAuthenticated, logout };
};
