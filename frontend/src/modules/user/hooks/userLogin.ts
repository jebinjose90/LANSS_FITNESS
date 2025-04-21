import { useState } from 'react';
import { login } from '../../../infrastructure/services/userService/userAuthService';
import { LoginRequest } from '../../../core/models/Userr/userAuthModel';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await login(data);
      return response;
    } catch (err) {
      // Narrow the error type
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};
