//LANSS_FITNESS\frontend\src\infrastructure\services\userService\userAuthService.ts
import { loginApi } from '../../api/userApi/userAuthApi';
import { LoginRequest, LoginResponse } from '../../../core/models/Userr/userAuthModel';
import { TokenService } from './userTokenService';
import userCRM from '../../../core/constants/route/userCRM';
import { useNavigate } from 'react-router-dom';

// Login function
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await loginApi(data);
    TokenService.setToken(response.token); // Save token
    return response;
  } catch (error) {
    throw new Error(error as string); // Re-throw for higher layers to handle
  }
};

// Logout function using React Router's useNavigate
export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    TokenService.clearToken();
    navigate(userCRM.UserLogin); // Redirect to login page
  };

  return logout;
};
